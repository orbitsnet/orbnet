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
        <div className="max-w-3xl mx-auto mb-8 bg-accent/10 border-2 border-accent rounded-xl p-6">
          <p className="text-sm text-foreground text-center leading-relaxed">
            <strong className="text-accent text-base">Important Disclosure:</strong> Orbit Net is an <strong>independent third-party</strong> service assistance platform. 
            We are <strong>NOT affiliated with, endorsed by, authorized by, or officially connected</strong> to any cable, internet, streaming, or telecommunications provider. 
            We provide independent consultation and assistance services only. All provider services and charges are handled directly by the respective service providers.
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
          <h2 className="text-2xl font-bold mb-4">About Orbit Net</h2>
          <p className="text-muted-foreground mb-4"><strong>Orbit Net is an independent third-party service assistance platform.</strong> We are not affiliated with, endorsed by, or officially connected to any service provider. We provide independent consultation services to help you navigate your options.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground">We collect information you provide when requesting our independent assistance services, including name, email, phone number, and service preferences. We do not collect or store any service provider account passwords or credentials.</p>
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
          <p className="text-muted-foreground">For privacy concerns, call (888) 964-3161.</p>
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
          <h2 className="text-2xl font-bold mb-4">1. Independent Third-Party Service Agreement</h2>
          <p className="text-muted-foreground mb-3"><strong>IMPORTANT:</strong> By using Orbit Net services, you acknowledge and agree that we are an <strong>independent third-party</strong> assistance platform.</p>
          <p className="text-muted-foreground">We are <strong>NOT affiliated with, endorsed by, authorized by, sponsored by, or officially connected</strong> to any cable, internet, streaming, telecommunications, or utility service provider including but not limited to Spectrum®, Xfinity®, AT&T®, Verizon®, Cox®, CenturyLink®, Frontier®, or any other provider.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">2. Nature of Independent Services</h2>
          <p className="text-muted-foreground mb-3">Orbit Net provides <strong>independent consultation, guidance, and facilitation services only</strong>. We help customers understand and navigate cable, internet, and streaming options.</p>
          <p className="text-muted-foreground">We do NOT sell, resell, or provide any provider services directly. We are NOT agents, representatives, or authorized dealers of any service provider. Our fees are strictly for our independent assistance services only.</p>
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
          <p className="text-muted-foreground">Contact our team at (888) 964-3161 with your order details. Refunds are processed within 5-7 business days.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Important Note</h2>
          <p className="text-muted-foreground">Our refund policy applies only to Orbit Net service fees. Any fees or charges from service providers are subject to those providers' own refund policies and must be addressed directly with them.</p>
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
          <p className="text-muted-foreground mb-3"><strong className="text-accent">IMPORTANT DISCLOSURE:</strong> Orbit Net is an <strong>independent third-party</strong> service assistance platform.</p>
          <p className="text-muted-foreground mb-3">We are <strong>NOT affiliated with, endorsed by, authorized by, sponsored by, approved by, or officially connected in any way</strong> to any cable, internet, streaming, telecommunications, or utility service provider including but not limited to Spectrum®, Xfinity®, Comcast®, AT&T®, Verizon®, Cox®, CenturyLink®, Frontier®, Charter®, Optimum®, Mediacom®, or any other provider.</p>
          <p className="text-muted-foreground">We are NOT agents, representatives, resellers, or authorized dealers of any service provider. We provide <strong>independent consultation services only</strong>.</p>
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
