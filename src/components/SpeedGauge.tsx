import { useState, useEffect, useRef } from 'react';

interface SpeedGaugeProps {
  speed: number;
  maxSpeed?: number;
  label: string;
  unit?: string;
}

export const SpeedGauge = ({ speed, maxSpeed = 1000, label, unit = 'Mbps' }: SpeedGaugeProps) => {
  const [animatedSpeed, setAnimatedSpeed] = useState(0);
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
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedSpeed(Math.floor(easeOutQuart * speed));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, speed]);

  const percentage = (animatedSpeed / maxSpeed) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference * 0.75;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-135" viewBox="0 0 100 100">
          {/* Background arc */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-muted"
            strokeDasharray={circumference * 0.75}
            strokeDashoffset={0}
          />
          {/* Animated arc */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference * 0.75}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(230 80% 45%)" />
              <stop offset="100%" stopColor="hsl(120 80% 45%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{animatedSpeed}</span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
};
