import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const stats = [
  { value: 500, suffix: '+', label: 'Available Channels' },
  { value: 5, suffix: 'M+', label: 'Happy Clients', highlight: true },
  { value: 67, suffix: '+', label: 'Covered States' },
  { value: 98, suffix: '+', label: 'Professional Team' },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index}>
                <div 
                  className={`rounded-2xl p-6 border ${
                    stat.highlight 
                      ? 'bg-accent text-accent-foreground border-accent' 
                      : 'bg-card border-border'
                  }`}
                >
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                    stat.highlight ? 'text-accent-foreground' : 'text-foreground'
                  }`}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className={`text-sm ${
                    stat.highlight ? 'text-accent-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right - Years Experience */}
          <ScrollReveal delay={2}>
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                {/* Large stylized 25 */}
                <div className="flex items-end gap-2">
                  <span className="text-[10rem] md:text-[14rem] font-bold leading-none text-transparent bg-clip-text" 
                    style={{ 
                      WebkitTextStroke: '3px hsl(var(--accent))',
                    }}>
                    2
                  </span>
                  <span className="text-[10rem] md:text-[14rem] font-bold leading-none text-accent">
                    5
                  </span>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute top-1/4 right-0 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="w-2 h-2 rounded-full bg-accent/50" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mt-4">
                Years of Professional Experiences
              </h3>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
