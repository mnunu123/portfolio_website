// Homepage: Hero + WHY US + Pain Point sections
import { Hero } from '@/components/home/Hero';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { PainPointSection } from '@/components/home/PainPointSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUsSection />
      <PainPointSection />
    </>
  );
}
