import { Shield, Award, Heart, CheckCircle } from "lucide-react";
import clinicExterior from "@/assets/clinic-exterior.png";
import staffImage2 from "@/assets/staff-patient-2.png";

const credentials = [
  "State-of-the-art sterilization protocols",
  "Modern dental equipment",
  "Comfortable & hygienic environment",
  "Patient-centered care approach",
  "Affordable treatment options",
  "Emergency dental services",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            About Us
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Trusted Dental Partner in{" "}
            <span className="text-primary">Surat</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At Om Dental Clinic, we believe everyone deserves a healthy, beautiful smile. 
            Our experienced team provides gentle, personalized dental care using modern 
            techniques and equipment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="relative pb-8">
            {/* Mobile: Single column, Desktop: 2 columns */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
              <div className="order-1">
                <img
                  src={clinicExterior}
                  alt="Om Dental Clinic building exterior"
                  className="rounded-2xl shadow-lg w-full h-48 sm:h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-2 sm:pt-8">
                <img
                  src={staffImage2}
                  alt="Om Dental Clinic doctor with satisfied patient"
                  className="rounded-2xl shadow-lg w-full h-48 sm:h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-3 sm:order-none">
                <div className="bg-primary rounded-2xl p-4 sm:p-6 text-primary-foreground">
                  <p className="font-poppins font-bold text-2xl sm:text-3xl">10+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Safe badge - static on mobile, floating on desktop */}
            <div className="mt-4 sm:absolute sm:-bottom-4 sm:left-1/2 sm:-translate-x-1/2 bg-card rounded-2xl px-4 sm:px-6 py-3 shadow-lg border border-border flex items-center gap-3 w-fit mx-auto sm:mx-0">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">100% Safe</p>
                <p className="text-xs text-muted-foreground">Sterilized Equipment</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins text-2xl font-bold text-foreground mb-4">
                Meet Our Dental Team
              </h3>
              <p className="text-muted-foreground mb-6">
                Our clinic is led by qualified dental professionals who are committed to 
                providing the highest standard of care. With BDS certification and years 
                of clinical experience, our team stays updated with the latest dental 
                techniques and technologies.
              </p>
            </div>

            {/* Doctors */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-premium p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Clinic Dentist</p>
                    <p className="text-sm text-primary">BDS</p>
                    <p className="text-xs text-muted-foreground">General & Cosmetic</p>
                  </div>
                </div>
              </div>
              <div className="card-premium p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Clinic Dentist</p>
                    <p className="text-sm text-primary">BDS</p>
                    <p className="text-xs text-muted-foreground">Implants & Surgery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials List */}
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Why Choose Us?
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
