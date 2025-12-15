import { ScrollReveal } from '@/components/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Switching to SwiftConnect was the best decision. The internet speed is incredible, and the cable package has everything my family needs.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Remote Worker',
    content: 'As someone who works from home, reliable internet is crucial. SwiftConnect delivers consistent speeds all day, every day.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Gaming Enthusiast',
    content: 'Zero lag, amazing speeds, and the customer service is top-notch. I recommend SwiftConnect to all my gaming friends.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our{' '}
              <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join millions of satisfied customers who trust SwiftConnect for their connectivity needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index}>
              <div className="bg-card rounded-2xl border border-border p-8 hover-lift h-full">
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
