import { Phone, MapPin, Instagram, Youtube, Heart } from "lucide-react";
import { clinicData } from "@/lib/clinic-data";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-main px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Om Dental Clinic Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <p className="font-poppins font-bold text-lg">Om Dental Clinic</p>
                <p className="text-sm text-background/70">Katargam, Surat</p>
              </div>
            </div>
            <p className="text-background/70 text-sm max-w-md mb-4">
              Providing gentle, modern dental care to the Surat community. 
              Your smile is our priority.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={clinicData.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={clinicData.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-background/70">
              <a
                href={clinicData.phone.tel}
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                {clinicData.phone.display}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {clinicData.address.full}
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>{clinicData.hours.weekdays}</p>
              <p>{clinicData.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p className="flex items-center gap-1">
              © {currentYear} Om Dental Clinic. Made with{" "}
              <Heart className="w-4 h-4 fill-destructive text-destructive" /> in Surat
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
