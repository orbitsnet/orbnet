import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready for{' '}
              <span className="text-accent">Ultra-Fast Internet</span>{' '}
              Today?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Join millions of happy customers and experience the SwiftConnect difference. 
              Get started with our easy setup and enjoy lightning-fast speeds in no time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:8889643161">
                  Call Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:8889643161">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
            
            <p className="mt-8 text-primary-foreground/60 text-sm">
              No contracts • Free installation • 30-day money-back guarantee
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
