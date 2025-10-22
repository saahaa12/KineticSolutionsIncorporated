import { useEffect } from "react";
import { ArrowLeft, Briefcase, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const TrabalhoDecente = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trabalho <span className="text-primary">Decente</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Promover oportunidades de trabalho digno, seguro e bem remunerado para todos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O conceito de trabalho decente foi elaborado pela Organização Internacional do Trabalho (OIT) 
                e sintetiza a sua missão histórica de promover oportunidades para que homens e mulheres obtenham 
                um trabalho produtivo e de qualidade, em condições de liberdade, equidade, segurança e dignidade humanas.
              </p>
            </div>

            {/* Feature Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop"
                alt="Equipe trabalhando em ambiente colaborativo"
                className="w-full h-[400px] object-cover"
              />
            </Card>

            {/* Key Principles */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Princípios Fundamentais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Segurança no Trabalho</h3>
                  <p className="text-muted-foreground">
                    Ambientes de trabalho seguros e saudáveis, com proteção contra acidentes 
                    e doenças ocupacionais, garantindo o bem-estar físico e mental dos trabalhadores.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Remuneração Justa</h3>
                  <p className="text-muted-foreground">
                    Salários adequados que permitam uma vida digna, com benefícios sociais 
                    e oportunidades de crescimento profissional e desenvolvimento de carreira.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Igualdade de Oportunidades</h3>
                  <p className="text-muted-foreground">
                    Acesso igualitário ao mercado de trabalho, sem discriminação de gênero, 
                    raça, idade ou qualquer outra característica pessoal.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Briefcase className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Direitos Trabalhistas</h3>
                  <p className="text-muted-foreground">
                    Respeito aos direitos fundamentais no trabalho, incluindo liberdade sindical, 
                    negociação coletiva e eliminação do trabalho forçado e infantil.
                  </p>
                </Card>
              </div>
            </div>

            {/* Additional Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
                alt="Profissionais em reunião de negócios"
                className="w-full h-[400px] object-cover"
              />
            </Card>

            {/* Impact Section */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6">Impacto Global</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O trabalho decente está no centro dos esforços para erradicar a pobreza e é um meio 
                  de alcançar um desenvolvimento sustentável, equitativo e inclusivo. A OIT considera 
                  que a realização do trabalho decente em contextos nacionais diversos requer uma ação 
                  estratégica adaptada às necessidades e prioridades específicas de cada país.
                </p>
                <p>
                  A promoção do trabalho decente contribui diretamente para o crescimento econômico 
                  inclusivo e sustentável, reduz as desigualdades, fortalece a coesão social e promove 
                  a justiça social. É fundamental para alcançar os Objetivos de Desenvolvimento Sustentável 
                  estabelecidos pela ONU.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Dados Importantes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">2 bilhões</div>
                  <div className="text-sm text-muted-foreground">Trabalhadores em economia informal</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">160 milhões</div>
                  <div className="text-sm text-muted-foreground">Crianças em trabalho infantil</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">25 milhões</div>
                  <div className="text-sm text-muted-foreground">Pessoas em trabalho forçado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalhoDecente;
