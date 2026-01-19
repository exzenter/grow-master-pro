import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Mail, Building, AlertTriangle } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Scale className="h-3 w-3 mr-1" />
              Rechtliches
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Impressum
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="space-y-8">
              {/* Kontaktdaten */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Anbieter
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Johannes Maxeiner</p>
                  <p>Frankfurterstraße 52a</p>
                  <p>97082 Würzburg</p>
                  <p>Deutschland</p>
                </div>
              </section>

              {/* E-Mail */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Kontakt
                </h2>
                <p className="text-muted-foreground">
                  E-Mail: <a href="mailto:info@premium-erde.de" className="text-primary hover:underline">info@premium-erde.de</a>
                </p>
              </section>

              {/* Unternehmensform */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Unternehmensform
                </h2>
                <p className="text-muted-foreground">
                  Einzelunternehmer (Kleingewerbe)
                </p>
              </section>

              {/* Tätigkeit */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Tätigkeit
                </h2>
                <p className="text-muted-foreground">
                  Diese Website dient der Vermittlung von Kontakten zu externen Anbietern.
                  Es kommt kein Vertrag zwischen dem Nutzer und dem Betreiber dieser Website zustande.
                </p>
              </section>

              {/* Haftungshinweis */}
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Haftungshinweis
                </h2>
                <p className="text-muted-foreground">
                  Für Inhalte, Preise und Leistungen der vermittelten Anbieter wird keine Haftung übernommen.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impressum;
