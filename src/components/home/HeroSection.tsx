import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroBusinessman from '@/assets/hero-businessman-blue.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-24">
      {/* Disclosure Banner */}
      <div className="bg-muted/50 border-b border-border py-2 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          Independent third-party assistance platform. Not affiliated with or endorsed by any service provider.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-20 hidden lg:block">
        <div className="w-16 h-16 relative">
          <Sparkles className="w-12 h-12 text-accent animate-pulse" />
        </div>
      </div>
      <div className="absolute top-40 right-32 hidden lg:block">
        <div className="w-8 h-8 text-accent">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-40 left-32 hidden lg:block">
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-accent" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-8 relative z-10">
        {/* Main Heading - Centered */}
        <ScrollReveal className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-4xl mx-auto">
            Guiding You Through{' '}
            <span className="text-accent relative inline-block">
              Cable & Internet
              <svg className="absolute -right-8 -top-4 w-6 h-6 text-accent hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>{' '}
            Service Solutions
          </h1>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-end mt-8">
          {/* Left Side - Description */}
          <ScrollReveal delay={0.2} className="order-2 lg:order-1">
            <p className="text-muted-foreground text-lg max-w-sm">
              From understanding your options to facilitating seamless connections, 
              we provide expert assistance to help you navigate cable TV, internet, 
              and streaming services. Let us guide you through it.
            </p>
            <Button variant="outline" size="lg" className="mt-6 rounded-full" asChild>
              <Link to="/about">
                Learn How We Help
              </Link>
            </Button>
          </ScrollReveal>

          {/* Center - Person Image */}
          <ScrollReveal delay={0.3} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-muted rounded-full" />
              
              {/* Person Image */}
              <img 
                src={heroBusinessman} 
                alt="Friendly support specialist ready to assist you"
                className="relative z-10 h-[400px] lg:h-[450px] object-contain object-bottom"
              />
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
              <span className="text-accent text-3xl font-bold">+</span>
              <span className="text-xl text-muted-foreground ml-2">Years</span>
            </div>
            <p className="text-muted-foreground">Experience</p>
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
