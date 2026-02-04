import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Before & After" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3"
          >
            <img 
              src={logo} 
              alt="Om Dental Clinic Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-poppins font-bold text-lg text-foreground leading-tight">
                Om Dental Clinic
              </p>
              <p className="text-xs text-muted-foreground">Katargam, Surat</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={clinicData.phone.tel}
              className="btn-call text-sm py-2 px-4"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container-main px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href={clinicData.phone.tel}
                className="btn-call w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Call {clinicData.phone.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
