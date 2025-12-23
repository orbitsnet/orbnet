import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wifi, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About Us', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    children: [
      { name: 'Internet Assistance', path: '/internet-plans' },
      { name: 'Cable TV Help', path: '/cable-tv' },
      { name: 'Bundle Guidance', path: '/bundles' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
              <img src="/logo.svg" alt="Orbit Net Logo" className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">
              Orbit<span className="text-accent">Net</span>
            </span>
          </Link>

          {/* Desktop Navigation - Pill Style */}
          <div className="hidden lg:flex items-center gap-1 bg-foreground rounded-full px-2 py-2">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
              >
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-foreground bg-background'
                        : 'text-background/80 hover:text-background'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-foreground bg-background'
                        : 'text-background/80 hover:text-background'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-3 py-2 bg-card rounded-xl shadow-lg border border-border min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <a href="tel:8889643161" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (888) 964-3161
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 space-y-2">
              <Button variant="hero" className="w-full" asChild>
                <a href="tel:8889643161">Call Now</a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:8889643161">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
