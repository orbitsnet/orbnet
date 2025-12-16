import { ScrollReveal } from '@/components/ScrollReveal';
import { Shield, Clock, Users, HeartHandshake } from 'lucide-react';
import personPhone from '@/assets/person-phone.jpg';

const features = [
  {
    icon: Shield,
    title: 'Trusted Guidance',
    description: 'Over 10 years of experience helping customers navigate service options.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'We respond to inquiries promptly and guide you through every step.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our specialists stay current with the latest service offerings and deals.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    description: 'We take time to understand your unique needs and budget.',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <ScrollReveal className="relative">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-accent/20" />
              
              {/* Main Image */}
              <img 
                src={personPhone}
                alt="Customer receiving assistance"
                className="relative z-10 rounded-3xl w-full h-[500px] object-cover"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-foreground text-primary-foreground p-6 rounded-2xl z-20 shadow-lg">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-primary-foreground/70 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <ScrollReveal>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Navigating Services Made Simple
              </h2>
              <p className="text-muted-foreground mb-8">
                At OrbitNet, we simplify the complex world of cable, internet, and streaming services. 
                Our independent team helps you make informed decisions without the pressure of sales quotas.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
