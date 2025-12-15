import { useState } from 'react';
import { MapPin, Search, CheckCircle, XCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const cities = [
  'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
  'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA',
  'Austin, TX', 'Jacksonville, FL', 'Fort Worth, TX', 'Columbus, OH', 'Charlotte, NC',
  'Seattle, WA', 'Denver, CO', 'Boston, MA', 'Portland, OR', 'Miami, FL',
];

const Coverage = () => {
  const [zipCode, setZipCode] = useState('');
  const [result, setResult] = useState<'available' | 'unavailable' | null>(null);

  const checkCoverage = () => {
    // Simulate coverage check
    const isAvailable = Math.random() > 0.3;
    setResult(isAvailable ? 'available' : 'unavailable');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Coverage Area
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Check{' '}
                <span className="text-accent">Availability</span>{' '}
                in Your Area
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Enter your zip code to see if SwiftConnect services are available at your address.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coverage Check */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-xl mx-auto bg-card rounded-3xl border border-border p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Check Your Address
                </h2>
                <p className="text-muted-foreground">
                  Enter your zip code below to check service availability.
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <Input
                  type="text"
                  placeholder="Enter ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="text-lg h-14"
                />
                <Button variant="hero" size="lg" onClick={checkCoverage}>
                  <Search className="w-5 h-5 mr-2" />
                  Check
                </Button>
              </div>

              {result && (
                <div className={`p-6 rounded-2xl ${result === 'available' ? 'bg-accent/10' : 'bg-destructive/10'}`}>
                  {result === 'available' ? (
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-10 h-10 text-accent" />
                      <div>
                        <h3 className="font-bold text-foreground">Great News!</h3>
                        <p className="text-muted-foreground">SwiftConnect is available in your area.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <XCircle className="w-10 h-10 text-destructive" />
                      <div>
                        <h3 className="font-bold text-foreground">Coming Soon</h3>
                        <p className="text-muted-foreground">We're expanding to your area. Sign up for updates.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cities */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Currently Serving 50+ States
              </h2>
              <p className="text-muted-foreground">
                We're continuously expanding our network to reach more communities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {cities.map((city) => (
                <span 
                  key={city}
                  className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer"
                >
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Coverage;
