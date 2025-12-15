import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const channels = [
  { name: 'Sports', genres: ['ESPN', 'FOX Sports', 'NFL Network'] },
  { name: 'Movies', genres: ['HBO', 'Showtime', 'Cinemax'] },
  { name: 'Kids', genres: ['Disney', 'Nickelodeon', 'Cartoon Network'] },
  { name: 'News', genres: ['CNN', 'Fox News', 'MSNBC'] },
  { name: 'Entertainment', genres: ['AMC', 'FX', 'Comedy Central'] },
  { name: 'Lifestyle', genres: ['HGTV', 'Food Network', 'TLC'] },
];

export const LiveTVSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Live TV & Streaming
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              500+ Channels of{' '}
              <span className="text-gradient">Premium Entertainment</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From live sports to blockbuster movies, never miss a moment of your favorite content.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {channels.map((category, index) => (
            <ScrollReveal key={category.name} delay={index}>
              <div className="group bg-card rounded-2xl border border-border p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm text-muted-foreground">Premium</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.genres.map((genre) => (
                    <span 
                      key={genre}
                      className="px-3 py-1 rounded-full bg-muted text-sm text-foreground"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={3}>
          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/cable-tv">
                <Play className="w-5 h-5 mr-2" />
                Watch Live TV
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
