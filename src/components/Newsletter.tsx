
import React, { memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Memoized component to prevent unnecessary re-renders
const Newsletter = memo(() => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in [animation-delay:400ms] opacity-0">
      <p className="text-base md:text-lg text-palapas-red font-bold mb-2 text-center">
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
