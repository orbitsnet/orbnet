import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { SpeedTestSection } from '@/components/home/SpeedTestSection';
import { LiveTVSection } from '@/components/home/LiveTVSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProcessSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <SpeedTestSection />
      <LiveTVSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
