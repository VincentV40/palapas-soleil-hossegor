
import Newsletter from "@/components/Newsletter";
import SocialIcons from "@/components/SocialIcons";
import ProductFeatures from "@/components/ProductFeatures";
import PhotoGallery from "@/components/PhotoGallery";
import Countdown from "@/components/Countdown";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
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
      <div className="absolute top-4 left-4 z-20">
        <img 
          src="/lovable-uploads/6f21100f-4222-4a55-9e03-8126f806ec98.png" 
          alt="Palapas Logo" 
          className="h-12 sm:h-14 md:h-16 lg:h-20 animate-fade-in opacity-0" 
        />
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <SocialIcons className="animate-fade-in [animation-delay:600ms] opacity-0 scale-75 sm:scale-90 md:scale-100" />
      </div>
      
      <section 
        className="relative flex flex-col items-center justify-center overflow-hidden text-white"
        style={{ height: `${windowHeight}px` }}
      >
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center overlay grain opacity-75" />
        
        <div className="relative z-10 px-2 sm:px-4 max-w-5xl mx-auto text-center flex flex-col items-center justify-between gap-8 sm:gap-10 md:gap-12">
          <div className={cn(
            "bg-white/25 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-sm shadow-sm w-full",
            isMobile ? "mt-20" : "mt-16"
          )}>
            <h1 className={cn(
              "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-abril text-palapas-red",
              "leading-tight tracking-wide animate-fade-in opacity-0"
            )}>
              L'ombre des bons moments partagés
            </h1>
            
            <p className={cn(
              "text-sm sm:text-base md:text-xl lg:text-2xl font-quicksand text-palapas-red mt-1 sm:mt-2 mx-auto",
              "max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0"
            )}>
              Palapas est une tente de plage révolutionnaire pensée à Hossegor
            </p>
          </div>

          <div className="w-full max-w-md scale-90 sm:scale-95 md:scale-100 origin-top">
            <Newsletter />
          </div>
          
          <div className="mt-8 sm:mt-12 md:mt-16">
            <Countdown />
          </div>
          
          <div className="scale-75 sm:scale-85 md:scale-90 lg:scale-95 origin-top w-full mb-24 sm:mb-28">
            <ProductFeatures />
          </div>
        </div>
        
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex flex-col items-center">
          <button 
            onClick={scrollToGallery}
            className="text-white animate-bounce cursor-pointer"
            aria-label="Défiler vers la galerie photo"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-palapas-red bg-white/30 rounded-full p-1" />
          </button>
        </div>
      </section>
      
      <section id="photo-gallery">
        <PhotoGallery />
      </section>
    </div>
  );
};

export default Index;
