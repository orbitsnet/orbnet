import { Link } from 'react-router-dom';
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Internet Plans', path: '/internet-plans' },
    { name: 'Cable TV', path: '/cable-tv' },
    { name: 'Bundle Offers', path: '/bundles' },
    { name: 'Business Solutions', path: '/business' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Coverage Area', path: '/coverage' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
  ],
  support: [
    { name: 'Help Center', path: '/support' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQs', path: '/support#faq' },
    { name: 'Report an Issue', path: '/support#report' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Fair Usage Policy', path: '/fair-usage' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Wifi className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">
                Swift<span className="text-accent">Connect</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Connecting millions of homes with ultra-fast internet and premium cable TV services for over 25 years.
            </p>
            <div className="space-y-3">
              <a href="tel:1-800-SWIFT" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>1-800-SWIFT</span>
              </a>
              <a href="mailto:support@swiftconnect.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@swiftconnect.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>123 Network Ave, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
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
            <h4 className="font-semibold mb-4">Support</h4>
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

        {/* Social & Legal */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-primary-foreground/50 text-sm mt-8">
            © {new Date().getFullYear()} SwiftConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
