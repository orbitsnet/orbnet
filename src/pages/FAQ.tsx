import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What exactly does Orbit Net do?',
    answer: 'Orbit Net is an independent third-party assistance platform that helps customers navigate cable, internet, and streaming services. We provide guidance, consultations, and facilitate the setup process. We do not sell or resell any provider services.',
  },
  {
    question: 'Are you affiliated with any cable or internet provider?',
    answer: 'No, we are not affiliated with, endorsed by, or officially connected to any cable, internet, or streaming service provider. We are an independent assistance platform that charges a separate service fee for our consultation and guidance services.',
  },
  {
    question: 'What is included in your service fee?',
    answer: 'Our service fee covers consultation time, personalized guidance, service comparison analysis, setup facilitation, and ongoing support (depending on the plan chosen). This fee is separate from any charges you may incur directly from service providers.',
  },
  {
    question: 'How is your fee different from provider charges?',
    answer: 'Our fee is for our assistance services only. Any costs for actual cable, internet, or streaming services are billed separately by the respective providers. We help you understand and navigate these options, but we do not bill on behalf of any provider.',
  },
  {
    question: 'Can you help me compare different providers?',
    answer: 'Yes, we can provide guidance on comparing various service options available in your area. We offer unbiased information to help you make informed decisions about which services might best suit your needs.',
  },
  {
    question: 'What if I need help after my initial consultation?',
    answer: 'Depending on your chosen service tier, you may have access to follow-up support. Our Premium Support plan includes 30 days of ongoing assistance. For other plans, additional consultations can be scheduled.',
  },
  {
    question: 'Do you require any passwords or account access?',
    answer: 'No, we never ask for your service provider passwords or account credentials. Our assistance is based on guidance and facilitation only. Any account access or changes should be done directly with your service provider.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on service type and whether assistance has already been delivered. Please review the Refund Policy page for full eligibility details.',
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our assistance services.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-12">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <a href="/contact" className="text-accent hover:underline">Contact our team</a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
