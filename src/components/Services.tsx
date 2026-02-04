import { 
  Stethoscope, 
  Sparkles, 
  Target, 
  Heart, 
  Shield, 
  Smile, 
  Sun,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { services, getWhatsAppLink } from "@/lib/clinic-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Sparkles,
  Target,
  Heart,
  Shield,
  Smile,
  Sun,
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine check-ups to advanced cosmetic procedures, we offer a full range 
            of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="card-premium p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {IconComponent && <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />}
                </div>

                {/* Content */}
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {service.duration}
                  </span>
                  <a
                    href={getWhatsAppLink({ service: service.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                  >
                    Book <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <p className="text-muted-foreground">
              Not sure which treatment you need?
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2 px-4"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
