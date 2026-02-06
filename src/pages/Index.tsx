import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sprout, Droplets, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cannabis.jpg";
import productPackshot from "@/assets/product-packshot.png";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
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
            <div className="hidden lg:flex justify-center">
              <img 
                src={productPackshot} 
                alt="Highland Hum - The Dope Mix 40L Sack" 
                className="max-h-[500px] w-auto drop-shadow-2xl"
              />
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
            
            <div className="relative flex justify-center items-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <img 
                src={productPackshot} 
                alt="Highland Hum - The Dope Mix 40L Sack" 
                className="max-h-[450px] w-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* USP Banner */}
      <section className="py-10 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-y-4 border-primary/40">
        <div className="container mx-auto px-4">
          <Link 
            to="/kontakt" 
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center group"
          >
            <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
              ✨ EXKLUSIV ✨
            </span>
            <span className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
              Bis zu <span className="text-2xl md:text-3xl font-bold text-primary">10% Rabatt</span> bei Bestellung über uns
            </span>
            <span className="text-muted-foreground text-sm md:text-base">– persönliche Beratung inklusive</span>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Next Page Navigation */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/produkt" 
            className="group flex items-center justify-between p-8 rounded-xl bg-background/10 backdrop-blur-sm hover:bg-background/20 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Bereit für optimales Pflanzenwachstum?</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground group-hover:scale-[1.02] transition-transform origin-left">Jetzt unser Produkt entdecken</h3>
              <p className="text-primary-foreground/80 mt-2">Überzeugen Sie sich selbst von der Qualität unseres Premium-Substrats</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-4">
              <svg className="w-7 h-7 text-primary-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
