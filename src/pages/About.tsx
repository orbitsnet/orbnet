import { Target, Eye, Users, Award, Lightbulb, Shield, Rocket, Heart } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import cityNetwork from '@/assets/city-network.jpg';

const timeline = [
  { year: 'Jan 2025', title: 'The Beginning', description: 'Founded with a vision to simplify service navigation for consumers' },
  { year: 'Mar 2025', title: 'Platform Launch', description: 'Launched our comprehensive online service comparison platform' },
  { year: 'Jun 2025', title: 'First Clients', description: 'Successfully helped our first wave of clients find ideal service solutions' },
  { year: 'Sep 2025', title: 'Growing Team', description: 'Expanded our expert consultation team to serve more customers' },
  { year: 'Dec 2025', title: 'Milestone Reached', description: 'Achieved 450+ satisfied clients and 98% satisfaction rate' },
  { year: '2026', title: 'Looking Ahead', description: 'Scaling our platform to help thousands more across the nation' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'To empower consumers with unbiased guidance in navigating the complex world of internet, cable, and streaming services.' },
  { icon: Eye, title: 'Vision', description: 'To be the most trusted independent platform where every customer finds the perfect service solution tailored to their needs.' },
  { icon: Heart, title: 'Values', description: 'Transparency, independence, customer empowerment, and honest guidance drive everything we do.' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={cityNetwork} alt="Network" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                About Orbit Net
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your <span className="text-accent">Independent</span> Service Navigation Partner
              </h1>
              <p className="text-lg text-primary-foreground/80">
                As a growing startup, we're dedicated to revolutionizing how consumers find and compare internet, cable, and streaming services. We're not tied to any provider—we work for you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2025, suffix: '', label: 'Founded' },
              { value: 450, suffix: '+', label: 'Clients Helped' },
              { value: 98, suffix: '%', label: 'Satisfaction Rate' },
              { value: 100, suffix: '%', label: 'Independent' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <ScrollReveal key={item.title} delay={index}>
                <div className="bg-card rounded-2xl border border-border p-8 h-full">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                Launched in 2025, we're building the future of independent service navigation.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index}>
                  <div className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="bg-card rounded-2xl border border-border p-6">
                        <span className="text-2xl font-bold text-accent">{item.year}</span>
                        <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-glow" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
