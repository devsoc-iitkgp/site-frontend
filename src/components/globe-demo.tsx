"use client";
import React from "react";
// import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: -22.9519, lng: -43.2105 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="flex min-h-[800px] w-full items-center justify-center bg-white dark:bg-black">
      <div className="globe-container">
        <World data={[]} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
