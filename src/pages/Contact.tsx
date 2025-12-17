import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import ContactSignupForm from "@/components/ContactSignupForm";
import { Gift, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktieren Sie uns</h1>
            <p className="text-xl text-muted-foreground">
              Hinterlassen Sie Ihre Kontaktdaten und unser Produzent wird sich persönlich bei Ihnen melden.
            </p>
          </div>
          
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <Gift className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-sm font-medium">
                <span className="text-primary font-bold">10% Rabatt</span> auf Ihre erste Bestellung wenn Sie uns über dieses Formular kontaktieren!
              </p>
            </div>
            
            <ContactSignupForm />
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-Mail</p>
                <p className="font-medium">info@growsubstrate.de</p>
              </div>
            </Card>
            
            <Card className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <p className="font-medium">Auf Anfrage</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
