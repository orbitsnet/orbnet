import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import cityNetwork from '@/assets/city-network.jpg';

export const ExperienceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={cityNetwork} 
          alt="Connected city network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="text-primary-foreground">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Our Legacy
              </span>
              <div className="mb-6">
                <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-accent">
                  <AnimatedCounter end={25} suffix="+" />
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Years of Professional Experience
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Since 1999, we've been at the forefront of telecommunications, 
                bringing cutting-edge technology to millions of homes across the nation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-primary-foreground/70">States Covered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">
                    <AnimatedCounter end={10} suffix="K+" />
                  </div>
                  <p className="text-primary-foreground/70">Cities Served</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '99.9%', label: 'Network Uptime' },
                { value: '24/7', label: 'Customer Support' },
                { value: '#1', label: 'Customer Satisfaction' },
                { value: 'A+', label: 'BBB Rating' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
