import { ArrowLeft, GraduationCap, Award, Briefcase, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const ProgramaGlobalEmprego = () => {
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
            <span className="text-primary font-semibold text-sm">ONU - ODS 8.6</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Programa Global de Emprego - OIT
            </h1>
            <p className="text-xl text-muted-foreground">
              Reduzindo a proporção de jovens sem emprego, educação ou formação através de capacitação profissional de qualidade
            </p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" 
            alt="Programa Global de Emprego"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Sobre o Programa
            </h2>
            <p className="text-muted-foreground mb-6">
              O Programa Global de Emprego da Organização Internacional do Trabalho (OIT) é uma iniciativa abrangente que busca reduzir substancialmente a proporção de jovens sem emprego, educação ou formação. Alinhado ao ODS 8.6, o programa oferece educação técnica e profissional de qualidade, focando nas competências necessárias para o mercado de trabalho do século XXI.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <BookOpen className="text-primary" />
              Estrutura do Programa
            </h2>
            <p className="text-muted-foreground mb-4">
              O programa de 12 meses é dividido em quatro módulos principais, cada um focado em desenvolver competências essenciais para a empregabilidade:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Módulo 1: Aprendizagem Técnica (3 meses)</h3>
                <p className="text-muted-foreground">
                  Capacitação em habilidades técnicas específicas baseadas nas demandas do mercado local, incluindo programação, manufatura avançada, tecnologias verdes e serviços especializados.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Módulo 2: Certificação Profissional (3 meses)</h3>
                <p className="text-muted-foreground">
                  Preparação para certificações reconhecidas internacionalmente em diversas áreas profissionais, aumentando a empregabilidade e mobilidade dos participantes.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Módulo 3: Competências Digitais (3 meses)</h3>
                <p className="text-muted-foreground">
                  Desenvolvimento de habilidades digitais essenciais, incluindo alfabetização digital, ferramentas de produtividade, análise de dados e comunicação online.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Módulo 4: Orientação de Carreira (3 meses)</h3>
                <p className="text-muted-foreground">
                  Mentoria individualizada, preparação para entrevistas, construção de networking profissional e estratégias de busca de emprego eficazes.
                </p>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
              alt="Trabalho em Equipe"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-primary" />
              Diferenciais do Programa
            </h2>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Foco em Empregabilidade:</strong> 85% dos graduados conseguem emprego formal dentro de 6 meses após a conclusão
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Parcerias com Empresas:</strong> Rede de mais de 5.000 empresas parceiras que oferecem estágios e vagas
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Certificação Internacional:</strong> Certificados reconhecidos pela OIT válidos em mais de 180 países
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Suporte Contínuo:</strong> Acompanhamento por 2 anos após a formação para garantir inserção sustentável no mercado
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <Briefcase className="text-primary" />
              Resultados e Impacto
            </h2>
            <p className="text-muted-foreground mb-4">
              Desde 2015, o Programa Global de Emprego já capacitou mais de 2 milhões de jovens em 150 países. Os dados mostram que:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-muted-foreground">78% dos participantes estavam desempregados ou em trabalhos informais antes do programa</li>
              <li className="text-muted-foreground">85% conseguiram emprego formal dentro de 6 meses após a conclusão</li>
              <li className="text-muted-foreground">Aumento médio de 150% na renda dos participantes após 1 ano</li>
              <li className="text-muted-foreground">92% de satisfação dos participantes com a qualidade da formação</li>
              <li className="text-muted-foreground">Redução de 35% na taxa de jovens NEET (nem emprego, nem educação, nem formação) nas regiões atendidas</li>
            </ul>

            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070" 
              alt="Sucesso Profissional"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Requisitos e Inscrição</h3>
              <p className="text-muted-foreground mb-4">
                O programa é destinado a jovens entre 16 e 29 anos que estejam desempregados ou em situação de subemprego. Não há requisitos educacionais mínimos, tornando o programa acessível a todos os perfis.
              </p>
              <Button className="w-full md:w-auto">Candidate-se ao Programa</Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProgramaGlobalEmprego;
