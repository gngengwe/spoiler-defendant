import { Hero }           from "@/components/Hero";
import { ConceptSection } from "@/components/ConceptSection";
import { SampleCases }    from "@/components/SampleCases";
import { HowItWorks }     from "@/components/HowItWorks";
import { WhyItWorks }     from "@/components/WhyItWorks";
import { DocketSection }  from "@/components/DocketSection";
import { SignupSection }  from "@/components/SignupSection";
import { Footer }         from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ConceptSection />
      <SampleCases />
      <HowItWorks />
      <WhyItWorks />
      <DocketSection />
      <SignupSection />
      <Footer />
    </main>
  );
}
