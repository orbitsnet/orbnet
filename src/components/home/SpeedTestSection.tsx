import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SpeedGauge } from '@/components/SpeedGauge';
import { Button } from '@/components/ui/button';

export const SpeedTestSection = () => {
  return (
    <section className="py-24 gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="text-primary-foreground">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Speed Test
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Lightning-Fast Speeds for{' '}
                <span className="text-accent">Everything You Do</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Experience the difference with our fiber-optic network. Stream 4K content, 
                game online, and video chat—all at the same time without any lag.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Download 4K movies in minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Zero lag gaming experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Crystal-clear video calls</span>
                </div>
              </div>
              
              <Button variant="hero" size="lg" asChild>
                <Link to="/internet-plans">
                  Test Your Speed
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              <div className="grid grid-cols-3 gap-6">
                <SpeedGauge speed={940} label="Download" />
                <SpeedGauge speed={880} label="Upload" />
                <SpeedGauge speed={12} maxSpeed={100} label="Ping" unit="ms" />
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <div className="flex items-center justify-between text-primary-foreground">
                  <span className="text-sm opacity-80">Your Connection</span>
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    Excellent
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
