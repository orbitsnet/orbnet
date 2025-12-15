import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import heroBusinessman from '@/assets/hero-businessman-blue.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-accent/20 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute top-32 left-40 w-8 h-8 bg-accent/30 rounded-lg rotate-45 hidden lg:block" />
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-accent/20 rounded-full hidden lg:block" />
      
      {/* 5G Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-accent/30 flex items-center justify-center hidden lg:flex z-20">
        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
          <Wifi className="w-6 h-6 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Side - Image */}
          <ScrollReveal className="relative order-2 lg:order-1">
            {/* Large Background Text */}
            <div className="absolute -top-10 left-0 z-0 pointer-events-none">
              <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-extrabold leading-none text-primary-foreground/10 select-none whitespace-nowrap">
                CONNECT<br />YOU
              </h1>
            </div>
            
            {/* Person Image */}
            <div className="relative z-10 flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={heroBusinessman} 
                  alt="Happy customer using SwiftConnect services"
                  className="h-[450px] lg:h-[550px] object-contain object-bottom drop-shadow-2xl mix-blend-normal"
                />
              </div>
            </div>
            
            {/* Chat Bubble */}
            <div className="absolute bottom-40 left-4 lg:left-10 bg-primary-foreground rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2 animate-float z-20">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">How Can We Help?</span>
            </div>
            
            {/* Large INTERNET text */}
            <div className="absolute bottom-16 left-1/4 z-0 hidden md:block pointer-events-none">
              <span className="text-[4rem] lg:text-[6rem] font-extrabold text-accent select-none">
                INTERNET
              </span>
            </div>
          </ScrollReveal>

          {/* Right Side - Content */}
          <ScrollReveal delay={1} className="order-1 lg:order-2 text-primary-foreground lg:pl-8">
            <div className="max-w-lg ml-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Games, Education & Entertainment{' '}
                <span className="text-accent">All In One.</span>{' '}
                Connect With Everyone & Everything, Anytime.
              </h2>
              
              <p className="text-lg text-primary-foreground/80 mb-8">
                Experience blazing-fast fiber internet, 500+ HD channels, and endless streaming. 
                All in one powerful bundle designed for your connected home.
              </p>
              
              <Button variant="hero" size="xl" asChild>
                <Link to="/internet-plans">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
