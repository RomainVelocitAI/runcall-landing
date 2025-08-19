import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import SocialProof from '@/components/sections/SocialProof';
import Transformation from '@/components/sections/Transformation';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import Urgency from '@/components/sections/Urgency';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <Transformation />
      <Process />
      <Pricing />
      <Urgency />
      <Footer />
    </main>
  );
}