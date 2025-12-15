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
        <section><h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2><p className="text-muted-foreground">We collect information you provide directly, including name, email, address, and payment details when you subscribe to our services.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2><p className="text-muted-foreground">We use your information to provide services, process payments, send updates, and improve our offerings.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">3. Data Security</h2><p className="text-muted-foreground">We implement industry-standard security measures to protect your personal information.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">4. Contact Us</h2><p className="text-muted-foreground">For privacy concerns, email privacy@swiftconnect.com or call 1-800-SWIFT.</p></section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const TermsConditions = () => (
  <LegalPage title="Terms & Conditions" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section><h2 className="text-2xl font-bold mb-4">1. Service Agreement</h2><p className="text-muted-foreground">By using SwiftConnect services, you agree to these terms and conditions.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">2. Service Availability</h2><p className="text-muted-foreground">We strive for 99.9% uptime but cannot guarantee uninterrupted service.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2><p className="text-muted-foreground">Monthly payments are due on the billing date. Late payments may result in service suspension.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">4. Cancellation</h2><p className="text-muted-foreground">You may cancel service at any time with 30 days notice.</p></section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const RefundPolicy = () => (
  <LegalPage title="Refund Policy" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section><h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2><p className="text-muted-foreground">New customers can request a full refund within 30 days of service activation.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2><p className="text-muted-foreground">Contact our support team at 1-800-SWIFT or email refunds@swiftconnect.com.</p></section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const FairUsage = () => (
  <LegalPage title="Fair Usage Policy" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section><h2 className="text-2xl font-bold mb-4">Unlimited Data</h2><p className="text-muted-foreground">All plans include unlimited data for residential use.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">Network Management</h2><p className="text-muted-foreground">During peak congestion, we may temporarily manage network traffic to ensure quality for all users.</p></section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const CookiePolicy = () => (
  <LegalPage title="Cookie Policy" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section><h2 className="text-2xl font-bold mb-4">What Are Cookies</h2><p className="text-muted-foreground">Cookies are small files stored on your device to improve your browsing experience.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2><p className="text-muted-foreground">We use cookies for authentication, preferences, and analytics.</p></section>
      </div>
    </ScrollReveal>
  </LegalPage>
);

export const Disclaimer = () => (
  <LegalPage title="Disclaimer" lastUpdated="December 2024">
    <ScrollReveal>
      <div className="space-y-8 text-foreground">
        <section><h2 className="text-2xl font-bold mb-4">Service Disclaimer</h2><p className="text-muted-foreground">Speeds may vary based on location, network conditions, and equipment. Advertised speeds are maximum speeds.</p></section>
        <section><h2 className="text-2xl font-bold mb-4">Content Disclaimer</h2><p className="text-muted-foreground">Channel availability subject to change. Some content may require additional subscriptions.</p></section>
      </div>
    </ScrollReveal>
  </LegalPage>
);
