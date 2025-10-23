import { useEffect, useState, useRef } from "react";
import { ArrowLeft, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Vagas = () => {
  const navigate = useNavigate();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-46.6333, -23.5505], // São Paulo
      zoom: 11
    });

    // Locais com vagas de emprego
    const jobLocations = [
      { name: "Tech Company SP", coords: [-46.6333, -23.5505], vagas: 15, area: "Tecnologia" },
      { name: "Finance Corp", coords: [-46.6520, -23.5475], vagas: 8, area: "Finanças" },
      { name: "Startup Hub", coords: [-46.6400, -23.5600], vagas: 12, area: "Inovação" },
      { name: "Marketing Agency", coords: [-46.6200, -23.5400], vagas: 6, area: "Marketing" },
      { name: "Retail Group", coords: [-46.6450, -23.5550], vagas: 20, area: "Varejo" },
    ];

    jobLocations.forEach(location => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-2">
          <h3 class="font-bold text-sm">${location.name}</h3>
          <p class="text-xs">${location.area}</p>
          <p class="text-xs font-semibold text-primary">${location.vagas} vagas disponíveis</p>
        </div>`
      );

      new mapboxgl.Marker({ color: '#0EA5E9' })
        .setLngLat(location.coords as [number, number])
        .setPopup(popup)
        .addTo(map.current!);
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const vagas = [
    {
      titulo: "Desenvolvedor Full Stack",
      empresa: "Tech Innovations",
      localizacao: "São Paulo, SP",
      tipo: "CLT",
      descricao: "Desenvolvimento de aplicações web com React e Node.js",
      linkedinUrl: "https://www.linkedin.com/jobs/",
      infojobsUrl: "https://www.infojobs.com.br/"
    },
    {
      titulo: "Analista de Marketing Digital",
      empresa: "Marketing Pro",
      localizacao: "Rio de Janeiro, RJ",
      tipo: "PJ",
      descricao: "Gestão de campanhas digitais e redes sociais",
      linkedinUrl: "https://www.linkedin.com/jobs/",
      infojobsUrl: "https://www.infojobs.com.br/"
    },
    {
      titulo: "Gerente de Projetos",
      empresa: "Consultoria Excellence",
      localizacao: "Belo Horizonte, MG",
      tipo: "CLT",
      descricao: "Coordenação de projetos de transformação digital",
      linkedinUrl: "https://www.linkedin.com/jobs/",
      infojobsUrl: "https://www.infojobs.com.br/"
    },
    {
      titulo: "Designer UX/UI",
      empresa: "Creative Studios",
      localizacao: "Curitiba, PR",
      tipo: "CLT",
      descricao: "Criação de interfaces e experiências digitais",
      linkedinUrl: "https://www.linkedin.com/jobs/",
      infojobsUrl: "https://www.infojobs.com.br/"
    },
    {
      titulo: "Analista de Dados",
      empresa: "Data Insights",
      localizacao: "Porto Alegre, RS",
      tipo: "CLT",
      descricao: "Análise e visualização de dados empresariais",
      linkedinUrl: "https://www.linkedin.com/jobs/",
      infojobsUrl: "https://www.infojobs.com.br/"
    },
    {
      titulo: "Engenheiro de Software",
      empresa: "Software Solutions",
      localizacao: "Brasília, DF",
      tipo: "PJ",
      descricao: "Desenvolvimento de sistemas escaláveis em cloud",
      linkedinUrl: "https://www.linkedin.com/jobs/",
      infojobsUrl: "https://www.infojobs.com.br/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Oportunidades de Emprego
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore vagas disponíveis no mapa e em plataformas especializadas
          </p>
        </div>

        <Tabs defaultValue="mapa" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="mapa">
              <MapPin className="mr-2 h-4 w-4" />
              Mapa de Vagas
            </TabsTrigger>
            <TabsTrigger value="lista">
              <Briefcase className="mr-2 h-4 w-4" />
              Vagas Disponíveis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mapa" className="space-y-4">
            {showTokenInput ? (
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Configure o Mapa</h3>
                <p className="text-muted-foreground mb-4">
                  Para visualizar o mapa, insira sua chave de API do Mapbox.
                  Você pode obter uma gratuitamente em{" "}
                  <a 
                    href="https://account.mapbox.com/access-tokens/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Cole sua chave de API do Mapbox aqui"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => setShowTokenInput(false)}
                    disabled={!mapboxToken}
                  >
                    Ativar Mapa
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border">
                <div ref={mapContainer} className="absolute inset-0" />
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Locais com Vagas</h4>
                    <p className="text-sm text-muted-foreground">
                      Clique nos marcadores no mapa para ver detalhes das empresas e quantidade de vagas
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Navegue pelo Mapa</h4>
                    <p className="text-sm text-muted-foreground">
                      Use os controles para dar zoom e explorar diferentes regiões
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lista" className="space-y-4">
            <div className="grid gap-4">
              {vagas.map((vaga, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{vaga.titulo}</h3>
                      <p className="text-muted-foreground">{vaga.empresa}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {vaga.tipo}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {vaga.localizacao}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{vaga.descricao}</p>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(vaga.linkedinUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver no LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(vaga.infojobsUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver no InfoJobs
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-2">Busque mais oportunidades</h3>
              <p className="text-muted-foreground mb-4">
                Explore milhares de vagas em plataformas especializadas
              </p>
              <div className="flex gap-3">
                <Button onClick={() => window.open('https://www.linkedin.com/jobs/', '_blank')}>
                  Acessar LinkedIn Jobs
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://www.infojobs.com.br/', '_blank')}
                >
                  Acessar InfoJobs
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Vagas;
