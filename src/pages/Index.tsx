import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { SpeedTestSection } from '@/components/home/SpeedTestSection';
import { LiveTVSection } from '@/components/home/LiveTVSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SpeedTestSection />
      <LiveTVSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
