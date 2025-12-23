import { Phone } from 'lucide-react';

export const FloatingCallButton = () => (
  <a
    href="tel:8889643161"
    className="fixed z-50 bottom-20 right-6 flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-all text-lg font-semibold animate-bounce"
    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
    aria-label="Call Now"
  >
    <Phone className="w-6 h-6 mr-1" />
    Call Now
  </a>
);
