import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Mail, User, MessageSquare, Percent, Building2, Package, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

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
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customerType: "",
    quantity: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Nicht angegeben",
      customerType: customerTypes.find(c => c.value === formData.customerType)?.label || "",
      quantity: quantityOptions.find(q => q.value === formData.quantity)?.label || "",
      message: formData.message || "Keine zusätzliche Nachricht",
    };

    try {
      await emailjs.send("Johannes", "template_5vcg5qe", templateParams, "eB6V0V093uz5UVRUI");
      setIsSubmitted(true);
      toast({
        title: "Anfrage gesendet!",
        description: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            "Jetzt anfragen & 10% Rabatt sichern"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Ihre Daten werden nur zur Kontaktaufnahme verwendet und nicht an Dritte weitergegeben.
        </p>
      </form>
    </Card>
  );
};

export default ContactSignupForm;
