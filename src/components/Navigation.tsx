import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Startseite" },
    { path: "/produkt", label: "Produkt" },
    { path: "/wachstumsberichte", label: "Wachstumsberichte" },
    { path: "/kontakt", label: "Kontakt" },
  ];
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-primary shadow-glow transition-all duration-300 group-hover:scale-105">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Premium Erde</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Link to="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-16 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
