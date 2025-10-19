import { Badge } from "@/components/ui/badge";

const Goals = () => {
  const goals = [
    {
      number: "8.1",
      title: "Crescimento Econômico per Capita",
      description: "Sustentar o crescimento econômico per capita de acordo com as circunstâncias nacionais",
    },
    {
      number: "8.2",
      title: "Produtividade Econômica",
      description: "Atingir níveis mais elevados de produtividade através da diversificação, modernização e inovação",
    },
    {
      number: "8.3",
      title: "Empreendedorismo",
      description: "Promover políticas orientadas para o desenvolvimento que apoiem o empreendedorismo e criação de emprego",
    },
    {
      number: "8.5",
      title: "Emprego Pleno",
      description: "Alcançar emprego pleno e produtivo e trabalho decente para todas as mulheres e homens",
    },
    {
      number: "8.6",
      title: "Jovens Empregados",
      description: "Reduzir substancialmente a proporção de jovens sem emprego, educação ou formação",
    },
    {
      number: "8.8",
      title: "Direitos Trabalhistas",
      description: "Proteger os direitos do trabalho e promover ambientes de trabalho seguros para todos os trabalhadores",
    },
    {
      number: "8.9",
      title: "Turismo Sustentável",
      description: "Elaborar e implementar políticas para promover o turismo sustentável que cria empregos",
    },
    {
      number: "8.10",
      title: "Acesso a Serviços Bancários",
      description: "Fortalecer a capacidade das instituições financeiras nacionais para promover a inclusão financeira",
    },
  ];

  return (
    <section id="metas" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            METAS DA <span className="text-primary">ODS 8</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as principais metas estabelecidas pela ONU para alcançar 
            trabalho decente e crescimento econômico até 2030
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group"
            >
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Meta {goal.number}
              </Badge>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {goal.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
