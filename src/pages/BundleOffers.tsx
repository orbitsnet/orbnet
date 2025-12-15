import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Percent } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const bundles = [
  {
    name: 'Family Bundle',
    internet: '500 Mbps',
    tv: '300+ Channels',
    streaming: 'Netflix included',
    originalPrice: '149.98',
    price: '119.99',
    savings: '30',
    features: [
      '500 Mbps internet',
      '300+ HD channels',
      'Netflix Premium',
      'Mesh Wi-Fi system',
      'Multi-room DVR',
    ],
  },
  {
    name: 'Ultimate Bundle',
    internet: '1 Gbps',
    tv: '500+ Channels',
    streaming: 'All streaming apps',
    originalPrice: '199.98',
    price: '149.99',
    savings: '50',
    features: [
      '1 Gbps internet',
      '500+ HD/4K channels',
      'Netflix, Disney+, HBO Max',
      'Whole-home mesh Wi-Fi',
      'Advanced DVR (500 hours)',
      'Premium sports package',
    ],
    popular: true,
  },
  {
    name: 'Gamer Bundle',
    internet: '1 Gbps',
    tv: '150+ Channels',
    streaming: 'Gaming optimized',
    originalPrice: '169.98',
    price: '129.99',
    savings: '40',
    features: [
      '1 Gbps low-latency internet',
      '150+ channels',
      'Static IP address',
      'Gaming-optimized router',
      'Priority bandwidth',
    ],
  },
];

const BundleOffers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 inline mr-1" />
                Bundle & Save
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Save More with{' '}
                <span className="text-accent">Bundle Offers</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Combine internet, TV, and streaming for the ultimate entertainment experience 
                at unbeatable prices.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bundles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bundles.map((bundle, index) => (
              <ScrollReveal key={bundle.name} delay={index}>
                <div className={`relative bg-card rounded-3xl border ${bundle.popular ? 'border-accent shadow-glow' : 'border-border'} p-8 h-full flex flex-col`}>
                  {bundle.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Best Value
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{bundle.name}</h3>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                      <Percent className="w-4 h-4" />
                      Save ${bundle.savings}/mo
                    </div>
                    
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl text-muted-foreground line-through">${bundle.originalPrice}</span>
                      <span className="text-4xl font-bold text-foreground">${bundle.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-center">
                    <div className="px-4 py-2 rounded-lg bg-muted">
                      <span className="text-sm text-muted-foreground">Internet:</span>
                      <span className="ml-2 font-medium text-foreground">{bundle.internet}</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-muted">
                      <span className="text-sm text-muted-foreground">TV:</span>
                      <span className="ml-2 font-medium text-foreground">{bundle.tv}</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-muted">
                      <span className="text-sm text-muted-foreground">Streaming:</span>
                      <span className="ml-2 font-medium text-foreground">{bundle.streaming}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {bundle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={bundle.popular ? 'hero' : 'outline'} 
                    size="lg" 
                    className="w-full"
                  >
                    Get This Bundle
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose a Bundle?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'One Bill', description: 'Simplify with a single monthly statement' },
              { title: 'Save Money', description: 'Up to $50/mo savings vs. separate services' },
              { title: 'Free Upgrades', description: 'Equipment upgrades at no extra cost' },
              { title: 'Priority Support', description: '24/7 dedicated bundle customer care' },
            ].map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BundleOffers;
