import Image from "next/image";
import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import Glow from "@/components/landing-page/Glow";
import KeyFeature from "@/components/landing-page/KeyFeature";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#09002f] via-[#130044] to-[#09002f]">
        {/* Glow besar di tengah (cyan) */}
        <Glow />
        {/* UI Layer */}
        <Navbar />
        <Hero />
        <KeyFeature />
      </div>
    </>
  );
}
