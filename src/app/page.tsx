
import { HeroSection } from "@/components/sections/HeroSection";
import { OrientadorSection } from "@/components/sections/OrientadorSection";
import dynamic from "next/dynamic";

const ManifestoSection = dynamic(() => import("@/components/sections/ManifestoSection").then(mod => mod.ManifestoSection), { ssr: true });
const EspecialidadesSection = dynamic(() => import("@/components/sections/EspecialidadesSection").then(mod => mod.EspecialidadesSection), { ssr: true });
const NeuroSection = dynamic(() => import("@/components/sections/NeuroSection").then(mod => mod.NeuroSection), { ssr: true });
const TimelineSection = dynamic(() => import("@/components/sections/TimelineSection").then(mod => mod.TimelineSection), { ssr: true });
const TeamSection = dynamic(() => import("@/components/sections/TeamSection").then(mod => mod.TeamSection), { ssr: true });
const UnitsSection = dynamic(() => import("@/components/sections/UnitsSection").then(mod => mod.UnitsSection), { ssr: true });
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then(mod => mod.FaqSection), { ssr: true });
const FinalCtaSection = dynamic(() => import("@/components/sections/FinalCtaSection").then(mod => mod.FinalCtaSection), { ssr: true });

export default function Home() {
  return (
    <>
      <HeroSection />
      <OrientadorSection />
      <div className="content-auto">
        <ManifestoSection />
        <EspecialidadesSection />
        <NeuroSection />
        <TimelineSection />
        <TeamSection />
        <UnitsSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </>
  );
}
