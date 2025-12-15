import { Link } from 'react-router-dom';
import { Wifi, Tv, PlayCircle, Router, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import cityNetwork from '@/assets/city-network.jpg';

const services = [
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Blazing-fast fiber internet up to 1 Gbps for streaming, gaming, and work.',
    link: '/internet-plans',
  },
  {
    icon: Tv,
    title: 'Cable TV Packages',
    description: 'Over 500 HD channels including sports, movies, and entertainment.',
    link: '/cable-tv',
  },
  {
    icon: PlayCircle,
    title: 'Streaming Services',
    description: 'Access premium streaming platforms with included subscriptions.',
    link: '/bundles',
  },
  {
    icon: Router,
    title: 'Home Wi-Fi Solutions',
    description: 'Whole-home mesh Wi-Fi coverage with no dead zones.',
    link: '/internet-plans',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What Can We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Get Ready for Ultra{' '}
              <span className="text-gradient">Speed Internet</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image Card */}
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img 
                src={cityNetwork} 
                alt="Connected city network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground text-lg font-medium mb-4">
                  Experience lightning-fast connectivity across our nationwide fiber network
                </p>
                <Button variant="hero" asChild>
                  <Link to="/coverage">
                    Check Coverage
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index}>
                <Link 
                  to={service.link}
                  className="group bg-card rounded-2xl border border-border p-6 hover-lift block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
