import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Package, Leaf, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-substrate-focus.jpg";

const Product = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <img 
                src={heroImage} 
                alt="Premium Cannabis Wachstumssubstrat" 
                className="rounded-lg shadow-elevated w-full"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Premium Qualität
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Cannabis Wachstumssubstrat
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Unser hochwertiges Substrat wurde speziell für den Anbau von Cannabis entwickelt und bietet die perfekte Balance aus Nährstoffen, Drainage und Luftzirkulation.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">Kompletter Lebenszyklus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">Bio-zertifiziert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">Laborgeprüft</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-fit">
                Jetzt bestellen
              </Button>
            </div>
          </div>
          
          {/* Quality Features */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Eigenschaften</h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Substrat-Qualität
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Premium-Mischung aus natürlichen Komponenten</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Optimale Wasser- und Luftdurchlässigkeit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Perfekte Struktur für Wurzelwachstum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Langzeitstabil und wiederverwendbar</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Nährstoffversorgung
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Ausgewogene NPK-Zusammensetzung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>pH-Wert optimal eingestellt (5.8-6.3)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Ausreichend für 4-6 Wochen ohne Düngung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Mikroorganismen-freundlich</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>
          
          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Produktmerkmale</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Perfekte Drainage",
                  description: "Verhindert Staunässe und fördert gesundes Wurzelwachstum durch optimale Wasserdurchlässigkeit"
                },
                {
                  title: "Langzeitnährstoffe",
                  description: "Versorgt Pflanzen über den gesamten Wachstumszyklus mit allen wichtigen Makro- und Mikronährstoffen"
                },
                {
                  title: "pH-Stabilität",
                  description: "Puffersystem hält den pH-Wert konstant im optimalen Bereich für maximale Nährstoffaufnahme"
                },
                {
                  title: "Biologisch abbaubar",
                  description: "Umweltfreundliche Komponenten aus nachhaltiger Produktion"
                },
                {
                  title: "Luftige Struktur",
                  description: "Hervorragende Belüftung der Wurzeln fördert Sauerstoffaufnahme und Mikrobenaktivität"
                },
                {
                  title: "Einfache Anwendung",
                  description: "Gebrauchsfertig - kein Mischen oder Vordüngen erforderlich"
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300">
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Usage Instructions */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Anwendungsempfehlung</h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Vorbereitung</h3>
                  <p className="text-muted-foreground text-sm">
                    Substrat vor Gebrauch leicht anfeuchten und auflockern. Töpfe zu 2/3 füllen.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Pflanzung</h3>
                  <p className="text-muted-foreground text-sm">
                    Samen oder Stecklinge einsetzen und mit Substrat bedecken. Gut angießen.
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Pflege</h3>
                  <p className="text-muted-foreground text-sm">
                    Regelmäßig gießen wenn oberste Schicht trocken ist. Keine zusätzliche Düngung für 4-6 Wochen nötig.
                  </p>
                </div>
              </div>
            </Card>
          </section>
          
          {/* CTA */}
          <section className="text-center">
            <Card className="p-12 bg-gradient-primary border-0">
              <BarChart3 className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Überzeugen Sie sich selbst
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Sehen Sie die beeindruckenden Ergebnisse in unseren dokumentierten Wachstumsberichten
              </p>
              <Button size="lg" variant="secondary">
                Zu den Wachstumsberichten
              </Button>
            </Card>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;
