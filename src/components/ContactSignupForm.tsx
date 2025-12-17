import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, User, MessageSquare, Percent } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    
    setIsSubmitted(true);
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns in Kürze bei Ihnen. Ihr 10% Rabattcode wird per E-Mail zugestellt.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
            placeholder="Ihre Fragen oder gewünschte Menge..."
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
