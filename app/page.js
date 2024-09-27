import Image from "next/image";
import HeroSection4 from "./components/hero/HeroSection";
import AboutSection from "./components/who-we-are/AboutSection";
import SharedValues from "./components/shared-values/SharedValue";

export default function Home() {
  return (
    <div>
      <HeroSection4 />
      <AboutSection />
      <SharedValues />
    </div>
  );
}
