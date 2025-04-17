
import Newsletter from "@/components/Newsletter";
import SocialIcons from "@/components/SocialIcons";
import ProductFeatures from "@/components/ProductFeatures";
import PhotoGallery from "@/components/PhotoGallery";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
    // Mettre à jour la hauteur de la fenêtre lors du chargement et du redimensionnement
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('photo-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Logo en haut à gauche */}
      <div className="absolute top-4 left-4 z-20">
        <img 
          src="/lovable-uploads/6f21100f-4222-4a55-9e03-8126f806ec98.png" 
          alt="Palapas Logo" 
          className="h-16 md:h-20 animate-fade-in opacity-0" 
        />
      </div>
      
      {/* Instagram icon positioned at top right */}
      <div className="absolute top-4 right-4 z-20">
        <SocialIcons className="animate-fade-in [animation-delay:600ms] opacity-0" />
      </div>
      
      {/* Hero Section with Background image */}
      <section 
        className="relative flex flex-col items-center justify-center overflow-hidden text-white"
        style={{ height: `${windowHeight}px` }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center overlay grain opacity-75" />
        
        {/* Content container */}
        <div className="relative z-10 px-4 max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Title and Subtitle container with white transparency */}
          <div className={cn(
            "bg-white/25 rounded-lg p-4 md:p-6 backdrop-blur-sm shadow-sm w-full",
            isMobile ? "mt-24" : "mt-8" // Ajusté pour laisser de l'espace pour le logo
          )}>
            {/* Main heading */}
            <h1 className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-abril text-palapas-red",
              "leading-tight tracking-wide animate-fade-in opacity-0"
            )}>
              L'ombre des bons moments partagés
            </h1>
            
            {/* Subheading */}
            <p className={cn(
              "text-lg sm:text-xl md:text-2xl font-quicksand text-palapas-red mt-2 mx-auto",
              "max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0"
            )}>
              Palapas est une tente de plage révolutionnaire pensée à Hossegor
            </p>
          </div>
          
          {/* Newsletter signup - Réduit l'espace vertical */}
          <div className="w-full max-w-md">
            <Newsletter />
          </div>
          
          {/* Product Features - version plus compacte */}
          <div className="scale-95 origin-top">
            <ProductFeatures />
          </div>
        </div>
        
        {/* Scroll down arrow at bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
          {/* Scroll down arrow */}
          <button 
            onClick={scrollToGallery}
            className="text-white animate-bounce cursor-pointer"
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
