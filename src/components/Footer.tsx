const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">ODS 8</div>
              <p className="text-sm text-muted-foreground">
                Promovendo trabalho decente e crescimento econômico sustentável para todos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a ODS 8</a></li>
                <li><a href="#metas" className="hover:text-primary transition-colors">Metas</a></li>
                <li><a href="#programas" className="hover:text-primary transition-colors">Programas</a></li>
                <li><a href="#impacto" className="hover:text-primary transition-colors">Impacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Relatórios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Estudos de caso</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/apoiadores" className="hover:text-primary transition-colors">Apoiadores</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Kinetic_Solutions_Incorporated.org.br</li>
                <li>+55 (11) 3013-7481</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ODS 8. Todos os direitos reservados. | Baseado nos Objetivos de Desenvolvimento Sustentável da ONU</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
