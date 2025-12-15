import { Target, Eye, Users, Award, Clock, Globe } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import cityNetwork from '@/assets/city-network.jpg';

const timeline = [
  { year: '1999', title: 'Founded', description: 'Started as a small cable provider serving 500 homes' },
  { year: '2005', title: 'Expansion', description: 'Expanded to 10 states with digital cable services' },
  { year: '2010', title: 'High-Speed Internet', description: 'Launched high-speed internet services nationwide' },
  { year: '2015', title: 'Fiber Network', description: 'Invested $1B in fiber optic infrastructure' },
  { year: '2020', title: '5 Million Customers', description: 'Reached milestone of 5 million satisfied customers' },
  { year: '2024', title: 'Innovation', description: 'Launched 1 Gbps fiber and 4K streaming services' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'To connect every home with reliable, affordable, high-speed internet and premium entertainment.' },
  { icon: Eye, title: 'Vision', description: 'A world where seamless connectivity empowers every family to learn, work, and entertain without limits.' },
  { icon: Users, title: 'Values', description: 'Customer-first approach, innovation, integrity, and community commitment guide everything we do.' },
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Connecting Homes Since{' '}
                <span className="text-accent">1999</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                For over 25 years, SwiftConnect has been at the forefront of telecommunications, 
                bringing cutting-edge technology to millions of families across America.
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
              { value: 25, suffix: '+', label: 'Years Experience' },
              { value: 5, suffix: 'M+', label: 'Happy Customers' },
              { value: 50, suffix: '+', label: 'States Covered' },
              { value: 99.9, suffix: '%', label: 'Uptime' },
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
                From a small startup to a nationwide leader in telecommunications.
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
