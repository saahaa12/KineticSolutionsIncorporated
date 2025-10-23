import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TrabalhoDecente from "./pages/TrabalhoDecente";
import CrescimentoSustentavel from "./pages/CrescimentoSustentavel";
import EmpregoPleno from "./pages/EmpregoPleno";
import EmpreendedorismoSustentavel from "./pages/EmpreendedorismoSustentavel";
import ProgramaGlobalEmprego from "./pages/ProgramaGlobalEmprego";
import EconomiaVerde from "./pages/EconomiaVerde";
import EmpregoDecenteJovens from "./pages/EmpregoDecenteJovens";
import Apoiadores from "./pages/Apoiadores";
import Vagas from "./pages/Vagas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trabalho-decente" element={<TrabalhoDecente />} />
          <Route path="/crescimento-sustentavel" element={<CrescimentoSustentavel />} />
          <Route path="/emprego-pleno" element={<EmpregoPleno />} />
          <Route path="/empreendedorismo-sustentavel" element={<EmpreendedorismoSustentavel />} />
          <Route path="/programa-global-emprego" element={<ProgramaGlobalEmprego />} />
          <Route path="/economia-verde" element={<EconomiaVerde />} />
          <Route path="/emprego-decente-jovens" element={<EmpregoDecenteJovens />} />
          <Route path="/apoiadores" element={<Apoiadores />} />
          <Route path="/vagas" element={<Vagas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
