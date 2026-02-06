import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Package, Leaf, BarChart3, Truck, Calendar, ChevronDown, FileText, Percent, Gift } from "lucide-react";
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
                  Launch: 02.2026
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Cannabis Wachstumssubstrat
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Einfach einpflanzen und wachsen lassen – unsere durchdachte Nährstoffkombination versorgt Ihre Pflanze vom ersten Tag bis zur Ernte. Kein Nachdüngen, kein Stress.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                <span className="font-medium text-foreground">Anfänger</span> genießen maximale Erträge ohne Vorkenntnisse. <span className="font-medium text-foreground">Profis</span> erhalten eine hervorragende Grundlage, die bei Bedarf individuell ergänzt werden kann.
              </p>
              
              {/* B2C Price */}
              <div className="mb-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Empfohlener Verkaufspreis (40L Sack)</p>
                <p className="text-3xl font-bold text-primary">24,99€ <span className="text-sm font-normal text-muted-foreground">zzgl. Versandkosten</span></p>
              </div>
              
              {/* Discount USP Banner */}
              <div className="mb-6 p-4 bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 rounded-xl border-2 border-primary/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  EXKLUSIV
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/20 rounded-full flex-shrink-0">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg flex items-center gap-2">
                      <Percent className="h-5 w-5 text-primary" />
                      Bis zu 10% Rabatt sichern!
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Bei jeder Bestellung über mich – je nach Bestellmenge. Persönliche Beratung vom Experten inklusive.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Rundum-Versorgung</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Kein Nachdüngen nötig</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Plug & Play</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                <Link to="/kontakt" className="flex items-center gap-2">
                  <Gift className="h-5 w-5 group-hover:animate-pulse" />
                  Jetzt anfragen & bis zu 10% sparen
                </Link>
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
            <h2 className="text-3xl font-bold mb-4 text-center">Produktmerkmale</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Für Anfänger: Einfach einpflanzen und entspannen. Für Profis: Die perfekte Basis, die bei Bedarf individuell ergänzt werden kann.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                title: "Rundum-sorglos-Paket",
                description: "Die durchdachte Nährstoffkombination versorgt Ihre Pflanze automatisch – vom Keimling bis zur Ernte, ohne Ihr Zutun"
              }, {
                title: "Kein Nachdüngen nötig",
                description: "Bis zu 6 Monate optimale Versorgung. Wer möchte, kann natürlich zusätzlich düngen – muss aber nicht"
              }, {
                title: "Perfekte Drainage",
                description: "Verhindert Staunässe und fördert gesundes Wurzelwachstum durch optimale Wasserdurchlässigkeit"
              }, {
                title: "pH-Stabilität",
                description: "Puffersystem hält den pH-Wert konstant im optimalen Bereich – kein Messen, kein Korrigieren"
              }, {
                title: "Anfängerfreundlich",
                description: "Kein Fachwissen erforderlich. Maximale Erträge ohne Bücher zu wälzen oder Dosierungen zu berechnen"
              }, {
                title: "Profi-Grundlage",
                description: "Hervorragender Ausgangspunkt für erfahrene Grower, die ihre eigenen Ergänzungen hinzufügen möchten"
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
          
          {/* Why Order Through Us */}
          <section className="mb-20">
            <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <h2 className="text-2xl font-bold mb-6 text-center">Warum über uns bestellen?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Persönliche Beratung vom Experten</h3>
                    <p className="text-sm text-muted-foreground">
                      Bei Fragen zur Anwendung, Dosierung oder Pflege bin ich Ihr direkter Ansprechpartner. 
                      Da ich das Produkt seit der Entwicklungsphase begleite und selbst ausgiebig getestet habe, 
                      kann ich Ihnen aus erster Hand weiterhelfen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Bis zu 10% Rabatt sichern</h3>
                    <p className="text-sm text-muted-foreground">
                      Als direkter Partner von NeulandHum kann ich Ihnen exklusive Konditionen anbieten – 
                      sowohl für Privatkunden als auch für Händler und Gewerbetreibende.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
                </Button>
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
          
          {/* Manufacturer Comment */}
          <section className="mt-16 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Ein Kommentar vom Hersteller</h3>
                  <p className="text-sm text-muted-foreground">NeulandHum GmbH</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed space-y-4 italic border-l-4 border-primary/30 pl-6">
                <p>
                  Ich wollte eine Erde entwickeln, die es jedem ermöglicht Cannabis zuhause anzubauen. Einfach und trotzdem mit maximalen Erträgen. Da wir seit Jahrzehnten viele professionelle Gartenbaubetriebe beliefern, wussten wir genau worauf es ankommt. Optimale Nährstoffversorgung, beste Bedingungen für eine gute Bewurzlung, und einem idealen Wasserhaushalt bestehend aus einem hervorragend Wasserspeicher in Kombination mit einer ausreichenden Drainage um Staunässe zu vermeiden. Und das alles mit möglichst keinem Eintrag von Schädlingen in die Kultur.
                </p>
                <p>
                  Da sich der Privatverbraucher oft nicht mit Düngern und der dazugehörigen Dosierung auskennt, war es klar, dass dies die Erde selbst liefern muss. Da bei einer solchen Kurzzeitkultur wie Cannabis alles auf den Punkt passen muss, um am Ende das optimale Ergebniss und Ernte zu erzielen. Zusammen mit unserem QM Team haben wir ein Düngerkonzept entwickelt was der Cannabispflanze zu jederzeit die nötigen Nährstoffe zur Verfügung stellt.
                </p>
                <p>
                  Das Besondere, egal in welchem Stadium die Pflanze ist, sie wird optimal versorgt. Das ermöglicht uns eine Kombination aus Düngern die gleichzeitig eine optimale Nährstoffverfügbarkeit als auch die optimale Menge an Nährstoffen zur Verfügung stellt. Und das Ganze temperaturunabhängig, da wir keine konventionellen Landgzeitdünger verwenden die stark auf Hitze reagieren. Pilzkulturen zur Stärkung der Wurzeln und Widerstandsfähigkeit vor Krankheiten sind natürlich auch dabei. Somit wird auch sichergestellt, dass wir den Salzgehalt in der Erde nicht zu stark erhöhen. Somit fühlen sich auch Stecklinge in der Erde pudelwohl.
                </p>
                <p className="font-semibold not-italic text-foreground">
                  Einfach gesagt, ein Produkt entwickelt mit höchsten Qualitätsstandards für den Gartenbau, welches dem privaten Hobbygärtner mit minimalem Aufwand einen maximalen Ertrag sichert ohne Bücher über den Anbau von Cannabis zu wälzen. Plug in Play in seiner reinsten Form.
                </p>
              </blockquote>
            </Card>
          </section>

          {/* Technische Deklaration */}
          <section className="mt-16">
            <Card className="p-6 bg-muted/30 border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Technische Deklaration nach DüMV 2012
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                {/* Kultursubstrat */}
                <div>
                  <h4 className="font-semibold text-primary mb-2">Kultursubstrat</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Unter Verwendung von organischem Bodenmaterial, Ton, Perlite, tierischen 
                    Nebenprodukten Kat. 3 nach VO (EG) Nr. 1069/2009 (Schafwolle), Düngemitteln, 
                    Lebende Mikroorganismen (Endomykorrhizapilz).
                  </p>
                  <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                    <p>Organische Substanz: 15%</p>
                    <p>pH-Wert: 5,6 (CaCl₂)</p>
                    <p>Salzgehalt: 1,6 g KCl/l</p>
                    <p>Volumen: 40 Liter</p>
                  </div>
                </div>

                {/* Ausgangsstoffe */}
                <div>
                  <h4 className="font-semibold text-primary mb-2">Ausgangsstoffe</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Organisches Bodenmaterial (Hochmoortorf wenig bis stärker zersetzt, H2−H6), 
                    Ton (Blähton, Tongranulat), Perlite, Lebende Mikroorganismen (Endomykorrhizapilz), 
                    tierischen Nebenprodukten Kat. 3 nach VO (EG) Nr. 1069/2009 (Schafwolle), 
                    NPK-Dünger, Spurennährstoff-Mischdünger
                  </p>
                </div>

                {/* Nebenbestandteile */}
                <div>
                  <h4 className="font-semibold text-primary mb-2">Nebenbestandteile</h4>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Stickstoff (N): 200 mg/l CaCl₂</p>
                    <p>Phosphat (P₂O₅): 180 mg/l CAL</p>
                    <p>Kaliumoxid (K₂O): 300 mg/l CAL</p>
                    <p>Magnesium (Mg): 120 mg/l CaCl₂</p>
                  </div>
                </div>

                {/* Inverkehrbringer */}
                <div>
                  <h4 className="font-semibold text-primary mb-2">Inverkehrbringer</h4>
                  <div className="text-xs text-muted-foreground">
                    <p>Neuland-Hum Rommel GmbH & Co.KG</p>
                    <p>Steigerwaldstraße 31</p>
                    <p>D-96193 Wachenroth</p>
                    <p className="mt-1">info@neulandhum.de</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>

      {/* Next Page Navigation */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <Link 
            to="/wachstumsberichte" 
            className="group flex items-center justify-between p-6 rounded-xl bg-card hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-1">Weiter zu den</p>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Wachstumsberichten</h3>
              <p className="text-muted-foreground mt-1">Echte Erfahrungen und Ergebnisse aus der Praxis</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default Product;
