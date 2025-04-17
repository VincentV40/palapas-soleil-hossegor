
import React, { memo, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Memoized component to prevent unnecessary re-renders
const Newsletter = memo(() => {
  const isMobile = useIsMobile();

  // Fix Klaviyo integration by ensuring the form is properly initialized
  useEffect(() => {
    // Check if Klaviyo is available globally
    if (window.klaviyo) {
      // Properly initialize the form
      window.klaviyo.push(['initForms']);
    } else {
      // Create a MutationObserver to detect when Klaviyo becomes available
      const observer = new MutationObserver((mutations) => {
        if (window.klaviyo) {
          window.klaviyo.push(['initForms']);
          observer.disconnect();
        }
      });
      
      // Start observing document for script additions
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
      
      // Cleanup function
      return () => observer.disconnect();
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
        {/* Klaviyo form embed - ensure the div is empty to allow Klaviyo to properly populate it */}
        <div className="klaviyo-form-UyQH2n w-full"></div>
      </div>
    </div>
  );
});

// Add displayName for debugging
Newsletter.displayName = "Newsletter";

export default Newsletter;
