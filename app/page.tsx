// Homepage: Hero + WHY US + Pain Point + Transformation sections
import { Hero } from '@/components/home/Hero';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { PainPointSection } from '@/components/home/PainPointSection';
import { TransformationSection } from '@/components/home/TransformationSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUsSection />
      <PainPointSection />
      <TransformationSection />
    </>
  );
}
