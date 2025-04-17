
import React, { memo, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Memoized component to prevent unnecessary re-renders
const Newsletter = memo(() => {
  const isMobile = useIsMobile();

  // Ajouter un useEffect pour s'assurer que Klaviyo recharge le formulaire
  useEffect(() => {
    // Si window.klaviyo existe, recharger les formulaires
    if (window.klaviyo) {
      window.klaviyo.push(['initForms']);
    } else {
      // Si le script n'est pas encore chargé, essayer à nouveau après un court délai
      const timer = setTimeout(() => {
        if (window.klaviyo) {
          window.klaviyo.push(['initForms']);
        }
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in [animation-delay:400ms] opacity-0">
      <p className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2 text-center text-palapas-red">
        Bénéficier de notre prix de lancement à 149,99€ en vous inscrivant à notre newsletter
      </p>
      <div className={cn(
        "klaviyo-form-container", 
        isMobile ? "flex flex-col" : "flex"
      )}>
        {/* Klaviyo form embed */}
        <div className="klaviyo-form-UyQH2n w-full"></div>
      </div>
    </div>
  );
});

// Ajouter un displayName pour faciliter le debugging
Newsletter.displayName = "Newsletter";

export default Newsletter;
