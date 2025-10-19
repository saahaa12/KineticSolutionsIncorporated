import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, GraduationCap, Building2, Users2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();
  
  const programs = [
    {
      icon: Lightbulb,
      title: "Programa de Empreendedorismo para o Desenvolvimento Sustentável",
      category: "ONU - ODS 8.3",
      duration: "Programa Contínuo",
      description: "Iniciativa da ONU que promove políticas orientadas para o desenvolvimento que apoiam atividades produtivas, criação de empregos dignos, empreendedorismo, criatividade e inovação",
      topics: ["Microcrédito e financiamento", "Formalização de negócios", "Inovação tecnológica", "Empreendedorismo social"],
      link: "/empreendedorismo-sustentavel",
    },
    {
      icon: GraduationCap,
      title: "Programa Global de Emprego - OIT",
      category: "ONU - ODS 8.6",
      duration: "Formação de 12 meses",
      description: "Programa da Organização Internacional do Trabalho focado em reduzir a proporção de jovens sem emprego, educação ou formação, promovendo educação técnica e profissional de qualidade",
      topics: ["Aprendizagem técnica", "Certificação profissional", "Competências digitais", "Orientação de carreira"],
      link: "/programa-global-emprego",
    },
    {
      icon: Building2,
      title: "Economia Verde e Trabalho Decente - PNUMA",
      category: "ONU - ODS 8.4",
      duration: "Programa de 24 meses",
      description: "Iniciativa do Programa das Nações Unidas para o Meio Ambiente que melhora a eficiência dos recursos na produção e consumo, dissociando crescimento econômico da degradação ambiental",
      topics: ["Produção sustentável", "Eficiência energética", "Economia de baixo carbono", "Empregos verdes"],
      link: "/economia-verde",
    },
    {
      icon: Users2,
      title: "Emprego Decente para Jovens - OIT",
      category: "ONU - ODS 8.5",
      duration: "Iniciativa Permanente",
      description: "Programa da OIT que alcança emprego pleno e produtivo e trabalho decente para todas as mulheres e homens, incluindo jovens e pessoas com deficiência, e remuneração igual para trabalho de igual valor",
      topics: ["Primeira oportunidade", "Equidade salarial", "Inclusão de PCDs", "Igualdade de gênero"],
      link: "/emprego-decente-jovens",
    },
  ];

  return (
    <section id="programas" className="relative py-24 bg-card overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/421880857.sd.mp4?s=9a8b7c6d5e4f3g2h1i0j9k8l7m6n5o4p&profile_id=165" type="video/mp4" />
        </video>
      </div>
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSOS <span className="text-primary">PROGRAMAS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as iniciativas que estão transformando o futuro do trabalho 
            e impulsionando o crescimento econômico sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="p-8 bg-background border-border hover:border-primary transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-primary font-semibold mb-1">{program.category}</div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <div className="text-sm text-muted-foreground">{program.duration}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {program.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  onClick={() => navigate(program.link)}
                >
                  Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
