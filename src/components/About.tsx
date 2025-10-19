import { Briefcase, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  const pillars = [
    {
      icon: Briefcase,
      title: "Trabalho Decente",
      description: "Promover oportunidades de trabalho digno, seguro e bem remunerado para todos",
      link: "/trabalho-decente"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Desenvolver economia inclusiva com crescimento econômico sustentável",
      link: "/crescimento-sustentavel"
    },
    {
      icon: Users,
      title: "Emprego Pleno",
      description: "Garantir emprego pleno e produtivo para mulheres e homens, incluindo jovens",
      link: "/emprego-pleno"
    },
  ];

  return (
    <section id="sobre" className="relative py-24 bg-card overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494908175.sd.mp4?s=a1c2b3d4e5f6g7h8i9j0k1l2m3n4o5p6&profile_id=165" type="video/mp4" />
        </video>
      </div>
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O QUE É A <span className="text-primary">ODS 8</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O Objetivo de Desenvolvimento Sustentável 8 busca promover o crescimento econômico 
            sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente 
            para todas e todos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-background border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(pillar.link)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                  <p className="text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Leia o artigo completo →
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
