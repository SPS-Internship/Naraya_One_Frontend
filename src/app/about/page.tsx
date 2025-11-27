import AboutIntro from "@/components/about/AboutIntro"
import VisionMissionValues from "@/components/about/VisionMissionValues"
import LeadershipTeam from "@/components/about/LeadershipTeam"

export default function AboutPage() {
  return (
    <div>
      <AboutIntro />
      <VisionMissionValues />
      <LeadershipTeam />
    </div>
  )
}

export const metadata = {
  title: "About Us | Naraya.One - Our Story, Vision & Leadership",
  description: "Learn about Naraya.One's journey, vision, mission, core values, and leadership team. Discover how we're building integrated business ecosystems across telecommunications, technology, and services.",
}
