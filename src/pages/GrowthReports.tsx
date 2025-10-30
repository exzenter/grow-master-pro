import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Droplets, Thermometer } from "lucide-react";

const GrowthReports = () => {
  const reports = [
    {
      id: 1,
      title: "Wachstumszyklus Purple Haze",
      strain: "Purple Haze",
      duration: "12 Wochen",
      yield: "450g",
      date: "März 2024",
      description: "Kompletter Wachstumszyklus von der Keimung bis zur Ernte. Beeindruckendes Wurzelwachstum und kräftige Blütenbildung.",
      stats: [
        { label: "Höhe", value: "120cm" },
        { label: "pH-Wert", value: "6.0-6.2" },
        { label: "Temperatur", value: "22-26°C" },
        { label: "Luftfeuchtigkeit", value: "45-55%" }
      ]
    },
    {
      id: 2,
      title: "Northern Lights Grow",
      strain: "Northern Lights",
      duration: "10 Wochen",
      yield: "380g",
      date: "Februar 2024",
      description: "Schneller Wachstumszyklus mit hervorragender Nährstoffaufnahme. Keine Mangelerscheinungen während des gesamten Grows.",
      stats: [
        { label: "Höhe", value: "95cm" },
        { label: "pH-Wert", value: "5.9-6.1" },
        { label: "Temperatur", value: "20-24°C" },
        { label: "Luftfeuchtigkeit", value: "40-50%" }
      ]
    },
    {
      id: 3,
      title: "White Widow Experiment",
      strain: "White Widow",
      duration: "11 Wochen",
      yield: "420g",
      date: "Januar 2024",
      description: "Vergleichstest mit anderem Substrat. Unser Produkt zeigte deutlich bessere Ergebnisse in allen Wachstumsphasen.",
      stats: [
        { label: "Höhe", value: "110cm" },
        { label: "pH-Wert", value: "6.0-6.3" },
        { label: "Temperatur", value: "21-25°C" },
        { label: "Luftfeuchtigkeit", value: "45-55%" }
      ]
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
              Wachstumsberichte
            </h1>
            <p className="text-xl text-muted-foreground">
              Dokumentierte Grows mit unserem Premium-Substrat. Alle Berichte zeigen die außergewöhnliche Qualität und Leistung unseres Produkts.
            </p>
          </div>
          
          {/* Reports Grid */}
          <div className="space-y-12">
            {reports.map((report) => (
              <Card key={report.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image placeholder */}
                  <div className="bg-gradient-primary h-64 lg:h-auto flex items-center justify-center">
                    <TrendingUp className="h-20 w-20 text-primary-foreground opacity-50" />
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{report.strain}</Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {report.date}
                      </Badge>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3">{report.title}</h2>
                    <p className="text-muted-foreground mb-6">{report.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Dauer</div>
                        <div className="font-bold">{report.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Ertrag</div>
                        <div className="font-bold text-primary">{report.yield}</div>
                      </div>
                      <div className="col-span-2 md:col-span-2">
                        <div className="text-sm text-muted-foreground mb-1">Ergebnis</div>
                        <div className="font-bold">Hervorragend</div>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold mb-4">Wachstumsbedingungen</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {report.stats.map((stat, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                              {index === 0 && <TrendingUp className="h-4 w-4 text-primary" />}
                              {index === 1 && <Droplets className="h-4 w-4 text-primary" />}
                              {index === 2 && <Thermometer className="h-4 w-4 text-primary" />}
                              {index === 3 && <Droplets className="h-4 w-4 text-primary" />}
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">{stat.label}</div>
                              <div className="text-sm font-semibold">{stat.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Info Section */}
          <Card className="mt-16 p-8 bg-muted/50">
            <h3 className="text-xl font-bold mb-4">Über unsere Wachstumsberichte</h3>
            <p className="text-muted-foreground mb-4">
              Alle hier dokumentierten Grows wurden unter kontrollierten Bedingungen durchgeführt und sorgfältig dokumentiert. Die Ergebnisse zeigen die außergewöhnliche Qualität unseres Substrats über verschiedene Sorten und Wachstumsbedingungen hinweg.
            </p>
            <p className="text-muted-foreground">
              Jeder Bericht enthält detaillierte Informationen über Nährstoffgabe, pH-Werte, Umgebungsbedingungen und Beobachtungen während des gesamten Wachstumszyklus.
            </p>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GrowthReports;
