import { Link } from 'react-router-dom';
import { Tv, Film, Gamepad2, Baby, Newspaper, Heart, Check, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Essential',
    channels: '150+',
    price: '39.99',
    features: ['Local channels', 'Basic cable', 'News networks', 'Music channels'],
  },
  {
    name: 'Entertainment',
    channels: '300+',
    price: '69.99',
    features: ['All Essential channels', 'Movie channels', 'Sports networks', 'Lifestyle channels', 'Kids programming'],
    popular: true,
  },
  {
    name: 'Premium',
    channels: '500+',
    price: '99.99',
    features: ['All Entertainment channels', 'HBO & Showtime', 'Premium sports', 'International channels', '4K content', 'Multi-room DVR'],
  },
];

const categories = [
  { icon: Film, name: 'Movies', count: '50+ channels', description: 'HBO, Showtime, Cinemax, and more' },
  { icon: Gamepad2, name: 'Sports', count: '40+ channels', description: 'ESPN, FOX Sports, NFL Network' },
  { icon: Baby, name: 'Kids', count: '25+ channels', description: 'Disney, Nick, Cartoon Network' },
  { icon: Newspaper, name: 'News', count: '20+ channels', description: 'CNN, FOX News, MSNBC, BBC' },
  { icon: Heart, name: 'Lifestyle', count: '30+ channels', description: 'HGTV, Food Network, TLC' },
  { icon: Tv, name: 'Entertainment', count: '60+ channels', description: 'AMC, FX, Comedy Central' },
];

const CableTV = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Cable TV Packages
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                500+ Channels of{' '}
                <span className="text-accent">Premium TV</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                From live sports to blockbuster movies, get all your favorite entertainment 
                in crystal-clear HD and 4K quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore Channel Categories
              </h2>
              <p className="text-muted-foreground">
                Something for everyone in your household.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <ScrollReveal key={category.name} delay={index}>
                <div className="bg-card rounded-2xl border border-border p-6 hover-lift">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <category.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
                  <p className="text-accent font-medium mb-2">{category.count}</p>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Package
              </h2>
              <p className="text-muted-foreground">
                Flexible packages to match your viewing preferences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.name} delay={index}>
                <div className={`relative bg-card rounded-3xl border ${pkg.popular ? 'border-accent shadow-glow' : 'border-border'} p-8 h-full flex flex-col`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                      Best Value
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Tv className="w-6 h-6 text-accent" />
                      <span className="text-3xl font-bold text-foreground">{pkg.channels}</span>
                      <span className="text-muted-foreground">Channels</span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">${pkg.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={pkg.popular ? 'hero' : 'outline'} 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href="tel:8889643161">
                      Call Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CableTV;
