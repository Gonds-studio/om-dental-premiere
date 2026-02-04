import { clinicData } from "@/lib/clinic-data";

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicData.name,
    image: "https://omdentalclinic.in/logo.png",
    "@id": "https://omdentalclinic.in",
    url: "https://omdentalclinic.in",
    telephone: clinicData.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st floor, Rameshwar Complex, near Lalita chokdi, Kanteshwar Society, Nandanvan Society",
      addressLocality: "Katargam",
      addressRegion: "Gujarat",
      postalCode: clinicData.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.2207,
      longitude: 72.8282,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "16:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:30",
        closes: "13:00",
      },
    ],
    sameAs: [
      clinicData.links.instagram,
    ],
    priceRange: "₹₹",
    servesCuisine: "Dental Services",
    areaServed: {
      "@type": "City",
      name: "Surat",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "General Dentistry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cosmetic Veneers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dental Implants",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Root Canal Treatment",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLdSchema;
