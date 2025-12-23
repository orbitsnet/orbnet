import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Info } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Request Assistance
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get{' '}
                <span className="text-accent">Help</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Have questions about cable, internet, or streaming services? Our team is here to guide you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclosure Banner */}
      <section className="bg-muted/50 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Info className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong>Disclosure:</strong> Orbit Net is an independent third-party assistance platform. We are not affiliated with or endorsed by any service provider.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Speak With Our Team</h2>
                <p className="text-muted-foreground mb-8">
                  When you call, our support specialists will greet you and confirm that you've reached 
                  Orbit Net, an independent assistance service.
                </p>
                
                <div className="space-y-6 mb-12">
                  {[ 
                    { icon: Phone, title: 'Phone', info: '(888) 964-3161', description: 'Available for assistance' },
                    { icon: MapPin, title: 'Address', info: '76 Co Rd 436 Dayton, TX 77535', description: 'Our main office location' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-foreground">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notice */}
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Please Note:</strong> We never ask for your service provider account passwords. 
                    Our service fees are separate from any provider charges.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={1}>
              <div className="bg-card rounded-3xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Request Assistance</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">How Can We Help?</label>
                      <Input
                        type="text"
                        placeholder="Service guidance, setup help..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about the assistance you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Request Assistance
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
