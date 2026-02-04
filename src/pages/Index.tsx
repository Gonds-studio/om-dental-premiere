import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLdSchema from "@/components/JsonLdSchema";
import { clinicData } from "@/lib/clinic-data";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = clinicData.seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", clinicData.seo.description);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", clinicData.seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", clinicData.seo.description);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <JsonLdSchema />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfterGallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
