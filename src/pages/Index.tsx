import { useState } from "react";
import LoadingSplash from "@/components/LoadingSplash";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Goals from "@/components/Goals";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Supporters from "@/components/Supporters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingSplash onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <Hero />
      <About />
      <Goals />
      <Programs />
      <Impact />
      <Supporters />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
