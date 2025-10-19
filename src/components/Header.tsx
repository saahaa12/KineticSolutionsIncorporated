import { Button } from "@/components/ui/button";

const Header = () => {
  const stockData = [
    { symbol: "KSI", value: "+12.5%", price: "$1,234" },
    { symbol: "WORK", value: "+8.3%", price: "$567" },
    { symbol: "GROW", value: "+15.7%", price: "$890" },
    { symbol: "ECON", value: "+6.2%", price: "$445" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border overflow-hidden">
      {/* Cosmic Explosion Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Expanding cosmic rings */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full border-2 border-primary/40"
            style={{ animation: 'cosmic-ring 4s ease-out infinite' }} />
          <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-primary/30"
            style={{ animation: 'cosmic-ring 4s ease-out infinite' }} />
          <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-primary/20"
            style={{ animation: 'cosmic-ring 4s ease-out infinite' }} />
        </div>

        {/* Stock market ticker */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center overflow-hidden w-1/3">
          <div className="flex gap-4 animate-scroll-left">
            {[...stockData, ...stockData].map((stock, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-mono whitespace-nowrap">
                <span className="text-primary font-bold">{stock.symbol}</span>
                <span className="text-green-400">{stock.value}</span>
                <span className="text-muted-foreground">{stock.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Energy particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-header ${2 + Math.random() * 2}s ease-in-out infinite`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="container flex h-16 items-center justify-between relative z-10">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold text-primary" style={{ letterSpacing: '0.3rem' }}>
            KSI
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              SOBRE A ODS 8
            </a>
            <a href="#metas" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              METAS
            </a>
            <a href="#programas" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              PROGRAMAS
            </a>
            <a href="#impacto" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              IMPACTO
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              CONTATO
            </a>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes cosmic-ring {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes float-header {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.8;
          }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
