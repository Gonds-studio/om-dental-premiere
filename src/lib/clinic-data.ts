// Om Dental Clinic - Core Data
export const clinicData = {
  name: "Om Dental Clinic",
  tagline: "Confident Smiles, Gentle Care",
  address: {
    full: "1st floor, Rameshwar Complex, near Lalita chokdi, Kanteshwar Society, Nandanvan Society, Katargam, Surat, Gujarat 395004",
    short: "Katargam, Surat",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    postalCode: "395004",
  },
  phone: {
    display: "+91 95108 31848",
    tel: "tel:+919510831848",
    whatsapp: "919510831848",
  },
  links: {
    googleMaps: "https://maps.app.goo.gl/Uzi6uM7X1W44rvqm6",
    instagram: "https://www.instagram.com/omdentalclinicofficial",
    youtube: "#", // Placeholder
  },
  hours: {
    weekdays: "Mon–Sat: 9:30am–1:00pm & 4:30pm–9:00pm",
    sunday: "Sun: 9:30am–1:00pm",
    schema: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "13:00" },
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "16:30", closes: "21:00" },
      { dayOfWeek: ["Sunday"], opens: "09:30", closes: "13:00" },
    ],
  },
  seo: {
    title: "Om Dental Clinic — Dentist in Katargam, Surat | Cosmetic & General Dentistry",
    description: "Gentle, modern dental care in Surat. Veneers, implants, root canal & same-day appointments. Call +91 95108 31848 or Book via WhatsApp.",
    keywords: "dentist surat, dental clinic katargam, cosmetic dentistry surat, implants surat, root canal surat, veneers surat, om dental clinic",
  },
};

export const services = [
  {
    id: "general",
    name: "General Dentistry",
    description: "Comprehensive dental care including check-ups, cleanings, and preventive treatments.",
    icon: "Stethoscope",
    duration: "30-60 min",
  },
  {
    id: "veneers",
    name: "Cosmetic Veneers",
    description: "Transform your smile with custom porcelain veneers for a natural, beautiful look.",
    icon: "Sparkles",
    duration: "60-90 min",
  },
  {
    id: "implants",
    name: "Dental Implants",
    description: "Permanent tooth replacement with titanium implants for a lasting, natural feel.",
    icon: "Target",
    duration: "60-120 min",
  },
  {
    id: "rct",
    name: "Root Canal Treatment",
    description: "Pain-free root canal therapy to save damaged teeth and relieve discomfort.",
    icon: "Heart",
    duration: "45-90 min",
  },
  {
    id: "extractions",
    name: "Tooth Extractions",
    description: "Safe and gentle tooth removal with minimal discomfort and quick recovery.",
    icon: "Shield",
    duration: "30-45 min",
  },
  {
    id: "dentures",
    name: "Dentures",
    description: "Custom-fitted complete and partial dentures for a confident, natural smile.",
    icon: "Smile",
    duration: "Multiple visits",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more radiant smile.",
    icon: "Sun",
    duration: "45-60 min",
  },
];

export const beforeAfterCases = [
  {
    id: "case-001",
    treatment: "Complete Dentures",
    date: "January 2024",
    beforeImage: "/assets/before-after-1.png",
    afterImage: "/assets/before-after-1.png",
    description: "Full mouth rehabilitation with complete dentures.",
  },
  {
    id: "case-002",
    treatment: "Cosmetic Bonding",
    date: "December 2023",
    beforeImage: "/assets/before-after-2.png",
    afterImage: "/assets/before-after-2.png",
    description: "Composite bonding to repair chipped front teeth.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    text: "Best dental experience ever! The doctors are so gentle and caring. My entire family now visits Om Dental Clinic.",
    treatment: "Root Canal Treatment",
  },
  {
    id: 2,
    name: "Rajesh M.",
    rating: 5,
    text: "Got my veneers done here and the results are amazing. Very professional staff and clean clinic.",
    treatment: "Cosmetic Veneers",
  },
  {
    id: 3,
    name: "Anjali P.",
    rating: 5,
    text: "The clinic is very hygienic and the doctors explain everything clearly. Highly recommended for dental implants.",
    treatment: "Dental Implants",
  },
];

export const getWhatsAppLink = (params?: {
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  service?: string;
  caseId?: string;
}) => {
  const baseUrl = `https://wa.me/${clinicData.phone.whatsapp}`;
  
  if (params?.caseId) {
    const message = encodeURIComponent(
      `Hello Om Dental Clinic, I would like to enquire about case ${params.caseId}. Please provide more information about this treatment.`
    );
    return `${baseUrl}?text=${message}`;
  }
  
  const date = params?.date || "[DATE]";
  const time = params?.time || "[TIME]";
  const name = params?.name || "[NAME]";
  const phone = params?.phone || "[PHONE]";
  const service = params?.service || "[SERVICE]";
  
  const message = encodeURIComponent(
    `Hello Om Dental Clinic, I would like to book an appointment on ${date} at ${time}. Name: ${name} Phone: ${phone} (Treatment: ${service})`
  );
  
  return `${baseUrl}?text=${message}`;
};
