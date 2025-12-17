import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary shadow-glow">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Premium Erde</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Hochwertiges Wachstumssubstrat für Cannabis-Pflanzen. Alles was Ihre Pflanzen für optimales Wachstum benötigen.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/produkt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Produkt
                </Link>
              </li>
              <li>
                <Link to="/wachstumsberichte" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wachstumsberichte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Premium Erde. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
