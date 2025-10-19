import { ArrowLeft, Users, Heart, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const EmpregoDecenteJovens = () => {
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
      
      <article className="container mx-auto px-4 py-24">

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm">ONU - ODS 8.5</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Emprego Decente para Jovens - OIT
            </h1>
            <p className="text-xl text-muted-foreground">
              Alcançando emprego pleno e produtivo com trabalho decente para todos, incluindo jovens e pessoas com deficiência
            </p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070" 
            alt="Emprego Decente para Jovens"
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-primary" />
              A Crise do Emprego Juvenil
            </h2>
            <p className="text-muted-foreground mb-6">
              A Organização Internacional do Trabalho (OIT) lançou a iniciativa Emprego Decente para Jovens em resposta a uma crise global: mais de 75 milhões de jovens estão desempregados, e outros 125 milhões trabalham em condições precárias. Alinhado ao ODS 8.5, este programa busca alcançar emprego pleno e produtivo e trabalho decente para todas as mulheres e homens, incluindo jovens e pessoas com deficiência, garantindo remuneração igual para trabalho de igual valor.
            </p>

            <div className="bg-card border-2 border-primary/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold mb-4">O que é Trabalho Decente?</h3>
              <p className="text-muted-foreground mb-4">
                Trabalho decente significa oportunidades de emprego produtivo que geram renda justa, segurança no local de trabalho e proteção social. Envolve melhores perspectivas de desenvolvimento pessoal e integração social, liberdade de expressar preocupações, organizar-se e participar das decisões que afetam suas vidas, além de igualdade de oportunidades e tratamento para todos.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <Heart className="text-primary" />
              Eixos de Atuação do Programa
            </h2>

            <div className="space-y-6 my-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">1. Primeira Oportunidade</h3>
                <p className="text-muted-foreground mb-3">
                  Muitos jovens enfrentam o paradoxo: "preciso de experiência para conseguir emprego, mas preciso de emprego para ter experiência". O programa quebra este ciclo através de:
                </p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Programas de estágio remunerado em empresas parceiras</li>
                  <li className="text-muted-foreground">• Aprendizagem profissional com tutoria especializada</li>
                  <li className="text-muted-foreground">• Jovem Aprendiz com garantia de direitos trabalhistas</li>
                  <li className="text-muted-foreground">• Parcerias com mais de 10.000 empresas globalmente</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">2. Equidade Salarial</h3>
                <p className="text-muted-foreground mb-3">
                  Combate à discriminação salarial com foco em garantir remuneração igual para trabalho de igual valor, independente de gênero, raça, idade ou outras características:
                </p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Auditorias salariais em empresas parceiras</li>
                  <li className="text-muted-foreground">• Certificação de Equidade Salarial OIT</li>
                  <li className="text-muted-foreground">• Transparência salarial e fim do gap de gênero</li>
                  <li className="text-muted-foreground">• Mediação em casos de discriminação salarial</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">3. Inclusão de Pessoas com Deficiência</h3>
                <p className="text-muted-foreground mb-3">
                  Apenas 27% das pessoas com deficiência em idade ativa estão empregadas. O programa trabalha para reverter isso através de:
                </p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Adaptações de ambientes de trabalho e tecnologias assistivas</li>
                  <li className="text-muted-foreground">• Capacitação de empresas em contratação inclusiva</li>
                  <li className="text-muted-foreground">• Programas de mentoria para profissionais PCDs</li>
                  <li className="text-muted-foreground">• Cumprimento e ampliação de cotas de inclusão</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">4. Igualdade de Gênero</h3>
                <p className="text-muted-foreground mb-3">
                  Mulheres jovens enfrentam barreiras adicionais no mercado de trabalho. O programa aborda:
                </p>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Combate ao assédio e discriminação no ambiente de trabalho</li>
                  <li className="text-muted-foreground">• Apoio à maternidade e paternidade com licenças adequadas</li>
                  <li className="text-muted-foreground">• Incentivo a mulheres em áreas STEM e liderança</li>
                  <li className="text-muted-foreground">• Flexibilidade de jornada e trabalho remoto</li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" 
              alt="Diversidade no Trabalho"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <Shield className="text-primary" />
              Direitos e Proteções Garantidas
            </h2>
            <p className="text-muted-foreground mb-4">
              Todos os participantes do programa têm acesso a empregos que garantem:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Salário Justo:</strong> Remuneração acima do salário mínimo nacional e compatível com o mercado
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Jornada Regulamentada:</strong> Máximo de 44 horas semanais com controle de horas extras
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Segurança e Saúde:</strong> Ambientes de trabalho seguros com equipamentos de proteção
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Benefícios Sociais:</strong> Acesso a previdência, saúde ocupacional e seguro-desemprego
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Desenvolvimento Profissional:</strong> Oportunidades de crescimento e capacitação contínua
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Liberdade Sindical:</strong> Direito de organização e negociação coletiva
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2">
              <TrendingUp className="text-primary" />
              Resultados Transformadores
            </h2>
            <p className="text-muted-foreground mb-4">
              Desde seu lançamento em 2016, o programa já impactou positivamente a vida de mais de 3 milhões de jovens em 135 países:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">3M+</div>
                <div className="text-sm text-muted-foreground">Jovens Empregados</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">82%</div>
                <div className="text-sm text-muted-foreground">Taxa de Retenção após 1 ano</div>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Aumento Médio Salarial</div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
              alt="Sucesso Profissional"
              className="w-full h-80 object-cover rounded-lg my-8"
            />

            <h2 className="text-2xl font-bold mb-4 mt-8">Histórias de Transformação</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Maria Silva, 23 anos - Brasil</h4>
                <p className="text-muted-foreground italic mb-2">
                  "Estava desempregada há 2 anos após concluir o ensino médio. Através do programa, consegui um estágio em TI que se transformou em emprego efetivo. Hoje sou desenvolvedora júnior com salário de R$ 4.500 e plano de carreira definido."
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">João Santos, 28 anos - Portugal</h4>
                <p className="text-muted-foreground italic mb-2">
                  "Como pessoa com deficiência visual, achava impossível trabalhar na área que estudei. O programa não só me capacitou com tecnologias assistivas, mas também preparou a empresa para me receber. Hoje trabalho como analista financeiro e sou tratado com igualdade."
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">Ana Costa, 25 anos - Moçambique</h4>
                <p className="text-muted-foreground italic mb-2">
                  "Enfrentava discriminação salarial ganhando 40% menos que meus colegas homens. O programa mediou minha situação e garantiu equidade salarial. Além disso, fui promovida a líder de equipe."
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Junte-se ao Movimento por Trabalho Decente</h3>
              <p className="text-muted-foreground mb-4">
                Se você é um jovem em busca de oportunidades de emprego digno, ou uma empresa comprometida com práticas trabalhistas justas, o programa está aberto para você. Juntos, construímos um futuro onde todos têm acesso a trabalho decente.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button className="flex-1">Sou Jovem - Quero Participar</Button>
                <Button variant="outline" className="flex-1">Sou Empresa - Quero Contratar</Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default EmpregoDecenteJovens;
