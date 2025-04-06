
import Newsletter from "@/components/Newsletter";
import SocialIcons from "@/components/SocialIcons";
import ProductFeatures from "@/components/ProductFeatures";
import PhotoGallery from "@/components/PhotoGallery";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('photo-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background image */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center overlay grain opacity-75" />
        
        {/* Content container */}
        <div className="relative z-10 px-4 max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-12">
          {/* Title and Subtitle container with white transparency */}
          <div className="bg-white/25 rounded-lg p-8 backdrop-blur-sm shadow-sm mt-16" style={{ marginTop: "-30px" }}>
            {/* Main heading */}
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-abril text-palapas-red",
              "leading-tight tracking-wide animate-fade-in opacity-0"
            )}>
              Palapas : l'ombre des bons moments partagés.
            </h1>
            
            {/* Subheading */}
            <p className={cn(
              "text-xl md:text-2xl font-quicksand text-palapas-red mt-4 mx-auto",
              "max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0"
            )}>
              Palapas est une tente de plage révolutionnaire pensée à Hossegor.
            </p>
          </div>
          
          {/* Newsletter signup */}
          <div className="w-full max-w-md mt-4">
            <Newsletter />
          </div>
          
          {/* Product Features */}
          <ProductFeatures />
        </div>
        
        {/* Social links at bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
          <SocialIcons className="animate-fade-in [animation-delay:600ms] opacity-0" />
          
          {/* Scroll down arrow */}
          <button 
            onClick={scrollToGallery}
            className="mt-4 text-white animate-bounce cursor-pointer"
            aria-label="Défiler vers la galerie photo"
          >
            <ChevronDown className="w-8 h-8 text-palapas-red bg-white/30 rounded-full p-1" />
          </button>
        </div>
      </section>
      
      {/* Photo Gallery Section */}
      <section id="photo-gallery">
        <PhotoGallery />
      </section>
    </div>
  );
};

export default Index;
