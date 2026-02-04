import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle, Camera } from "lucide-react";
import { getWhatsAppLink } from "@/lib/clinic-data";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";

interface GalleryCase {
  id: string;
  treatment: string;
  date: string;
  image: string;
  description: string;
}

const galleryCases: GalleryCase[] = [
  {
    id: "case-001",
    treatment: "Complete Dentures",
    date: "January 2024",
    image: beforeAfter1,
    description: "Full mouth rehabilitation with custom-fitted complete dentures. Patient regained ability to eat and smile confidently.",
  },
  {
    id: "case-002",
    treatment: "Composite Bonding",
    date: "December 2023",
    image: beforeAfter2,
    description: "Cosmetic bonding to repair and reshape front teeth. Natural-looking results achieved in a single visit.",
  },
];

const BeforeAfterGallery = () => {
  const [selectedCase, setSelectedCase] = useState<GalleryCase | null>(null);

  const openLightbox = (caseItem: GalleryCase) => {
    setSelectedCase(caseItem);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedCase(null);
    document.body.style.overflow = "auto";
  };

  const navigateCase = (direction: "prev" | "next") => {
    if (!selectedCase) return;
    const currentIndex = galleryCases.findIndex((c) => c.id === selectedCase.id);
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? galleryCases.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryCases.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedCase(galleryCases[newIndex]);
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-main px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Real Results
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Before & After{" "}
            <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See the amazing smile transformations achieved by our patients. 
            All images shown with patient consent.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {galleryCases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="card-premium overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(caseItem)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={`${caseItem.treatment} - Before and After`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">View Details</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-poppins font-semibold text-lg text-foreground">
                    {caseItem.treatment}
                  </h3>
                  <span className="text-xs text-muted-foreground">{caseItem.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {caseItem.description}
                </p>
                <a
                  href={getWhatsAppLink({ caseId: caseItem.id })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-medium text-whatsapp hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire about this case
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Patient identities protected. All photos used with consent.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateCase("prev");
            }}
            className="absolute left-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateCase("next");
            }}
            className="absolute right-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div
            className="bg-card rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCase.image}
              alt={`${selectedCase.treatment} - Before and After`}
              className="w-full h-auto"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-foreground">
                    {selectedCase.treatment}
                  </h3>
                  <p className="text-sm text-muted-foreground">{selectedCase.date}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {selectedCase.id.toUpperCase()}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{selectedCase.description}</p>
              <a
                href={getWhatsAppLink({ caseId: selectedCase.id })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex"
              >
                <MessageCircle className="w-5 h-5" />
                Enquire about this treatment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeforeAfterGallery;
