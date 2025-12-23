import { Link } from 'react-router-dom';
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Internet Assistance', path: '/internet-plans' },
    { name: 'Cable TV Help', path: '/cable-tv' },
    { name: 'Bundle Guidance', path: '/bundles' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/about#process' },
    { name: 'FAQ', path: '/faq' },
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Pricing & Fees', path: '/pricing' },
    { name: 'Request Help', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Disclosure */}
      <div className="bg-foreground/90 border-b border-primary-foreground/10 py-4 px-4">
        <p className="text-center text-sm text-primary-foreground/70 max-w-4xl mx-auto">
          <strong className="text-accent">Important Disclosure:</strong> Orbit Net is an <strong>independent third-party</strong> service assistance platform. 
          We are <strong>NOT affiliated with, endorsed by, authorized by, or officially connected</strong> to any cable, internet, streaming, or telecommunications service provider. 
          We provide independent consultation services only. All trademarks, service marks, and brand names are property of their respective owners and their use does not imply endorsement.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <img src="/logo.svg" alt="Orbit Net Logo" className="w-7 h-7" />
              </div>
              <span className="text-xl font-bold">
                Orbit<span className="text-accent">Net</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Helping customers navigate cable, internet, and streaming services with expert guidance and personalized assistance for over a decade.
            </p>
            <div className="space-y-3">
              <a href="tel:8889643161" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>(888) 964-3161</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>76 Co Rd 436 Dayton, TX 77535</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">How We Help</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Get Help</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-primary-foreground/50 text-sm mt-8">
            © {new Date().getFullYear()} OrbitNet. Independent service assistance platform. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
