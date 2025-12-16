import { ScrollReveal } from '@/components/ScrollReveal';
import { MessageCircle, Search, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Reach Out',
    description: 'Contact us to discuss your cable, internet, or streaming needs.',
  },
  {
    icon: Search,
    step: '02',
    title: 'We Research',
    description: 'Our experts analyze available options in your area.',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Get Guidance',
    description: 'Receive personalized recommendations tailored to your needs.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Get Connected',
    description: 'We facilitate the connection process with your chosen provider.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Simple Steps to Get Started
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our streamlined process makes it easy to find and connect to the right services for you.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.1}>
              <div className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
                )}
                
                <div className="bg-background rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover-lift relative z-10">
                  {/* Step Number */}
                  <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    {step.step}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
