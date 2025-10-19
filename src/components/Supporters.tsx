import { Building2, Heart, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Supporters = () => {
  const patrocinadores = [
    {
      name: "Banco Mundial",
      type: "Patrocinador Diamante",
      logo: "🏦"
    },
    {
      name: "Organização Internacional do Trabalho (OIT)",
      type: "Patrocinador Ouro",
      logo: "🌐"
    },
    {
      name: "Fundação Bill & Melinda Gates",
      type: "Patrocinador Ouro",
      logo: "💼"
    },
    {
      name: "Vale S.A.",
      type: "Patrocinador Prata",
      logo: "⚒️"
    },
  ];

  const ongs = [
    { name: "Oxfam Internacional", logo: "🤝" },
    { name: "Instituto Ethos", logo: "🌱" },
    { name: "Ashoka", logo: "💡" },
    { name: "CARE Brasil", logo: "❤️" },
    { name: "Ação da Cidadania", logo: "🍽️" },
    { name: "PNUD", logo: "🌍" },
  ];

  const apoiadoresInstitucionais = [
    "Ministério da Economia",
    "SEBRAE Nacional",
    "CNI",
    "CUT",
    "USP",
    "FGV",
    "IPEA",
    "Rede Brasil do Pacto Global",
  ];

  return (
    <section id="apoiadores" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSOS <span className="text-primary">PARCEIROS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Juntos, construímos um futuro de trabalho decente e crescimento econômico sustentável
          </p>
        </div>

        {/* Patrocinadores */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Patrocinadores</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patrocinadores.map((patrocinador, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="text-5xl mb-3">{patrocinador.logo}</div>
                <div className="text-xs text-primary font-semibold mb-2">{patrocinador.type}</div>
                <h4 className="font-bold text-sm">{patrocinador.name}</h4>
              </Card>
            ))}
          </div>
        </div>

        {/* ONGs */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">ONGs Parceiras</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ongs.map((ong, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="text-4xl mb-2">{ong.logo}</div>
                <h4 className="font-semibold text-xs">{ong.name}</h4>
              </Card>
            ))}
          </div>
        </div>

        {/* Apoiadores Institucionais */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">Apoiadores Institucionais</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {apoiadoresInstitucionais.map((apoiador, index) => (
              <Card key={index} className="p-3 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h4 className="font-semibold text-xs">{apoiador}</h4>
              </Card>
            ))}
          </div>
        </div>

        {/* Link para página completa */}
        <div className="text-center">
          <Link 
            to="/apoiadores" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ver Todos os Parceiros
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
