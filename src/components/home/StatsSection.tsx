import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Users, Clock, Shield, TrendingUp } from 'lucide-react';

const stats = [
  { value: 450, suffix: '+', label: 'Clients Assisted', icon: Users },
  { value: 2025, suffix: '', label: 'Founded', highlight: true, icon: Clock },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: TrendingUp },
  { value: 100, suffix: '%', label: 'Independent Service', icon: Shield },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Track Record</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Trusted Independent Service Navigation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            As an independent third-party platform, we've helped hundreds of customers navigate their service options with transparency and expertise.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div 
                  className={`rounded-2xl p-8 border transition-all hover:scale-105 ${
                    stat.highlight 
                      ? 'bg-accent text-accent-foreground border-accent shadow-xl' 
                      : 'bg-card border-border hover:border-accent/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${
                    stat.highlight ? 'bg-accent-foreground/20' : 'bg-accent/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${stat.highlight ? 'text-accent-foreground' : 'text-accent'}`} />
                  </div>
                  
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                    stat.highlight ? 'text-accent-foreground' : 'text-foreground'
                  }`}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <p className={`text-sm font-medium ${
                    stat.highlight ? 'text-accent-foreground/90' : 'text-muted-foreground'
                  }`}>
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full">
              <Shield className="w-5 h-5 text-accent" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Independent Third-Party Platform</strong> • Not affiliated with any service provider
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
