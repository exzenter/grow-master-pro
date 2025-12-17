import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael S.",
      location: "Berlin",
      rating: 5,
      date: "März 2024",
      text: "Nach jahrelangem Experimentieren mit verschiedenen Substraten bin ich endlich auf dieses Premium-Produkt gestoßen. Die Ergebnisse sprechen für sich - kräftigeres Wachstum, gesündere Pflanzen und deutlich höhere Erträge. Besonders beeindruckend ist die gleichbleibende Qualität.",
      initials: "MS"
    },
    {
      id: 2,
      name: "Anna K.",
      location: "München",
      rating: 5,
      date: "Februar 2024",
      text: "Ich bin Anfängerin im Cannabis-Anbau und war anfangs überfordert mit all den verschiedenen Produkten. Dieses Substrat hat es mir unglaublich einfach gemacht - bis zu 6 Monate kein Nachdüngen nötig, perfekte pH-Werte von Anfang an. Meine ersten Pflanzen waren ein voller Erfolg!",
      initials: "AK"
    },
    {
      id: 3,
      name: "Thomas B.",
      location: "Hamburg",
      rating: 5,
      date: "Februar 2024",
      text: "Als erfahrener Grower habe ich schon viele Substrate getestet. Was mich hier überzeugt hat, ist die perfekte Balance zwischen Wasserspeicherung und Drainage. Keinerlei Staunässe, hervorragende Wurzelentwicklung und die Pflanzen sehen einfach gesund aus.",
      initials: "TB"
    },
    {
      id: 4,
      name: "Sarah W.",
      location: "Köln",
      rating: 5,
      date: "Januar 2024",
      text: "Nachhaltigkeit ist mir wichtig, daher war ich begeistert zu erfahren, dass dieses Substrat aus biologischen Komponenten besteht. Die Qualität leidet keineswegs darunter - im Gegenteil! Meine Pflanzen haben noch nie so gut ausgesehen.",
      initials: "SW"
    },
    {
      id: 5,
      name: "Markus R.",
      location: "Frankfurt",
      rating: 5,
      date: "Januar 2024",
      text: "Ich habe parallel mit diesem und einem anderen bekannten Substrat angebaut. Der Unterschied war deutlich sichtbar - die Pflanzen im Premium-Substrat waren kräftiger, hatten dunklere Blätter und entwickelten deutlich mehr Blütenmasse. Absolut empfehlenswert!",
      initials: "MR"
    },
    {
      id: 6,
      name: "Julia M.",
      location: "Stuttgart",
      rating: 5,
      date: "Dezember 2023",
      text: "Was mich am meisten überzeugt hat, ist die Langzeitwirkung der Nährstoffe. Ich musste bis zu 6 Monate lang überhaupt nicht nachdüngen - bei anderen Substraten war das nach wenigen Wochen nötig. Das spart Zeit, Geld und vereinfacht den gesamten Anbauprozess enorm.",
      initials: "JM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kundenerfahrungen
            </h1>
            <p className="text-xl text-muted-foreground">
              Lesen Sie, was unsere zufriedenen Kunden über ihr Erlebnis mit unserem Premium-Substrat berichten.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Zufriedene Kunden</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-muted-foreground">Durchschnittsbewertung</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Weiterempfehlungsrate</div>
            </Card>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 hover:shadow-elevated transition-all duration-300">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <Card className="mt-16 p-12 bg-gradient-primary text-center border-0">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Werden Sie Teil unserer Community
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Teilen Sie Ihre Erfahrungen und profitieren Sie von unserem Premium-Substrat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:shadow-elevated transition-all duration-300">
                Produkt kaufen
              </button>
              <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300">
                Kontakt aufnehmen
              </button>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
