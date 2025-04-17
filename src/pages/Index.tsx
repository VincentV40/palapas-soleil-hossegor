
import Newsletter from "@/components/Newsletter";
import SocialIcons from "@/components/SocialIcons";
import ProductFeatures from "@/components/ProductFeatures";
import PhotoGallery from "@/components/PhotoGallery";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('photo-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Instagram icon positioned at top right */}
      <div className="absolute top-4 right-4 z-20">
        <SocialIcons className="animate-fade-in [animation-delay:600ms] opacity-0" />
      </div>
      
      {/* Hero Section with Background image */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center overlay grain opacity-75" />
        
        {/* Content container */}
        <div className="relative z-10 px-4 max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-8 md:gap-12">
          {/* Title and Subtitle container with white transparency */}
          <div className={cn(
            "bg-white/25 rounded-lg p-4 md:p-8 backdrop-blur-sm shadow-sm w-full",
            isMobile ? "mt-36 pt-6" : "mt-[-30px] pt-6" // Ajout de pt-6 (24px) d'espace en haut du conteneur et ajustement sur mobile
          )}>
            {/* Main heading */}
            <h1 className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-abril text-palapas-red",
              "leading-tight tracking-wide animate-fade-in opacity-0"
            )}>
              Palapas : l'ombre des bons moments partagés
            </h1>
            
            {/* Subheading */}
            <p className={cn(
              "text-lg sm:text-xl md:text-2xl font-quicksand text-palapas-red mt-4 mx-auto",
              "max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0"
            )}>
              Palapas est une tente de plage révolutionnaire pensée à Hossegor
            </p>
          </div>
          
          {/* Newsletter signup */}
          <div className="w-full max-w-md mt-2 md:mt-4">
            <Newsletter />
          </div>
          
          {/* Product Features */}
          <ProductFeatures />
        </div>
        
        {/* Scroll down arrow at bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
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
