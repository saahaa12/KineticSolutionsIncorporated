import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aggressive Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
            animation: 'background-zoom-pan 20s ease-in-out infinite'
          }}
        />
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-background/60" />
        
        {/* Aggressive Grid with Glitch */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
              linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px',
            animation: 'aggressive-grid 2s steps(10) infinite, grid-glitch 5s ease-in-out infinite'
          }} />
        </div>

        {/* Fast Scan Lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`scan-${i}`}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${i * 12.5}%`,
              animation: `fast-scan ${0.8 + i * 0.2}s linear infinite`,
              boxShadow: '0 0 20px hsl(var(--primary))',
              opacity: 0.6
            }}
          />
        ))}

        {/* Vertical Scan Lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`vscan-${i}`}
            className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              animation: `vertical-scan ${1.5 + i * 0.3}s linear infinite`,
              boxShadow: '0 0 20px hsl(var(--primary))',
              opacity: 0.4
            }}
          />
        ))}

        {/* Aggressive Orbs with Glow */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              background: `radial-gradient(circle, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.2), transparent)`,
              animation: `aggressive-float ${2 + i * 0.5}s ease-in-out infinite`,
              filter: 'blur(30px)',
              boxShadow: '0 0 60px hsl(var(--primary) / 0.8)'
            }}
          />
        ))}

        {/* Binary Rain Effect */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute font-mono text-xs font-bold text-primary"
            style={{
              left: `${i * 7}%`,
              animation: `binary-rain ${1.5 + Math.random()}s linear infinite`,
              textShadow: '0 0 10px hsl(var(--primary))',
              opacity: 0.7
            }}
          >
            {['1', '0', '1', '1', '0', '1', '0', '0', '1', '1'].map((bit, idx) => (
              <div key={idx} className="leading-none py-0.5">{bit}</div>
            ))}
          </div>
        ))}

        {/* Glitch Layers */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            background: 'repeating-linear-gradient(0deg, hsl(var(--primary) / 0.1) 0px, transparent 2px, transparent 4px)',
            animation: 'glitch-layer 0.3s steps(2) infinite'
          }}
        />

        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={`circuit-${i}`}
              className="absolute bg-primary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: '2px',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse-glow ${0.5 + Math.random() * 1.5}s ease-in-out infinite`,
                boxShadow: '0 0 10px hsl(var(--primary))'
              }}
            />
          ))}
        </div>

        {/* Fast Moving Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`fast-particle-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fast-particle ${0.8 + Math.random() * 1.5}s linear infinite`,
              boxShadow: '0 0 6px hsl(var(--primary))',
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            animation: 'noise-flicker 0.1s steps(2) infinite'
          }}
        />

        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
      </div>

      <style>{`
        @keyframes background-zoom-pan {
          0% { transform: scale(1) translate(0, 0); }
          25% { transform: scale(1.1) translate(-2%, -2%); }
          50% { transform: scale(1.15) translate(2%, 1%); }
          75% { transform: scale(1.1) translate(-1%, 2%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes aggressive-grid {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -20px) scale(1.05); }
        }
        @keyframes grid-glitch {
          0%, 90%, 100% { transform: skew(0deg); }
          91% { transform: skew(2deg) translateX(5px); }
          93% { transform: skew(-2deg) translateX(-5px); }
          95% { transform: skew(1deg); }
        }
        @keyframes fast-scan {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200vh); opacity: 0; }
        }
        @keyframes vertical-scan {
          0% { transform: translateX(-100vw); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(200vw); opacity: 0; }
        }
        @keyframes aggressive-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(40px, -40px) scale(1.3); }
          50% { transform: translate(-30px, 30px) scale(0.8); }
          75% { transform: translate(30px, 20px) scale(1.1); }
        }
        @keyframes binary-rain {
          0% { transform: translateY(-100%); opacity: 0; }
          5% { opacity: 0.7; }
          95% { opacity: 0.7; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes glitch-layer {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-3px, 2px); }
          66% { transform: translate(3px, -2px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.5); }
        }
        @keyframes fast-particle {
          0% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0;
          }
          5% { opacity: 1; }
          100% { 
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(720deg) scale(0);
            opacity: 0;
          }
        }
        @keyframes noise-flicker {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.08; }
        }
      `}</style>

      <div className="relative z-10 container text-center px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 id="hero-section" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground/40">PROMOVER O</span>
            <br />
            <span className="text-primary">CRESCIMENTO</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-foreground/80 space-y-2 max-w-4xl mx-auto">
            <p>Trabalho decente e crescimento econômico</p>
            <p className="text-foreground/60">inclusivo, sustentável e resiliente</p>
            <p className="text-foreground/60">para todos, em todos os lugares</p>
          </div>

          <div className="pt-8">
            <a 
              href="#sobre" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-medium">Descubra como</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
