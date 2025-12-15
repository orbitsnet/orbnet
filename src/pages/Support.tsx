import { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageSquare, ChevronDown, Wifi, Tv, CreditCard, Settings } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: 'Internet',
    icon: Wifi,
    questions: [
      { q: 'What speeds do you offer?', a: 'We offer speeds ranging from 100 Mbps to 1 Gbps depending on your location and plan selection.' },
      { q: 'Is there a data cap?', a: 'No, all our internet plans come with unlimited data. Stream, game, and browse without worrying about limits.' },
      { q: 'What equipment do I need?', a: 'We provide a modem and router with all plans. Premium plans include our mesh Wi-Fi system for whole-home coverage.' },
    ],
  },
  {
    category: 'Cable TV',
    icon: Tv,
    questions: [
      { q: 'How many channels are included?', a: 'Our packages range from 150+ to 500+ channels, including HD and 4K content.' },
      { q: 'Can I record shows?', a: 'Yes, all TV packages include DVR service. Record up to 500 hours of your favorite programs.' },
      { q: 'Is there a streaming app?', a: 'Yes, our SwiftTV app lets you watch live TV and on-demand content on any device.' },
    ],
  },
  {
    category: 'Billing',
    icon: CreditCard,
    questions: [
      { q: 'When is my bill due?', a: 'Bills are due on the same date each month, typically 21 days after your statement is generated.' },
      { q: 'What payment methods do you accept?', a: 'We accept credit/debit cards, bank transfers, and automatic payments for convenience.' },
      { q: 'Are there any contracts?', a: 'No, we offer month-to-month service with no long-term contracts required.' },
    ],
  },
  {
    category: 'Technical',
    icon: Settings,
    questions: [
      { q: 'My internet is slow. What should I do?', a: 'Try restarting your router. If issues persist, run a speed test and contact our 24/7 support.' },
      { q: 'How do I set up Wi-Fi?', a: 'Our technician sets up Wi-Fi during installation. You can also manage settings via our mobile app.' },
      { q: 'Do you offer tech support?', a: 'Yes, we provide 24/7 technical support via phone, chat, and email for all customers.' },
    ],
  },
];

const Support = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-primary-foreground max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Help Center
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How Can We{' '}
                <span className="text-accent">Help You</span>?
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Find answers to common questions or get in touch with our support team.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, title: 'Call Us', info: '1-800-SWIFT', description: 'Available 24/7' },
              { icon: MessageSquare, title: 'Live Chat', info: 'Chat Now', description: 'Instant support' },
              { icon: Mail, title: 'Email Us', info: 'support@swiftconnect.com', description: 'Response within 24h' },
            ].map((contact, index) => (
              <ScrollReveal key={contact.title} delay={index}>
                <div className="bg-card rounded-2xl border border-border p-6 text-center hover-lift cursor-pointer">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
                    <contact.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{contact.title}</h3>
                  <p className="text-accent font-medium mb-1">{contact.info}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-muted" id="faq">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to help you get started.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <ScrollReveal key={category.category} delay={categoryIndex}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground">{category.category}</h3>
                  </div>
                  <Accordion type="single" collapsible className="px-6">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.category}-${index}`}>
                        <AccordionTrigger className="text-left text-foreground hover:text-primary">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
