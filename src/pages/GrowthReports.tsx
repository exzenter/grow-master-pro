import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
const GrowthReports = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Erfahrungsbericht
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cannabis-Erde von NeulandHum
            </h1>
            <p className="text-xl text-muted-foreground">Ein ausführlicher Praxisbericht über langjährige Erfahrungen </p>
          </div>
          
          {/* Main Report */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Die Suche nach der perfekten Lösung</h2>
              <p className="text-muted-foreground mb-4">
                Bevor ich auf die Erde von NeulandHum gestoßen bin, habe ich viele verschiedene Substrate ausprobiert – sowohl Erde als auch Coco – stets in Kombination mit verschiedenen Düngeschemata.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Ergebnisse waren zwar ordentlich, jedoch war der Zeit-, Material- und Kontrollaufwand hoch. Ständiges Messen, Anpassen, Düngen – all das machte das Ganze kompliziert und fehleranfällig, gerade für Einsteiger.
              </p>
              <p className="text-muted-foreground">
                Auch vorgedüngte Erden anderer Anbieter versprachen Vereinfachung – in der Praxis war dies jedoch oft nur teilweise erfüllt.
              </p>
            </Card>

            {/* The Turning Point */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Dann kam der Wendepunkt: NeulandHum</h2>
                  <p className="text-muted-foreground">
                    Durch einen persönlichen Kontakt wurde ich auf NeulandHum aufmerksam – ein Unternehmen mit langjähriger Erfahrung im professionellen Gartenbau. Gemeinsam mit Biologen wurde dort eine speziell auf Cannabis abgestimmte Erde entwickelt.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground pl-16">
                Ich hatte das Glück, diese Erde als Headgrower exklusiv testen zu dürfen – unter realen Bedingungen und im Vergleich mit anderen Produkten.
              </p>
            </Card>

            {/* Results */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Die Ergebnisse sprechen für sich</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Kein Nachdüngen notwendig</span>
                    <span className="text-muted-foreground"> – die Pflanzen waren über mehrere Monate hinweg vollständig versorgt</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Konstantes, gesundes Wachstum</span>
                    <span className="text-muted-foreground"> vom Anfang bis zur Ernte</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Keine Über- oder Unterversorgung</span>
                    <span className="text-muted-foreground"> – stabile Bedingungen für die Pflanze</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Extrem einfache Anwendung</span>
                    <span className="text-muted-foreground"> – perfekt für Einsteiger, angenehm für Profis</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Im direkten Vergleich mit anderen Erden</h2>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  In neutralen Setups mit identischer Behandlung war die Erde von NeulandHum durchweg führend. Im besten Fall waren andere Erden gleichauf, in vielen Fällen lag die Ernte mit NeulandHum jedoch <span className="font-bold text-foreground">100–200 % höher</span>.
                </p>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Mein persönlicher Bestwert
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">2,4 g/Watt</div>
                    <div className="text-sm text-muted-foreground">Im einfachen Setup – ohne Nachdüngung</div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">197,5 g</div>
                    <div className="text-sm text-muted-foreground">Ertrag aus einem 11-Liter-Topf</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Mit Genetik eines bekannten Saatgut-Herstellers. Selbstverständlich wurde alles ordnungsgemäß dokumentiert und entsorgt.
                </p>
              </div>
            </Card>

            {/* Water Quality */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Auch bei der Wasserqualität flexibel</h2>
              <p className="text-muted-foreground mb-4">
                Ich habe Durchläufe mit pH-angepasstem Wasser und mit normalem Leitungswasser gemacht.
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="font-semibold mb-2">Ergebnis:</p>
                <p className="text-muted-foreground">
                  Beide Varianten führten zu einem gesunden, kräftigen Wuchs und einer erfolgreichen Ernte. Die Erde verzeiht also Fehler – ein weiterer Pluspunkt, besonders für Anfänger.
                </p>
              </div>
            </Card>

            {/* Community Feedback */}
            <Card className="p-8 border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Rückmeldungen aus der Community</h2>
                  <p className="text-muted-foreground">
                    Die Ergebnisse sprachen sich schnell herum – ich durfte die Erde an befreundete Grower, Headshops und CSCs weitergeben.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-primary rounded-lg p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">100%</div>
                  <div className="text-primary-foreground/90">Weiterempfehlungsquote</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                Die Rückmeldungen waren durchweg positiv.
              </p>
            </Card>

            {/* Conclusion */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
              <h2 className="text-2xl font-bold mb-4">Fazit: Minimalprinzip = Maximales Ergebnis</h2>
              <p className="text-muted-foreground mb-4">
                Dank der Legalisierung darf heute jeder Erwachsene bis zu drei Pflanzen privat anbauen.
                Viele sagen jedoch: „Das ist mir zu aufwendig, ich will mich nicht mit Düngern, pH-Werten oder Nährstoffplänen herumschlagen."
              </p>
              <div className="bg-background/80 backdrop-blur rounded-lg p-6 mb-4">
                <p className="font-semibold text-lg mb-3">Genau hier setzt diese Erde an:</p>
                <p className="text-2xl font-bold text-primary mb-4">Minimaler Aufwand, maximaler Ertrag.</p>
                <div className="space-y-2 text-muted-foreground">
                  <p>→ Einfach Samen in die Erde</p>
                  <p>→ Regelmäßig gießen</p>
                  <p>→ Licht oder Sonne bereitstellen</p>
                  <p>→ Ernten</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Keine komplizierten Pläne, keine zusätzlichen Produkte, kein Frust.
              </p>
              <p className="text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">Das Ergebnis:</span> Hochwertiges, aromatisches Cannabis in stabiler Menge – ganz ohne Stress.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground italic">
                  Ich bin stolz, diese Erde nun offiziell vertreten und vertreiben zu dürfen – als Produkt, das meine eigene Leidenschaft mit echtem Mehrwert für andere verbindet.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* USP Banner */}
      <section className="py-6 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <Link 
            to="/kontakt" 
            className="flex items-center justify-center gap-3 text-center group"
          >
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">EXKLUSIV</span>
            <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">
              Bis zu <span className="font-bold text-primary">10% Rabatt</span> bei Bestellung über uns – persönliche Beratung inklusive
            </span>
            <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default GrowthReports;