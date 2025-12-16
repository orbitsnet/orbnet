import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Basic Guidance',
    price: '$29',
    description: 'One-time consultation for simple inquiries',
    features: [
      '30-minute phone consultation',
      'Service comparison overview',
      'Basic troubleshooting guidance',
      'Email follow-up support',
    ],
  },
  {
    name: 'Full Assistance',
    price: '$59',
    description: 'Complete setup and configuration help',
    popular: true,
    features: [
      '60-minute dedicated support',
      'Provider comparison analysis',
      'Setup facilitation guidance',
      'Equipment recommendations',
      '7-day email support',
    ],
  },
  {
    name: 'Premium Support',
    price: '$99',
    description: 'Ongoing assistance and priority help',
    features: [
      'Unlimited consultations (30 days)',
      'Priority phone support',
      'Bill analysis assistance',
      'Upgrade/change guidance',
      'Issue resolution facilitation',
      '30-day dedicated support',
    ],
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Service Fees</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing for our assistance services. These fees are for our consultation 
              and guidance services only and are separate from any provider charges.
            </p>
          </ScrollReveal>

          {/* Important Notice */}
          <ScrollReveal className="max-w-4xl mx-auto mb-12">
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 flex gap-4">
              <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Information</h3>
                <p className="text-muted-foreground text-sm">
                  SwiftAssist is an independent third-party assistance platform. Our service fees cover 
                  consultation, guidance, and facilitation services only. Any costs associated with actual 
                  cable, internet, or streaming services are billed separately by the respective providers. 
                  We do not sell or resell any provider services.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 0.1}>
                <div className={`relative bg-card rounded-2xl p-8 border ${plan.popular ? 'border-accent shadow-lg' : 'border-border'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> / service</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? 'hero' : 'outline'} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Request Assistance</Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              All fees are for our assistance services only. View our{' '}
              <Link to="/refund-policy" className="text-accent hover:underline">Refund Policy</Link>
              {' '}for details.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
