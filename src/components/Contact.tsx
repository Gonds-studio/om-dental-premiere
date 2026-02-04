import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Instagram,
  Youtube
} from "lucide-react";
import { clinicData, getWhatsAppLink, services } from "@/lib/clinic-data";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  treatment: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (in production, this would send to a backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success state
    setIsSubmitted(true);
    
    // Show toast
    toast({
      title: "Request sent!",
      description: "Om Dental Clinic will confirm via WhatsApp.",
    });

    // Open WhatsApp with prefilled message
    const whatsappLink = getWhatsAppLink({
      date: formData.date || "Flexible",
      time: formData.time || "Flexible",
      name: formData.name,
      phone: formData.phone,
      service: formData.treatment || "General Consultation",
    });
    
    window.open(whatsappLink, "_blank");

    // Reset form after delay
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitted(false);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Book Your{" "}
            <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready for a healthier smile? Contact us today or fill out the form below 
            to schedule your visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={clinicData.phone.tel}
                className="card-premium p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">{clinicData.phone.display}</p>
                </div>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center group-hover:bg-whatsapp transition-colors">
                  <MessageCircle className="w-6 h-6 text-whatsapp group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">Quick Message</p>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Our Location</p>
                  <p className="text-muted-foreground text-sm">
                    {clinicData.address.full}
                  </p>
                </div>
              </div>
              <a
                href={clinicData.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline"
              >
                Get Directions on Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Opening Hours</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{clinicData.hours.weekdays}</p>
                    <p>{clinicData.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0983!2d72.8282!3d21.2207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3a8d3d0001%3A0x0!2sOm%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Om Dental Clinic Location"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <a
                href={clinicData.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={clinicData.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium p-6 md:p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-whatsapp" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-foreground mb-2">
                  Request Sent!
                </h3>
                <p className="text-muted-foreground">
                  Om Dental Clinic will confirm your appointment via WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-poppins font-bold text-xl text-foreground mb-2">
                  Request an Appointment
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in your details and we'll get back to you shortly.
                </p>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Email (optional) */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select time</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Treatment */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Treatment Type
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select treatment</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any specific concerns or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-whatsapp w-full justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Request via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted via WhatsApp and phone.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
