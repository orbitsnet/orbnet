import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalPage = ({ title, lastUpdated, children }: LegalPageProps) => (
  <Layout>
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center text-primary-foreground max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-primary-foreground/70">Last updated: {lastUpdated}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Disclosure Banner */}
        <div className="max-w-3xl mx-auto mb-8 bg-muted/50 border border-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Disclosure:</strong> SwiftAssist is an independent third-party service assistance platform. 
            We are not affiliated with or endorsed by any cable, internet, or streaming provider.
          </p>
        </div>
        <div className="max-w-3xl mx-auto prose prose-slate">
          {children}
        </div>
      </div>
    </section>
  </Layout>
);

export const PrivacyPolicy = () => (
  <LegalPage title="Privacy Policy" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground">We collect information you provide when requesting our assistance services, including name, email, phone number, and service preferences. We do not collect or store any service provider account passwords or credentials.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">We use your information solely to provide assistance services, respond to inquiries, and improve our offerings. We do not sell your personal information to third parties.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p className="text-muted-foreground">We implement industry-standard security measures including HTTPS encryption to protect your personal information during transmission and storage.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
          <p className="text-muted-foreground">For privacy concerns, email privacy@swiftassist.com or call 1-800-555-0199.</p>
        </section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const TermsConditions = () => (
  <LegalPage title="Terms & Conditions" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Service Agreement</h2>
          <p className="text-muted-foreground">By using SwiftAssist services, you acknowledge that we are an independent third-party assistance platform. We are not affiliated with, endorsed by, or officially connected to any cable, internet, or streaming service provider.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Nature of Services</h2>
          <p className="text-muted-foreground">SwiftAssist provides consultation, guidance, and facilitation services to help customers navigate cable, internet, and streaming options. We do not sell, resell, or provide any provider services directly. Our fees are for assistance services only.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">3. Service Fees</h2>
          <p className="text-muted-foreground">Our service fees are separate from any charges billed by service providers. We charge for our consultation and assistance time only. Provider service costs are billed directly by the respective providers.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">4. No Provider Affiliation</h2>
          <p className="text-muted-foreground">All trademarks, service marks, and brand names mentioned belong to their respective owners. Our use of provider names is for descriptive purposes only.</p>
        </section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const RefundPolicy = () => (
  <LegalPage title="Refund Policy" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section>
          <h2 className="text-2xl font-bold mb-4">7-Day Satisfaction Guarantee</h2>
          <p className="text-muted-foreground">If you are unsatisfied with our assistance services or if we are unable to provide the guidance you need, you may request a refund within 7 days of your purchase.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
          <p className="text-muted-foreground">Contact our team at 1-800-555-0199 or email refunds@swiftassist.com with your order details. Refunds are processed within 5-7 business days.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Important Note</h2>
          <p className="text-muted-foreground">Our refund policy applies only to SwiftAssist service fees. Any fees or charges from service providers are subject to those providers' own refund policies and must be addressed directly with them.</p>
        </section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const Disclaimer = () => (
  <LegalPage title="Disclaimer" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section>
          <h2 className="text-2xl font-bold mb-4">Independent Third-Party Platform</h2>
          <p className="text-muted-foreground">SwiftAssist is an independent service assistance platform. We are not affiliated with, endorsed by, authorized by, or officially connected to any cable, internet, or streaming service provider including but not limited to Spectrum®, Xfinity®, AT&T®, Verizon®, or any other provider.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Service Limitations</h2>
          <p className="text-muted-foreground">We provide consultation and guidance services only. We cannot guarantee service availability, pricing, or features from any provider. All provider information is subject to change without notice.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Trademark Notice</h2>
          <p className="text-muted-foreground">All product names, logos, and brands mentioned are property of their respective owners. All company, product and service names used are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">No Password Collection</h2>
          <p className="text-muted-foreground">We never request or collect your service provider account passwords or credentials. Any account access or changes should be done directly with your service provider.</p>
        </section>
      </div>
    </ScrollReveal>
  </LegalPage>
);
