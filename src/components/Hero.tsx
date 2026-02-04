import { Phone, MessageCircle, Clock, Star, Award, Users } from "lucide-react";
import { clinicData, getWhatsAppLink } from "@/lib/clinic-data";
import staffImage from "@/assets/staff-patient-1.png";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      <div className="container-main relative px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Award className="w-4 h-4" />
              Trusted Dental Care in Surat
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Confident Smiles,{" "}
                <span className="text-primary">Gentle Care</span>
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-light font-poppins">
                Om Dental Clinic, Katargam, Surat
              </p>
            </div>

            {/* Services List */}
            <p className="text-lg text-muted-foreground">
              Cosmetic Veneers · Implants · Root Canal · Same-day Appointments
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
              <a
                href={clinicData.phone.tel}
                className="btn-call text-base"
              >
                <Phone className="w-5 h-5" />
                Call {clinicData.phone.display}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="trust-badge">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 9:30am-9pm</span>
              </div>
              <div className="trust-badge">
                <Star className="w-4 h-4 text-gold" />
                <span>4.8★ Google Reviews</span>
              </div>
              <div className="trust-badge">
                <Users className="w-4 h-4 text-primary" />
                <span>1000+ Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={staffImage}
                alt="Om Dental Clinic - Doctor with happy patient"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Qualified Team</p>
                  <p className="text-sm text-muted-foreground">BDS Certified</p>
                </div>
              </div>
            </div>

            {/* Floating badge right */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
              <p className="font-semibold text-sm">Same Day</p>
              <p className="text-xs opacity-90">Appointments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
