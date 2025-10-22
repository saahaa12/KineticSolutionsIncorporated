import { useEffect } from "react";
import { ArrowLeft, Leaf, Zap, Recycle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const EconomiaVerde = () => {
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
      
      <article className="container mx-auto px-4 py-24">

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm">ONU - ODS 8.4</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Economia Verde e Trabalho Decente - PNUMA
            </h1>
            <p className="text-xl text-muted-foreground">
              Dissociando crescimento econômico da degradação ambiental através da eficiência de recursos e economia sustentável
            </p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070" 
            alt="Economia Verde"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Leaf className="text-primary" />
              O Conceito de Economia Verde
            </h2>
            <p className="text-muted-foreground mb-6">
              A iniciativa Economia Verde e Trabalho Decente do Programa das Nações Unidas para o Meio Ambiente (PNUMA) representa uma transformação fundamental na forma como produzimos e consumimos. Alinhada ao ODS 8.4, a iniciativa busca melhorar progressivamente a eficiência dos recursos globais na produção e no consumo, dissociando o crescimento econômico da degradação ambiental.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <Building2 className="text-primary" />
              Pilares do Programa
            </h2>
            
            <div className="space-y-6 my-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Recycle className="text-primary" />
                  Produção Sustentável
                </h3>
                <p className="text-muted-foreground mb-3">
                  Implementação de práticas de manufatura e produção que minimizam desperdícios, reduzem emissões e maximizam a eficiência dos recursos naturais. O programa trabalha diretamente com indústrias para transformar seus processos produtivos.
                </p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Otimização de cadeias de suprimento</li>
                  <li className="text-muted-foreground">• Redução de resíduos industriais em até 70%</li>
                  <li className="text-muted-foreground">• Implementação de sistemas de gestão ambiental ISO 14001</li>
                  <li className="text-muted-foreground">• Uso de materiais reciclados e biodegradáveis</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="text-primary" />
                  Eficiência Energética
                </h3>
                <p className="text-muted-foreground mb-3">
                  Transição para fontes de energia renovável e implementação de tecnologias de eficiência energética que reduzem custos operacionais e pegada de carbono das empresas.
                </p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Instalação de sistemas de energia solar e eólica</li>
                  <li className="text-muted-foreground">• Retrofitting de edifícios para eficiência energética</li>
                  <li className="text-muted-foreground">• Implementação de sistemas de gestão de energia</li>
                  <li className="text-muted-foreground">• Redução média de 40% no consumo de energia</li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074" 
              alt="Energia Sustentável"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <h2 className="text-2xl font-bold mb-4 mt-8">Economia de Baixo Carbono</h2>
            <p className="text-muted-foreground mb-4">
              A transição para uma economia de baixo carbono não é apenas uma necessidade ambiental, mas uma oportunidade econômica. O programa apoia empresas na implementação de estratégias de descarbonização que incluem:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Inventário de Emissões:</strong> Mapeamento completo das emissões de gases de efeito estufa (escopo 1, 2 e 3)
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Metas Net-Zero:</strong> Estabelecimento de metas científicas de redução de emissões alinhadas ao Acordo de Paris
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Compensação de Carbono:</strong> Investimento em projetos de reflorestamento e energia renovável
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Relatórios ESG:</strong> Implementação de frameworks de reporte como GRI, SASB e TCFD
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Empregos Verdes: O Futuro do Trabalho</h2>
            <p className="text-muted-foreground mb-4">
              Um dos aspectos mais transformadores do programa é a criação de empregos verdes - trabalhos decentes que contribuem para preservar ou restaurar o meio ambiente. Até 2030, estima-se que a transição para uma economia verde criará 24 milhões de novos empregos globalmente.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Setores em Crescimento</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Energia renovável</li>
                  <li className="text-muted-foreground">• Construção sustentável</li>
                  <li className="text-muted-foreground">• Agricultura orgânica</li>
                  <li className="text-muted-foreground">• Gestão de resíduos</li>
                  <li className="text-muted-foreground">• Mobilidade elétrica</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Capacitação Oferecida</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Técnico em energia solar</li>
                  <li className="text-muted-foreground">• Especialista em ESG</li>
                  <li className="text-muted-foreground">• Consultor de eficiência</li>
                  <li className="text-muted-foreground">• Gestor de economia circular</li>
                  <li className="text-muted-foreground">• Auditor ambiental</li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072" 
              alt="Empregos Verdes"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <h2 className="text-2xl font-bold mb-4 mt-8">Casos de Sucesso</h2>
            <p className="text-muted-foreground mb-4">
              O programa já transformou milhares de empresas e comunidades ao redor do mundo:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Brasil - Cooperativa de Reciclagem</h4>
                <p className="text-muted-foreground">
                  Uma cooperativa no Rio de Janeiro aumentou sua capacidade de processamento em 300% e criou 450 empregos verdes, processando 15 mil toneladas de resíduos recicláveis por mês.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Índia - Parque Solar Comunitário</h4>
                <p className="text-muted-foreground">
                  Instalação de painéis solares em 200 aldeias rurais, criando 2.000 empregos na instalação e manutenção, reduzindo custos de energia em 60%.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Quênia - Agricultura Sustentável</h4>
                <p className="text-muted-foreground">
                  Transição de 5.000 agricultores para práticas orgânicas, aumentando produtividade em 40% e acessando mercados de exportação premium.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Participe da Transformação Verde</h3>
              <p className="text-muted-foreground mb-4">
                O programa está aberto a empresas de todos os tamanhos, cooperativas, governos locais e organizações da sociedade civil. Juntos, podemos construir uma economia que prospera sem destruir nosso planeta.
              </p>
              <Button className="w-full md:w-auto">Inscreva sua Organização</Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default EconomiaVerde;
