import HeroSection from '../sections/HeroSection';
import ProblemSection from '../sections/ProblemSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import SystemsSection from '../sections/SystemsSection';
import MarketsSection from '../sections/MarketsSection';
import FAQsSection from '../sections/FAQsSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <SystemsSection />
      <MarketsSection />
      <FAQsSection />
      <ContactSection />
    </main>
  );
}
