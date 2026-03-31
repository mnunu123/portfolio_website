// Homepage: Hero + WHY US + Pain Point + Transformation + Trust sections
import { Hero } from '@/components/home/Hero';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { PainPointSection } from '@/components/home/PainPointSection';
import { TransformationSection } from '@/components/home/TransformationSection';
import { TrustSection } from '@/components/home/TrustSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUsSection />
      <PainPointSection />
      <TransformationSection />
      <TrustSection />
    </>
  );
}
