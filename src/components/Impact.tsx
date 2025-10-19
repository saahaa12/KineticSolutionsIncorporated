const Impact = () => {
  const stats = [
    { value: "470M+", label: "Empregos criados até 2030", sublabel: "Meta global" },
    { value: "5%", label: "Crescimento PIB anual", sublabel: "Países em desenvolvimento" },
    { value: "64%", label: "Trabalho informal", sublabel: "Precisa ser formalizado" },
    { value: "267M", label: "Jovens sem emprego", sublabel: "Fora da educação ou formação" },
  ];

  return (
    <section id="impacto" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O <span className="text-primary">IMPACTO</span> GLOBAL
          </h2>
          <p className="text-lg text-muted-foreground">
            Números que mostram a urgência e a importância da ODS 8 para o futuro do trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-card border border-primary/20 rounded-lg p-8 md:p-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Junte-se ao movimento por um <span className="text-primary">futuro mais justo</span>
            </h3>
            <p className="text-muted-foreground">
              A transformação começa com ação. Descubra como sua organização pode contribuir 
              para o alcance da ODS 8 e criar impacto positivo na sociedade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
