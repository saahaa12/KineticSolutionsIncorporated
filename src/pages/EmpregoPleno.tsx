import { useEffect } from "react";
import { ArrowLeft, Users, Target, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const EmpregoPleno = () => {
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
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emprego <span className="text-primary">Pleno</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Garantir emprego pleno e produtivo para mulheres e homens, incluindo jovens
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
                O emprego pleno representa uma situação econômica em que todas as pessoas que desejam 
                trabalhar conseguem encontrar ocupação produtiva. Mais do que apenas números, o emprego 
                pleno significa oportunidades de trabalho decente que respeitam os direitos dos trabalhadores, 
                oferecem segurança social e permitem que homens e mulheres participem das decisões que afetam suas vidas.
              </p>
            </div>

            {/* Feature Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
                alt="Equipe diversa trabalhando junta"
                className="w-full h-[400px] object-cover"
              />
            </Card>

            {/* Key Objectives */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Objetivos do Emprego Pleno</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Acesso Universal ao Trabalho</h3>
                  <p className="text-muted-foreground">
                    Garantir que todas as pessoas em idade ativa, que desejam trabalhar, 
                    tenham acesso a oportunidades de emprego digno e produtivo, sem discriminação.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Produtividade e Qualificação</h3>
                  <p className="text-muted-foreground">
                    Promover o desenvolvimento de habilidades e competências que aumentam a 
                    produtividade dos trabalhadores e sua capacidade de adaptação às mudanças do mercado.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Inclusão de Grupos Vulneráveis</h3>
                  <p className="text-muted-foreground">
                    Foco especial em jovens, mulheres, pessoas com deficiência e outros grupos 
                    sub-representados no mercado de trabalho, promovendo igualdade de oportunidades.
                  </p>
                </Card>

                <Card className="p-6 border-border hover:border-primary transition-colors">
                  <Rocket className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Empreendedorismo</h3>
                  <p className="text-muted-foreground">
                    Apoiar a criação de novos negócios e startups que geram empregos de qualidade, 
                    fomentando o espírito empreendedor e a inovação.
                  </p>
                </Card>
              </div>
            </div>

            {/* Additional Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop"
                alt="Profissionais em ambiente de trabalho colaborativo"
                className="w-full h-[400px] object-cover"
              />
            </Card>

            {/* Challenges Section */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6">Desafios Globais</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Apesar dos avanços nas últimas décadas, o mundo enfrenta desafios significativos 
                  para alcançar o emprego pleno. O desemprego juvenil permanece alto em muitos países, 
                  a desigualdade de gênero no mercado de trabalho persiste, e a automação está 
                  transformando a natureza do trabalho de maneiras sem precedentes.
                </p>
                <p>
                  A pandemia de COVID-19 agravou muitos desses desafios, causando perdas massivas de 
                  empregos e aumentando a informalidade do trabalho. A recuperação econômica pós-pandemia 
                  oferece uma oportunidade única de "reconstruir melhor", criando mercados de trabalho 
                  mais inclusivos, resilientes e sustentáveis.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Situação Global</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">207 milhões</div>
                  <div className="text-sm text-muted-foreground">Pessoas desempregadas globalmente</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">73 milhões</div>
                  <div className="text-sm text-muted-foreground">Jovens desempregados no mundo</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">47%</div>
                  <div className="text-sm text-muted-foreground">Diferença salarial de gênero em alguns países</div>
                </div>
              </div>
            </div>

            {/* Solutions Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Estratégias para o Emprego Pleno</h2>
              <Card className="p-8 border-border">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">1. Políticas Macroeconômicas Favoráveis</h3>
                    <p className="text-muted-foreground">
                      Implementar políticas fiscais e monetárias que estimulem o crescimento econômico 
                      e a criação de empregos, mantendo a estabilidade econômica.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">2. Educação e Capacitação</h3>
                    <p className="text-muted-foreground">
                      Investir em sistemas educacionais de qualidade e programas de formação profissional 
                      que preparem as pessoas para as demandas do mercado de trabalho atual e futuro.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">3. Igualdade de Gênero</h3>
                    <p className="text-muted-foreground">
                      Eliminar barreiras que impedem a participação plena das mulheres no mercado de trabalho, 
                      incluindo discriminação salarial, assédio e falta de serviços de cuidado infantil.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">4. Apoio ao Empreendedorismo</h3>
                    <p className="text-muted-foreground">
                      Facilitar o acesso a financiamento, reduzir burocracia e oferecer suporte técnico 
                      para novos empreendedores, especialmente em setores inovadores e sustentáveis.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">5. Proteção Social</h3>
                    <p className="text-muted-foreground">
                      Estabelecer redes de segurança social que protejam os trabalhadores durante transições 
                      de carreira e períodos de desemprego, facilitando a reintegração ao mercado de trabalho.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Final Image */}
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                alt="Equipe celebrando sucesso"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpregoPleno;
