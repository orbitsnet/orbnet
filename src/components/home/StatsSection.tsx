import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Tv, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Tv,
    value: 500,
    suffix: '+',
    label: 'HD Channels',
    description: 'Premium entertainment',
  },
  {
    icon: Users,
    value: 5,
    suffix: 'M+',
    label: 'Happy Customers',
    description: 'Nationwide coverage',
  },
  {
    icon: Clock,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'Reliable connection',
  },
  {
    icon: Award,
    value: 25,
    suffix: '+',
    label: 'Years Experience',
    description: 'Industry leader',
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center group-hover:shadow-glow-primary transition-shadow duration-300">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
