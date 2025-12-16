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
    <section className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 h-full">
                <Quote className="w-10 h-10 text-accent mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-primary-foreground/80 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-primary-foreground/10 pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-primary-foreground/60 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
