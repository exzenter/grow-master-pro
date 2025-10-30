import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary shadow-glow transition-all duration-300 group-hover:scale-105">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">GrowSubstrate</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Startseite
            </Link>
            <Link 
              to="/produkt" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/produkt') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Produkt
            </Link>
            <Link 
              to="/wachstumsberichte" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/wachstumsberichte') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Wachstumsberichte
            </Link>
            <Link 
              to="/erfahrungen" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/erfahrungen') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Erfahrungen
            </Link>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
