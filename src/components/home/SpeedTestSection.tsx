import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Server, Globe, Download, Upload, Activity, Wifi } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const SpeedGaugeLarge = () => {
  const [speed, setSpeed] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2500, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setSpeed(Math.floor(easeOutQuart * 89.99 * 100) / 100);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  const rotation = (speed / 150) * 180 - 90;

  return (
    <div ref={ref} className="relative w-64 h-64 mx-auto">
      {/* Gauge Background */}
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Background arc */}
        <path
          d="M 30 150 A 70 70 0 1 1 170 150"
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Speed markers */}
        {[0, 50, 100, 150].map((mark, i) => {
          const angle = (mark / 150) * 180 - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 85 * Math.cos(rad);
          const y = 100 + 85 * Math.sin(rad);
          return (
            <text
              key={mark}
              x={x}
              y={y}
              textAnchor="middle"
              className="fill-muted-foreground text-xs font-medium"
            >
              {mark}
            </text>
          );
        })}
        {/* Gradient arc */}
        <defs>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(230 80% 45%)" />
            <stop offset="100%" stopColor="hsl(120 80% 45%)" />
          </linearGradient>
        </defs>
        <path
          d="M 30 150 A 70 70 0 1 1 170 150"
          fill="none"
          stroke="url(#speedGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="330"
          strokeDashoffset={330 - (speed / 150) * 330}
          className="transition-all duration-100"
        />
      </svg>
      
      {/* Center display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-foreground">{speed.toFixed(2)}</span>
        <span className="text-sm text-muted-foreground">Mbps</span>
      </div>
      
      {/* Needle */}
      <div 
        className="absolute left-1/2 top-1/2 w-1 h-16 bg-accent origin-bottom rounded-full transition-transform duration-100"
        style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
      />
      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export const SpeedTestSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What Can We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Get Ready for Ultra{' '}
              <span className="text-gradient">Speed Internet</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-6 items-center max-w-6xl mx-auto">
          {/* Left Info Cards */}
          <ScrollReveal delay={1} className="lg:col-span-1 space-y-4">
            {[
              { icon: Globe, label: 'IP Address', value: '192.168.1.1' },
              { icon: MapPin, label: 'Location', value: 'New York' },
              { icon: Server, label: 'Server', value: 'NYC-01' },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>

          {/* Center - Speed Gauge */}
          <ScrollReveal delay={2} className="lg:col-span-3">
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex justify-center mb-6">
                <Button variant="hero" size="lg">
                  Test Again
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <SpeedGaugeLarge />
            </div>
          </ScrollReveal>

          {/* Right Info Cards */}
          <ScrollReveal delay={3} className="lg:col-span-1 space-y-4">
            {[
              { icon: Download, label: 'Download', value: '940 Mbps' },
              { icon: Upload, label: 'Upload', value: '880 Mbps' },
              { icon: Activity, label: 'Idle Latency', value: '12 ms' },
              { icon: Wifi, label: 'Wi-Fi Name', value: 'SwiftNet-5G' },
            ].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
