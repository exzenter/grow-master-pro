import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Package, Leaf, BarChart3, Truck, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productPackshot from "@/assets/product-packshot.png";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Product = () => {
  const [showBulkShipping, setShowBulkShipping] = useState(false);
  const lkwPrices = [{
    city: "München",
    price: "650€"
  }, {
    city: "Frankfurt",
    price: "500€"
  }, {
    city: "Hamburg",
    price: "1.250€"
  }, {
    city: "Köln",
    price: "900€"
  }, {
    city: "Berlin",
    price: "900€"
  }, {
    city: "Leipzig",
    price: "750€"
  }, {
    city: "Linz",
    price: "900€"
  }, {
    city: "Salzburg",
    price: "900€"
  }, {
    city: "Wien",
    price: "1.300€"
  }, {
    city: "Innsbruck",
    price: "950€"
  }, {
    city: "Bozen",
    price: "1.100€"
  }, {
    city: "Mailand",
    price: "1.600€"
  }, {
    city: "Turin",
    price: "1.800€"
  }, {
    city: "Rom",
    price: "2.500€"
  }, {
    city: "Metz",
    price: "1.000€"
  }, {
    city: "Straßburg",
    price: "750€"
  }, {
    city: "Prag",
    price: "800€"
  }, {
    city: "Pilsen",
    price: "600€"
  }, {
    city: "Karlsbad",
    price: "550€"
  }];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="flex justify-center items-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <img src={productPackshot} alt="Highland Hum - The Dope Mix 40L Sack" className="max-h-[500px] w-auto drop-shadow-2xl" />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30">
                  Premium Qualität
                </Badge>
                <Badge className="bg-accent/10 text-accent-foreground hover:bg-accent/20 border border-accent/30 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Launch: 01.02.2026
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Cannabis Wachstumssubstrat
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Unser hochwertiges Substrat wurde speziell für den Anbau von Cannabis entwickelt und bietet die perfekte Balance aus Nährstoffen, Drainage und Luftzirkulation.
              </p>
              
              {/* B2C Price */}
              <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Empfohlener Verkaufspreis (40L Sack)</p>
                <p className="text-3xl font-bold text-primary">19,99€ <span className="text-sm font-normal text-muted-foreground">zzgl. Versandkosten</span></p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Kompletter Lebenszyklus</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Bio-zertifiziert</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Laborgeprüft</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Link to="/kontakt">Jetzt anfragen & 10% Rabatt sichern</Link>
              </Button>
            </div>
          </div>

          {/* B2B Pricing Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">B2B Preise</h2>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Preisstaffel (40 Liter Säcke)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">54 Säcke pro Palette</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">1 Palette</p>
                  <p className="text-2xl font-bold text-primary">10,30€</p>
                  <p className="text-xs text-muted-foreground">pro Sack</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">4 Paletten</p>
                  <p className="text-2xl font-bold text-primary">8,60€</p>
                  <p className="text-xs text-muted-foreground">pro Sack</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-1">12 Paletten</p>
                  <p className="text-2xl font-bold text-primary">7,80€</p>
                  <p className="text-xs text-muted-foreground">pro Sack</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center border-2 border-primary/30">
                  <p className="text-sm text-muted-foreground mb-1">26 Paletten (LKW)</p>
                  <p className="text-2xl font-bold text-primary">6,20€</p>
                  <p className="text-xs text-muted-foreground">pro Sack</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Lieferkosten
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-1">Stückgutversand Innerdeutsch</p>
                  <p className="text-xl font-bold text-primary">120€ / Palette</p>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Ab Bestellung von mehr als 5 Paletten: Standortabhängig, da mit eigener Logistik kalkuliert werden kann.
                </p>

                {/* Expandable LKW Prices */}
                <Collapsible open={showBulkShipping} onOpenChange={setShowBulkShipping}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>LKW-Lieferpreise anzeigen (ab 1 Palette möglich)</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${showBulkShipping ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="p-4 bg-muted/30 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-4">
                        Komplette LKW-Ladung Lieferpreise (ab 1 Palette bis volle LKW-Ladung):
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {lkwPrices.map(item => (
                          <div key={item.city} className="p-2 bg-background rounded border border-border/50">
                            <p className="text-xs text-muted-foreground">{item.city}</p>
                            <p className="font-semibold text-primary">{item.price}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                        <p className="text-sm font-medium mb-2">Schweiz</p>
                        <p className="text-xs text-muted-foreground">
                          Pauschalpreise schwer möglich aufgrund variabler Mautkosten (ca. 2€/km auf manchen Strecken). 
                          Richtwert: 1.400€ - 2.500€ (ca. 4€/km)
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </Card>
          </section>
          
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
                      <span>Kein Nachdüngen für bis zu 6 Monate</span>
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
              {[{
                title: "Perfekte Drainage",
                description: "Verhindert Staunässe und fördert gesundes Wurzelwachstum durch optimale Wasserdurchlässigkeit"
              }, {
                title: "Kein Nachdüngen für 6 Monate",
                description: "Versorgt Pflanzen bis zu 6 Monate lang mit allen wichtigen Makro- und Mikronährstoffen - kein Nachdüngen nötig"
              }, {
                title: "pH-Stabilität",
                description: "Puffersystem hält den pH-Wert konstant im optimalen Bereich für maximale Nährstoffaufnahme"
              }, {
                title: "Biologisch abbaubar",
                description: "Umweltfreundliche Komponenten aus nachhaltiger Produktion"
              }, {
                title: "Luftige Struktur",
                description: "Hervorragende Belüftung der Wurzeln fördert Sauerstoffaufnahme und Mikrobenaktivität"
              }, {
                title: "Einfache Anwendung",
                description: "Gebrauchsfertig - kein Mischen oder Vordüngen erforderlich"
              }].map((feature, index) => (
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
                    Substrat vor Gebrauch leicht anfeuchten und auflockern. Töpfe zu 4/5 füllen.
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
                    Regelmäßig gießen wenn oberste Schicht trocken ist. Kein Nachdüngen für bis zu 6 Monate nötig.
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
              <Button asChild size="lg" variant="secondary">
                <Link to="/wachstumsberichte">Zu den Wachstumsberichten</Link>
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
