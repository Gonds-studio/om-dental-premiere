import { Star, Quote, Users } from "lucide-react";
import { testimonials } from "@/lib/clinic-data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Patient Reviews
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Patients{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy patients have to say 
            about their experience at Om Dental Clinic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-premium p-6 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl bg-secondary/50">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-poppins font-bold text-xl text-foreground">4.8</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Based on 50+ Google Reviews
            </p>
            <a
              href="https://g.page/r/omdentalclinickatargam/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline text-sm"
            >
              Leave us a review →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
