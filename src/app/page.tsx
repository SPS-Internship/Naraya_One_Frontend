import HeroSection from "@/components/home/HeroSection";
import BriefProfile from "@/components/home/BriefProfile";
import EntityHighlights from "@/components/home/EntityHighlights";
import DigitalEcosystem from "@/components/home/DigitalEcosystem";
import EmbeddedVideo from "@/components/home/EmbeddedVideo";
import SecondaryCTAs from "@/components/home/SecondaryCTAs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BriefProfile />
      <EntityHighlights />
      <DigitalEcosystem />
      <EmbeddedVideo />
      <SecondaryCTAs />
    </div>
  );
}
