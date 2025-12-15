import { Link } from 'react-router-dom';
import { Check, Zap, ArrowRight, Star } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    speed: '100',
    price: '49.99',
    features: [
      'Download speeds up to 100 Mbps',
      'Unlimited data',
      'Free modem rental',
      'Email support',
      'Basic Wi-Fi router',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    speed: '500',
    price: '79.99',
    features: [
      'Download speeds up to 500 Mbps',
      'Unlimited data',
      'Free modem & router',
      '24/7 priority support',
      'Mesh Wi-Fi system',
      'Parental controls',
    ],
    popular: true,
  },
  {
    name: 'Ultra',
    speed: '1000',
    price: '99.99',
    features: [
      'Download speeds up to 1 Gbps',
      'Unlimited data',
      'Premium equipment included',
      '24/7 VIP support',
      'Whole-home mesh Wi-Fi',
      'Advanced security suite',
      'Static IP address',
    ],
    popular: false,
  },
];

const InternetPlans = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Internet Plans
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Choose Your Perfect{' '}
                <span className="text-accent">Speed</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                From everyday browsing to heavy streaming and gaming, 
                we have the perfect plan for your needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index}>
                <div className={`relative bg-card rounded-3xl border ${plan.popular ? 'border-accent shadow-glow' : 'border-border'} p-8 h-full flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Zap className="w-6 h-6 text-accent" />
                      <span className="text-4xl font-bold text-foreground">{plan.speed}</span>
                      <span className="text-muted-foreground">Mbps</span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? 'hero' : 'outline'} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Compare All Plans
              </h2>
              <p className="text-muted-foreground">
                Find the perfect plan that fits your household's needs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-left text-foreground font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-foreground font-semibold">Basic</th>
                    <th className="px-6 py-4 text-center text-foreground font-semibold bg-accent/10">Pro</th>
                    <th className="px-6 py-4 text-center text-foreground font-semibold">Ultra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Download Speed', '100 Mbps', '500 Mbps', '1 Gbps'],
                    ['Upload Speed', '10 Mbps', '50 Mbps', '100 Mbps'],
                    ['Data Cap', 'Unlimited', 'Unlimited', 'Unlimited'],
                    ['Wi-Fi Router', 'Basic', 'Mesh (2 units)', 'Mesh (3 units)'],
                    ['Support', 'Email', '24/7 Priority', '24/7 VIP'],
                    ['Contract', 'None', 'None', 'None'],
                  ].map(([feature, basic, pro, ultra], index) => (
                    <tr key={feature} className="border-b border-border last:border-0">
                      <td className="px-6 py-4 text-foreground font-medium">{feature}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{basic}</td>
                      <td className="px-6 py-4 text-center text-foreground bg-accent/10">{pro}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{ultra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default InternetPlans;
