import { Link } from 'react-router-dom';
import { Wifi, Tv, PlayCircle, Router, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Blazing-fast fiber internet up to 1 Gbps. Perfect for streaming, gaming, and working from home.',
    features: ['Up to 1 Gbps speeds', 'Unlimited data', 'Free installation'],
    link: '/internet-plans',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Tv,
    title: 'Cable TV Packages',
    description: 'Over 500 HD channels including sports, movies, news, and entertainment for the whole family.',
    features: ['500+ HD channels', 'DVR included', '4K content'],
    link: '/cable-tv',
    color: 'from-accent-dark to-accent',
  },
  {
    icon: PlayCircle,
    title: 'Streaming Services',
    description: 'Access premium streaming platforms with our included subscriptions. Watch anywhere, anytime.',
    features: ['Netflix included', 'Disney+ access', 'HBO Max free'],
    link: '/bundles',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Router,
    title: 'Home Wi-Fi Solutions',
    description: 'Whole-home mesh Wi-Fi coverage. No dead zones, just seamless connectivity everywhere.',
    features: ['Mesh Wi-Fi system', 'Parental controls', 'Smart home ready'],
    link: '/internet-plans',
    color: 'from-orange-500 to-red-500',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need for a{' '}
              <span className="text-gradient">Connected Home</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From ultra-fast internet to premium entertainment, we've got your household covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index}>
              <div className="group h-full bg-card rounded-2xl border border-border p-6 hover-lift cursor-pointer">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="p-0 h-auto text-primary group-hover:text-accent" asChild>
                  <Link to={service.link} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
