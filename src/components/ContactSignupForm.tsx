import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Mail, User, MessageSquare, Percent, Building2, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const customerTypes = [
  { value: "privat", label: "Privat" },
  { value: "gewerblich", label: "Gewerblich" },
];

const quantityOptions = [
  { value: "1-5", label: "1-5 Säcke (40L)" },
  { value: "1-palette", label: "1 Palette (54 Säcke)" },
  { value: "4-paletten", label: "4 Paletten" },
  { value: "12-paletten", label: "12 Paletten" },
  { value: "lkw", label: "Voller LKW (26 Paletten)" },
  { value: "mehr", label: "Mehr als 1 LKW" },
];

const ContactSignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customerType: "",
    quantity: "",
    message: "",
  });
  const { toast } = useToast();

  const getPrefilledMessage = () => {
    const customerLabel = customerTypes.find(c => c.value === formData.customerType)?.label || "";
    const quantityLabel = quantityOptions.find(q => q.value === formData.quantity)?.label || "";
    
    let prefilledText = `Ich bin ein ${customerLabel}kunde und interessiere mich für Ihr Premium-Substrat.\n\n`;
    prefilledText += `Gewünschte Menge: ${quantityLabel}\n\n`;
    
    if (formData.customerType === "gewerblich") {
      prefilledText += "Als Gewerbetreibender interessiere ich mich für Ihre B2B-Konditionen.\n\n";
    }
    
    if (formData.message) {
      prefilledText += `Zusätzliche Nachricht:\n${formData.message}\n\n`;
    }
    
    return prefilledText;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Kontaktanfrage (${customerTypes.find(c => c.value === formData.customerType)?.label || ""})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n` +
      `Telefon: ${formData.phone || "Nicht angegeben"}\n` +
      `Kundentyp: ${customerTypes.find(c => c.value === formData.customerType)?.label || ""}\n` +
      `Interessierte Menge: ${quantityOptions.find(q => q.value === formData.quantity)?.label || ""}\n\n` +
      `---\n\n` +
      getPrefilledMessage()
    );
    
    window.location.href = `mailto:info@premium-erde.de?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    toast({
      title: "E-Mail-Programm geöffnet!",
      description: "Bitte senden Sie die E-Mail über Ihr E-Mail-Programm ab.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  if (isSubmitted) {
    return (
      <Card className="p-8 text-center bg-primary/5 border-primary/20">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground mb-4">
          Ihre Anfrage wurde erfolgreich übermittelt. Der Hersteller wird sich in Kürze bei Ihnen melden.
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
          <Percent className="h-5 w-5 text-primary" />
          <span className="font-semibold text-primary">10% Rabatt per E-Mail</span>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-card/90 backdrop-blur-sm">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Percent className="h-5 w-5 text-primary" />
          <span className="font-semibold text-primary">10% Rabatt sichern!</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">Interesse? Kontaktieren Sie uns!</h3>
        <p className="text-muted-foreground">
          Hinterlassen Sie Ihre Daten und der Hersteller meldet sich direkt bei Ihnen – inklusive 10% Rabattcode.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              required
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              E-Mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ihre@email.de"
              required
              className="bg-background/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Kundentyp *
            </Label>
            <Select value={formData.customerType} onValueChange={(value) => handleSelectChange("customerType", value)} required>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Bitte wählen..." />
              </SelectTrigger>
              <SelectContent className="bg-background border">
                {customerTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Interessierte Menge *
            </Label>
            <Select value={formData.quantity} onValueChange={(value) => handleSelectChange("quantity", value)} required>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Bitte wählen..." />
              </SelectTrigger>
              <SelectContent className="bg-background border">
                {quantityOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon (optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 123 456789"
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Nachricht (optional)
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Weitere Fragen oder Anmerkungen..."
            rows={3}
            className="bg-background/50"
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          Jetzt anfragen & 10% Rabatt sichern
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Ihre Daten werden nur zur Kontaktaufnahme verwendet und nicht an Dritte weitergegeben.
        </p>
      </form>
    </Card>
  );
};

export default ContactSignupForm;
