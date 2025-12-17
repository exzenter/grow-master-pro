import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sprout, Droplets, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cannabis.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Wachstums-substrat für Cannabis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Alles was Ihre Pflanzen für optimales Wachstum benötigen - von der Keimung bis zur Ernte
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produkt">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Produkt entdecken
                </Button>
              </Link>
              <Link to="/wachstumsberichte">
                <Button size="lg" variant="outline">
                  Wachstumsberichte ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Warum unser Substrat?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-elevated transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sprout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">6 Monate ohne Nachdüngen</h3>
              <p className="text-muted-foreground">
                Perfekt abgestimmte Langzeitnährstoffe versorgen Ihre Pflanzen bis zu 6 Monate
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-elevated transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfekte Inhaltsstoffe</h3>
              <p className="text-muted-foreground">
                Unsere torfbasierte Rezeptur übertrifft herkömmliche Erden bei weitem – maximale Nährstoffversorgung für Ihre Pflanzen
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-elevated transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Höchste Qualität</h3>
              <p className="text-muted-foreground">
                Laborgeprüft und frei von Schädlingen, Krankheitserregern und Schwermetallen
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ein Substrat für den gesamten Lebenszyklus
              </h2>
              <p className="text-muted-foreground mb-8">
                Unser speziell entwickeltes Substrat bietet alle notwendigen Nährstoffe und die ideale Struktur für gesundes Pflanzenwachstum vom Samen bis zur Ernte.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Optimale pH-Wert-Stabilität',
                  'Hervorragende Wasserspeicherung',
                  'Perfekte Belüftung der Wurzeln',
                  'Nachhaltige Bio-Komponenten',
                  'Einfache Handhabung',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Cannabis Pflanzen in Premium Substrat" 
                className="rounded-lg shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Bereit für optimales Pflanzenwachstum?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität unseres Substrats
          </p>
          <Link to="/produkt">
            <Button size="lg" variant="secondary" className="shadow-elevated">
              Jetzt mehr erfahren
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
