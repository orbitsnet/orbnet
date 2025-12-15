import { Link } from 'react-router-dom';
import { Play, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const featuredContent = {
  main: {
    title: 'Bangladesh v Pakistan Cricket Match',
    category: 'Live Sports',
    badge: 'LIVE',
  },
  shows: [
    { title: 'No Country for Old Men', category: 'Movies', image: '🎬' },
    { title: 'Western Classics', category: 'Movies', image: '🤠' },
    { title: 'Nature Documentary', category: 'Documentary', image: '🦁' },
    { title: 'Action Heroes', category: 'Action', image: '💥' },
  ],
};

export const LiveTVSection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <ScrollReveal>
            <div className="text-primary-foreground">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Live Streaming
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Now Showing on{' '}
                <span className="text-accent">Live TV</span>
              </h2>
              
              {/* Featured Content */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-primary-foreground/20">
                {/* Main Featured */}
                <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <Play className="w-8 h-8 text-accent fill-accent" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-medium mb-2">
                      {featuredContent.main.badge}
                    </span>
                    <h3 className="text-lg font-bold text-primary-foreground">
                      {featuredContent.main.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {featuredContent.main.category}
                    </p>
                  </div>
                  
                  {/* Control buttons */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {['▶', '⏸', '⋮'].map((icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-xs">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Show Grid */}
                <div className="grid grid-cols-4 gap-1 p-2">
                  {featuredContent.shows.map((show, index) => (
                    <div 
                      key={show.title}
                      className="aspect-[3/4] bg-gradient-to-br from-primary-light/30 to-primary/30 rounded-lg flex items-center justify-center text-4xl cursor-pointer hover:scale-105 transition-transform"
                    >
                      {show.image}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/cable-tv">
                    View All Streaming
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Testimonial Preview */}
          <ScrollReveal delay={2}>
            <div className="text-primary-foreground">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Testimonial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What Says Our{' '}
                <span className="text-accent">Customers</span>{' '}
                About Us
              </h2>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-6 border border-primary-foreground/20">
                <p className="text-lg text-primary-foreground/90 mb-6 italic">
                  "Get more from your day with the ultra high speeds Internet connection. Wi-Fi that works, just in case wondering building."
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-xl">
                      👨‍💼
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-foreground">Stephen Mash</h4>
                      <p className="text-sm text-primary-foreground/70">CEO & Founder</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="hero" size="icon" className="w-10 h-10 rounded-full">
                      <Play className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-primary-foreground/70">+</span>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-end gap-2 mt-4">
                <button className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  ←
                </button>
                <button className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  →
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
