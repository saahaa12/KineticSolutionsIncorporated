import { useEffect, useState, useRef } from "react";
import ksiSphere from "@/assets/ksi-sphere.png";
import heroAudio from "@/assets/hero-background-audio.mp3";

const LoadingSplash = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Start playing audio automatically
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(err => console.log("Audio play error:", err));
    }
    return () => {
      // Stop audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    // Fade out audio when progress reaches 80%
    if (audioRef.current && progress >= 80) {
      const fadeOutVolume = Math.max(0, (100 - progress) / 20);
      audioRef.current.volume = fadeOutVolume;
    }
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Background Audio */}
      <audio ref={audioRef} className="hidden">
        <source src={heroAudio} type="audio/mpeg" />
      </audio>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-scroll 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}

      {/* Scanning Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ 
            top: '30%',
            animation: 'scan-line 3s ease-in-out infinite'
          }} 
        />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ 
            top: '70%',
            animation: 'scan-line 3s ease-in-out infinite'
          }} 
        />
      </div>

      <div className="text-center space-y-8 max-w-md px-4 relative z-10">
        {/* Cosmic Explosion Logo */}
        <div className="relative w-64 h-64 mx-auto">
          {/* Explosion rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full rounded-full border-2 border-primary/40"
              style={{ animation: 'cosmic-explosion 2s ease-out infinite' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-full border-2 border-primary/30"
              style={{ animation: 'cosmic-explosion 2s ease-out infinite' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] rounded-full border-2 border-primary/20"
              style={{ animation: 'cosmic-explosion 2s ease-out infinite' }} />
          </div>

          {/* Energy particles exploding outward */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                top: '50%',
                left: '50%',
                animation: `explode-particle 2s ease-out infinite`,
                transform: `rotate(${i * 30}deg) translateY(0)`,
              }}
            />
          ))}
          
          {/* Central sphere image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48" style={{
              animation: 'sphere-entrance 2s ease-out forwards'
            }}>
              <img 
                src={ksiSphere} 
                alt="KSI Sphere" 
                className="w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 0 30px hsl(var(--primary) / 0.8)) drop-shadow(0 0 60px hsl(var(--primary) / 0.4))',
                  animation: 'pulse-glow 2s ease-in-out infinite, sphere-rotate 10s linear infinite'
                }}
              />
            </div>
          </div>
        </div>

        {/* Glitch Title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold relative">
            <span className="text-primary" style={{
              animation: 'glitch 3s ease-in-out infinite',
              letterSpacing: '0.5rem'
            }}>K S I</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono tracking-wider">
            INITIALIZING SYSTEM...
          </p>
        </div>

        {/* Futuristic Progress Bar */}
        <div className="w-full max-w-xs mx-auto space-y-3">
          <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/50 transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px hsl(var(--primary) / 0.8)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                animation: 'shimmer 2s ease-in-out infinite'
              }}
            />
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-primary">{progress.toFixed(0)}%</span>
            <span className="text-muted-foreground">LOADING</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
        }
        @keyframes scan-line {
          0%, 100% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes glitch {
          0%, 90%, 100% { transform: translateX(0); }
          92% { transform: translateX(-2px); }
          94% { transform: translateX(2px); }
          96% { transform: translateX(-2px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes cosmic-explosion {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes explode-particle {
          0% {
            transform: rotate(var(--rotation, 0deg)) translateY(0);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--rotation, 0deg)) translateY(-100px);
            opacity: 0;
          }
        }
        @keyframes sphere-entrance {
          0% {
            transform: scale(0);
            opacity: 0;
            filter: brightness(5) blur(20px);
          }
          50% {
            transform: scale(1.2);
            filter: brightness(3) blur(10px);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1) blur(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px hsl(var(--primary) / 0.6)) drop-shadow(0 0 40px hsl(var(--primary) / 0.3));
          }
          50% {
            filter: drop-shadow(0 0 40px hsl(var(--primary) / 0.9)) drop-shadow(0 0 80px hsl(var(--primary) / 0.5));
          }
        }
        @keyframes sphere-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSplash;
