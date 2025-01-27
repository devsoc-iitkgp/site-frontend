import Image from "next/image";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <About/>
    </div>
  );
}
