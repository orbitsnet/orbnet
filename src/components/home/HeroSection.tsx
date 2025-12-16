import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Clock, Shield, TrendingUp, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-2">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/45 to-background/40"></div>
      </div>

      {/* Disclosure Banner */}
      <div className="bg-muted/50 border-b border-border py-2 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          Independent third-party assistance platform. Not affiliated with or endorsed by any service provider.
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-[calc(100vh-4rem)] flex items-center pt-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-2">
          {/* Left Side - Main Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Hello Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 shadow-sm">
                <span className="text-sm font-medium text-foreground">Hello!</span>
              </div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                We're <span className="text-accent">Orbit Net,</span>
                <br />
                Service Navigators
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-white max-w-lg drop-shadow-lg">
                Expert guidance made navigating cable and internet options effortless. 
                We help you find the perfect service package for your needs.
              </p>
            </ScrollReveal>

            {/* Phone Number */}
            <ScrollReveal delay={0.25}>
              <a href="tel:8889643161" className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-lg sm:text-xl font-bold text-white">Call Now: (888) 964-3161</span>
              </a>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="hero" size="xl" className="rounded-full w-full sm:w-auto" asChild>
                  <Link to="/contact">
                    Request Assistance
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="rounded-full bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto" asChild>
                  <Link to="/contact">
                    Speak With Support
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-white drop-shadow-lg">5.0 Rating</p>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div>
                  <p className="text-2xl font-bold text-white drop-shadow-lg">450+</p>
                  <p className="text-sm text-white drop-shadow-lg">Happy Clients</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Large Card - 10 Years Experience */}
            <ScrollReveal delay={0.3} className="absolute top-0 right-0 w-64">
              <div className="bg-background/90 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">10</p>
                    <p className="text-sm text-muted-foreground">Years</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Expert Guidance in Service Navigation</p>
              </div>
            </ScrollReveal>

            {/* Medium Card - Clients Assisted */}
            <ScrollReveal delay={0.4} className="absolute top-32 left-0 w-56">
              <div className="bg-accent/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-background">450+</p>
                    <p className="text-sm text-background/80">Clients</p>
                  </div>
                </div>
                <p className="text-sm text-background/90">Successfully Assisted</p>
              </div>
            </ScrollReveal>

            {/* Small Card - Trusted Service */}
            <ScrollReveal delay={0.5} className="absolute bottom-32 right-8 w-48">
              <div className="bg-background/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <p className="text-lg font-bold text-foreground">Trusted</p>
                </div>
                <p className="text-xs text-muted-foreground">Certified Service Navigator</p>
              </div>
            </ScrollReveal>

            {/* Small Card - Growth */}
            <ScrollReveal delay={0.6} className="absolute bottom-8 left-12 w-44">
              <div className="bg-background/90 backdrop-blur-sm border border-accent/30 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <p className="text-lg font-bold text-foreground">98%</p>
                </div>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </div>
            </ScrollReveal>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-accent/20 animate-pulse" />
            <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full border border-accent/10" />
          </div>
        </div>
      </div>
    </section>
  );
};
