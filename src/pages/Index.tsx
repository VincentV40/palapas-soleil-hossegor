
import Newsletter from "@/components/Newsletter";
import SocialIcons from "@/components/SocialIcons";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center overlay grain" />
      
      {/* Logo */}
      <div className="absolute top-6 right-6 z-10 w-24 sm:w-32 animate-fade-in opacity-0">
        <img 
          src="/lovable-uploads/fb24a1da-c12e-4c55-98b1-c2c4e1c7e472.png" 
          alt="Palapas Logo" 
          className="w-full"
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-12">
        {/* Main heading */}
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-sonder",
          "leading-tight tracking-wide animate-fade-in opacity-0"
        )}>
          Palapas : l'ombre des bons moments partagés.
        </h1>
        
        {/* Subheading */}
        <p className={cn(
          "text-xl md:text-2xl font-glacial",
          "max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0"
        )}>
          Palapas est une tente de plage révolutionnaire pensée à Hossegor.
        </p>
        
        {/* Newsletter signup */}
        <div className="w-full max-w-md mt-4">
          <Newsletter />
        </div>
      </div>
      
      {/* Social links at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <SocialIcons className="animate-fade-in [animation-delay:600ms] opacity-0" />
      </div>
    </div>
  );
};

export default Index;
