import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Heart, Handshake, Award, ArrowLeft, Landmark, Globe2, Briefcase, Pickaxe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Apoiadores = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const patrocinadores = [
    {
      name: "Banco Mundial",
      type: "Patrocinador Diamante",
      description: "Apoio financeiro e técnico para programas de desenvolvimento sustentável",
      icon: Landmark
    },
    {
      name: "Organização Internacional do Trabalho (OIT)",
      type: "Patrocinador Ouro",
      description: "Parceria estratégica em políticas de trabalho decente",
      icon: Globe2
    },
    {
      name: "Fundação Bill & Melinda Gates",
      type: "Patrocinador Ouro",
      description: "Investimento em inovação e empreendedorismo sustentável",
      icon: Briefcase
    },
    {
      name: "Vale S.A.",
      type: "Patrocinador Prata",
      description: "Compromisso com práticas de trabalho responsável e desenvolvimento local",
      icon: Pickaxe
    },
  ];

  const ongs = [
    {
      name: "Oxfam Internacional",
      area: "Igualdade Econômica",
      description: "Combate à desigualdade e promoção de oportunidades justas de trabalho",
      logo: "🤝"
    },
    {
      name: "Instituto Ethos",
      area: "Responsabilidade Social",
      description: "Promoção de práticas empresariais sustentáveis e éticas",
      logo: "🌱"
    },
    {
      name: "Ashoka",
      area: "Empreendedorismo Social",
      description: "Apoio a empreendedores sociais e inovação para mudança sistêmica",
      logo: "💡"
    },
    {
      name: "CARE Brasil",
      area: "Desenvolvimento Comunitário",
      description: "Programas de empoderamento econômico e geração de renda",
      logo: "❤️"
    },
    {
      name: "Ação da Cidadania",
      area: "Inclusão Social",
      description: "Iniciativas de combate à fome e geração de trabalho e renda",
      logo: "🍽️"
    },
    {
      name: "Programa das Nações Unidas para o Desenvolvimento (PNUD)",
      area: "Desenvolvimento Sustentável",
      description: "Coordenação global dos Objetivos de Desenvolvimento Sustentável",
      logo: "🌍"
    },
  ];

  const apoiadoresInstitucionais = [
    "Ministério da Economia",
    "SEBRAE Nacional",
    "Confederação Nacional da Indústria (CNI)",
    "Central Única dos Trabalhadores (CUT)",
    "Universidade de São Paulo (USP)",
    "Fundação Getúlio Vargas (FGV)",
    "Instituto de Pesquisa Econômica Aplicada (IPEA)",
    "Rede Brasil do Pacto Global",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </header>
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                NOSSOS <span className="text-primary">PARCEIROS</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Juntos, construímos um futuro de trabalho decente e crescimento econômico sustentável para todos
              </p>
            </div>
          </div>
          
          {/* Background decoration */}
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
        </section>

        {/* Patrocinadores */}
        <section className="py-24 bg-card">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <Building2 className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Patrocinadores</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {patrocinadores.map((patrocinador, index) => {
                  const IconComponent = patrocinador.icon;
                  return (
                    <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-10 h-10 text-primary" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-primary font-semibold mb-2">{patrocinador.type}</div>
                          <h3 className="text-2xl font-bold mb-3">{patrocinador.name}</h3>
                          <p className="text-muted-foreground">{patrocinador.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ONGs Parceiras */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <Heart className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">ONGs Parceiras</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ongs.map((ong, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <div className="text-5xl mb-4">{ong.logo}</div>
                    <div className="text-xs text-primary font-semibold mb-2 uppercase">{ong.area}</div>
                    <h3 className="text-xl font-bold mb-3">{ong.name}</h3>
                    <p className="text-sm text-muted-foreground">{ong.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apoiadores Institucionais */}
        <section className="py-24 bg-card">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <Handshake className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-bold">Apoiadores Institucionais</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apoiadoresInstitucionais.map((apoiador, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold">{apoiador}</h3>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                FAÇA PARTE <span className="text-primary">DESSA REDE</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Se sua organização compartilha dos valores da ODS 8, entre em contato e descubra como podemos colaborar
              </p>
              <a 
                href="/#contato" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Apoiadores;