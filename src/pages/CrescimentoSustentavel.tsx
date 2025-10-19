import { ArrowLeft, TrendingUp, Leaf, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CrescimentoSustentavel = () => {
  const navigate = useNavigate();

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
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crescimento <span className="text-primary">Sustentável</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Desenvolver economia inclusiva com crescimento econômico sustentável
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
                O crescimento econômico sustentável é aquele que atende às necessidades do presente sem 
                comprometer a capacidade das gerações futuras de atenderem às suas próprias necessidades. 
                Ele busca equilibrar desenvolvimento econômico, proteção ambiental e equidade social, 
                criando uma economia resiliente e inclusiva para todos.
              </p>
            </div>

            {/* Feature Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                alt="Gráficos e análise de crescimento sustentável"
                className="w-full h-[400px] object-cover"
              />
            </Card>

            {/* Key Pillars */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Pilares do Crescimento Sustentável</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Leaf className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Sustentabilidade Ambiental</h3>
                  <p className="text-muted-foreground">
                    Uso eficiente de recursos naturais, redução de emissões de carbono, preservação 
                    da biodiversidade e transição para energias renováveis, garantindo a saúde do planeta.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Inovação e Tecnologia</h3>
                  <p className="text-muted-foreground">
                    Investimento em pesquisa e desenvolvimento, tecnologias limpas, digitalização 
                    e automação que aumentam a produtividade sem prejudicar o meio ambiente.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Inclusão Social</h3>
                  <p className="text-muted-foreground">
                    Distribuição equitativa dos benefícios do crescimento, redução das desigualdades, 
                    acesso universal à educação e oportunidades econômicas para todos os segmentos da sociedade.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Economia Circular</h3>
                  <p className="text-muted-foreground">
                    Modelo econômico que visa eliminar o desperdício, mantendo produtos e materiais 
                    em uso pelo maior tempo possível através de reuso, reparo e reciclagem.
                  </p>
                </Card>
              </div>
            </div>

            {/* Additional Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"
                alt="Ambiente de trabalho moderno e sustentável"
                className="w-full h-[400px] object-cover"
              />
            </Card>

            {/* Benefits Section */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6">Benefícios do Crescimento Sustentável</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O crescimento econômico sustentável cria empregos de qualidade, aumenta a produtividade 
                  e impulsiona a inovação, ao mesmo tempo em que protege o meio ambiente e promove a 
                  inclusão social. Empresas que adotam práticas sustentáveis tendem a ser mais resilientes, 
                  competitivas e atraentes para investidores e consumidores conscientes.
                </p>
                <p>
                  Além disso, o crescimento sustentável contribui para a mitigação das mudanças climáticas, 
                  reduz a poluição, conserva recursos naturais e melhora a qualidade de vida das comunidades. 
                  Países que investem em desenvolvimento sustentável estão melhor preparados para enfrentar 
                  desafios globais e construir economias mais fortes e equitativas.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Impacto Global</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">$26 trilhões</div>
                  <div className="text-sm text-muted-foreground">Oportunidade econômica da sustentabilidade até 2030</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">380 milhões</div>
                  <div className="text-sm text-muted-foreground">Novos empregos em economia verde previstos</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">Redução de emissões necessária até 2030</div>
                </div>
              </div>
            </div>

            {/* Action Steps */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Como Promover o Crescimento Sustentável</h2>
              <Card className="p-8 border-border">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Investir em energias renováveis e infraestrutura verde</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Promover práticas de economia circular e redução de desperdício</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Apoiar educação e capacitação para empregos verdes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Implementar políticas públicas que incentivem a sustentabilidade</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Fomentar parcerias entre setor público, privado e sociedade civil</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrescimentoSustentavel;
