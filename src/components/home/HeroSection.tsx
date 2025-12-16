import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroBusinessman from '@/assets/hero-businessman-blue.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-foreground/20" />
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-foreground/20" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full border border-foreground/20" />
      </div>

      {/* Disclosure Banner */}
      <div className="bg-muted/50 border-b border-border py-2 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          Independent third-party assistance platform. Not affiliated with or endorsed by any service provider.
        </p>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-8 relative z-10">
        {/* Hello Badge */}
        <ScrollReveal className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background shadow-sm">
            <span className="text-sm font-medium text-foreground">Hello!</span>
          </div>
        </ScrollReveal>

        {/* Main Heading - Centered */}
        <ScrollReveal className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-4xl mx-auto">
            We're <span className="text-accent">Orbit Net,</span>
            <br />
            Service Navigators
          </h1>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-end mt-8">
          {/* Left Side - Quote */}
          <ScrollReveal delay={0.2} className="order-2 lg:order-1">
            <div className="relative">
              <span className="text-6xl text-accent font-serif leading-none">"</span>
              <p className="text-muted-foreground text-lg max-w-sm -mt-4 pl-4">
                Orbit Net's expert guidance made navigating cable and internet options effortless. 
                Highly recommended!
              </p>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-bold text-foreground">450+</span>
              <p className="text-muted-foreground">Clients Assisted</p>
            </div>
          </ScrollReveal>

          {/* Center - Person Image with Circular Frame */}
          <ScrollReveal delay={0.3} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Orange Circular Background */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-accent" />
              
              {/* Decorative Ring */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-80 h-80 md:w-88 md:h-88 lg:w-[26rem] lg:h-[26rem] rounded-full border-2 border-dashed border-accent/30" />
              
              {/* Person Image */}
              <img 
                src={heroBusinessman} 
                alt="Friendly support specialist ready to assist you"
                className="relative z-10 h-[380px] md:h-[420px] lg:h-[480px] object-contain object-bottom"
              />

              {/* Floating Arrow */}
              <div className="absolute bottom-8 left-0 z-20">
                <svg width="60" height="40" viewBox="0 0 60 40" className="text-foreground">
                  <path 
                    d="M5 35 Q 30 5, 55 20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <polygon points="50,15 58,22 52,24" fill="currentColor" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Experience Badge */}
          <ScrollReveal delay={0.4} className="order-3 flex flex-col items-center lg:items-end">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-right">
              <span className="text-5xl lg:text-6xl font-bold text-foreground">10</span>
              <span className="text-accent text-3xl font-bold ml-1">Years</span>
            </div>
            <p className="text-muted-foreground font-medium">Expert Guidance</p>
          </ScrollReveal>
        </div>

        {/* Bottom CTA Buttons */}
        <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button variant="hero" size="xl" className="rounded-full" asChild>
            <Link to="/contact">
              Request Assistance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" className="rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
            <Link to="/contact">
              Speak With Support
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};
