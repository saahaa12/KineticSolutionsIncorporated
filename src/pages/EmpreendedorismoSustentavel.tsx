import { ArrowLeft, Target, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const EmpreendedorismoSustentavel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/#hero-section")}
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
            <span className="text-primary font-semibold text-sm">ONU - ODS 8.3</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Programa de Empreendedorismo para o Desenvolvimento Sustentável
            </h1>
            <p className="text-xl text-muted-foreground">
              Promovendo políticas de desenvolvimento que apoiam atividades produtivas, criação de empregos dignos e inovação sustentável
            </p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" 
            alt="Empreendedorismo Sustentável"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="text-primary" />
              Visão Geral do Programa
            </h2>
            <p className="text-muted-foreground mb-6">
              O Programa de Empreendedorismo para o Desenvolvimento Sustentável é uma iniciativa da ONU alinhada ao ODS 8.3, que visa promover políticas orientadas para o desenvolvimento. O programa apoia atividades produtivas, criação de empregos dignos, empreendedorismo, criatividade e inovação, além de encorajar a formalização e crescimento das micro, pequenas e médias empresas.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <TrendingUp className="text-primary" />
              Objetivos Principais
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Microcrédito e Financiamento:</strong> Facilitar o acesso a recursos financeiros para empreendedores em estágios iniciais, especialmente em comunidades vulneráveis
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Formalização de Negócios:</strong> Apoiar a transição de negócios informais para formais, garantindo direitos trabalhistas e acesso a mercados
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Inovação Tecnológica:</strong> Incentivar o uso de tecnologias sustentáveis e digitais para aumentar a produtividade e competitividade
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Empreendedorismo Social:</strong> Desenvolver negócios que geram impacto social positivo enquanto mantêm viabilidade econômica
              </li>
            </ul>

            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" 
              alt="Planejamento Estratégico"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-primary" />
              Metodologia e Implementação
            </h2>
            <p className="text-muted-foreground mb-4">
              O programa utiliza uma abordagem integrada que combina capacitação, mentoria, acesso a recursos e networking. Os participantes passam por módulos de formação que incluem:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-muted-foreground">Desenvolvimento de plano de negócios sustentável</li>
              <li className="text-muted-foreground">Gestão financeira e contábil básica</li>
              <li className="text-muted-foreground">Marketing digital e estratégias de vendas</li>
              <li className="text-muted-foreground">Práticas de economia circular e ESG</li>
              <li className="text-muted-foreground">Networking com investidores e aceleradoras</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <Globe className="text-primary" />
              Impacto Global
            </h2>
            <p className="text-muted-foreground mb-4">
              Desde sua implementação, o programa já apoiou mais de 500.000 empreendedores em 120 países, gerando milhões de empregos dignos e contribuindo significativamente para o crescimento econômico inclusivo e sustentável. As micro, pequenas e médias empresas apoiadas pelo programa demonstram taxas de sobrevivência 40% superiores à média nacional em seus respectivos países.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070" 
              alt="Impacto Global"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Como Participar</h3>
              <p className="text-muted-foreground mb-4">
                O programa está aberto a empreendedores de todas as idades e backgrounds. Para se candidatar, é necessário ter uma ideia de negócio alinhada aos princípios de sustentabilidade e impacto social positivo.
              </p>
              <Button className="w-full md:w-auto">Inscreva-se Agora</Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default EmpreendedorismoSustentavel;
