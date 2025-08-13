"use client";
import { useEffect, useRef, useState } from "react";
import {
  Color,
  Scene,
  PerspectiveCamera,
  Vector3,
  Group,
  Object3D,
} from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { FeatureCollection, Geometry } from "geojson";

extend({ ThreeGlobe: ThreeGlobe });

const aspect = 1.2;
const cameraZ = 300;

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data?: unknown[]; // optional; keep for API compatibility
}

export function Globe({ globeConfig }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<Group>(new Group());
  const [isInitialized, setIsInitialized] = useState(false);
  const [countries, setCountries] = useState<FeatureCollection<Geometry>>({
    type: "FeatureCollection",
    features: [],
  });

  // Load GeoJSON
  useEffect(() => {
    fetch("/globe.json")
      .then((res) => res.json())
      .then((data: FeatureCollection<Geometry>) => setCountries(data))
      .catch(() => {
        // fail-safe: keep empty features on error
        setCountries({ type: "FeatureCollection", features: [] });
      });
  }, []);

  // Create globe and add to group
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current as unknown as Object3D);
      // push the whole globe down a bit inside its box
      groupRef.current.position.y = -20;
      setIsInitialized(true);
    }
  }, []);

  // Configure globe material
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
      transparent?: boolean;
      opacity?: number;
    };

    globeMaterial.color = new Color(globeConfig.globeColor ?? "#1d072e");
    globeMaterial.emissive = new Color(globeConfig.emissive ?? "#000000");
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity ?? 0.1;
    globeMaterial.shininess = globeConfig.shininess ?? 0.9;

    // ensure the base sphere doesn't create a boxy backdrop
    globeMaterial.transparent = true;
    globeMaterial.opacity = 0;
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
    globeConfig.shininess,
  ]);

  // Configure polygons / atmosphere
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    globeRef.current
      .hexPolygonsData(countries.features as unknown as object[])
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(globeConfig.showAtmosphere ?? true)
      .atmosphereColor(globeConfig.atmosphereColor ?? "#ffffff")
      .atmosphereAltitude(globeConfig.atmosphereAltitude ?? 0.1)
      .hexPolygonColor(
        () => globeConfig.polygonColor ?? "rgba(255,255,255,0.7)"
      );
  }, [
    isInitialized,
    countries,
    globeConfig.showAtmosphere,
    globeConfig.atmosphereColor,
    globeConfig.atmosphereAltitude,
    globeConfig.polygonColor,
  ]);

  return <primitive object={groupRef.current} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    // fully transparent canvas background
    gl.setClearColor(0x000000, 0);
  }, [gl, size]);
  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();

  return (
    <Canvas
      scene={scene}
      camera={new PerspectiveCamera(48, aspect, 180, 1800)}
      gl={{ alpha: true }}
      style={{ background: "transparent" }}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
