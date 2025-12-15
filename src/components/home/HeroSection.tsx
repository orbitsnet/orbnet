import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroImage from '@/assets/hero-family-tv.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                🚀 Now offering 1 Gbps speeds in your area
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Connecting You to{' '}
                <span className="text-accent">Ultra-Fast Internet</span>{' '}
                & Premium Cable
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Experience blazing-fast fiber internet, 500+ HD channels, and endless streaming. 
                All in one powerful bundle designed for your connected home.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/internet-plans">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/bundles">
                    <Play className="w-5 h-5 mr-2" />
                    View All Plans
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={4}>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-primary-foreground"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Join 5M+ Happy Customers</p>
                  <p className="text-primary-foreground/70">Trusted by families nationwide</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image */}
          <ScrollReveal delay={2} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Family enjoying high-speed internet and cable TV"
                className="w-full h-auto object-cover"
              />
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Speed</p>
                    <p className="text-2xl font-bold text-foreground">940 <span className="text-accent">Mbps</span></p>
                  </div>
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center animate-pulse-glow">
                    <span className="text-accent-foreground font-bold text-sm">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
