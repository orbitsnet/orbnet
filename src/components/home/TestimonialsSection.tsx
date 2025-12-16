import { ScrollReveal } from '@/components/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    rating: 5,
    text: 'OrbitNet made switching providers so easy. They explained all my options clearly and helped me save money!',
  },
  {
    name: 'James K.',
    location: 'Denver, CO',
    rating: 5,
    text: 'Finally found a service that actually listens. They took time to understand exactly what I needed.',
  },
  {
    name: 'Linda R.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'The team was incredibly patient and knowledgeable. I felt confident in my decision thanks to their guidance.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        {/* Featured Large Testimonial */}
        <ScrollReveal className="mb-12">
          <div className="max-w-4xl mx-auto bg-accent rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/10 rounded-full blur-3xl"></div>
            <Quote className="w-16 h-16 text-background/30 mb-6 relative z-10" />
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-background text-background" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-background font-medium mb-8 leading-relaxed relative z-10">
              "{testimonials[0].text}"
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center text-background text-xl font-bold">
                {testimonials[0].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-background text-lg">{testimonials[0].name}</div>
                <div className="text-background/80 text-sm">{testimonials[0].location}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Two Column Grid for Remaining Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(1).map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={(index + 1) * 0.1}>
              <div className="bg-background border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg font-bold shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                  </div>
                  <Quote className="w-8 h-8 text-accent/20" />
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
