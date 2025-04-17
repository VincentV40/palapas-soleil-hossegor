
import { ShieldCheck, Clock, Square, BadgeCheck, TagIcon, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

// Memoized Feature component
const Feature = memo(({ icon, title, className }: FeatureProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-2 sm:p-3 md:p-4",
      "bg-white/20 backdrop-blur-sm rounded-lg shadow-sm",
      "transition-all duration-300 hover:bg-white/30 hover:transform hover:scale-105",
      className
    )}>
      <div className="text-palapas-red mb-1 sm:mb-2">{icon}</div>
      <p className="font-quicksand font-medium text-palapas-red text-xs sm:text-sm md:text-base">{title}</p>
    </div>
  );
});

Feature.displayName = "Feature";

// Memoized ProductFeatures component
const ProductFeatures = memo(() => {
  const features = [
    { 
      icon: <ShieldCheck size={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, 
      title: "UPF 50+ de protection" 
    },
    { 
      icon: <Clock size={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, 
      title: "30 secondes de montage" 
    },
    { 
      icon: <Square size={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, 
      title: "4 m² de protection" 
    },
    { 
      icon: <BadgeCheck size={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, 
      title: "90 jours de garantie" 
    },
    {
      icon: <TagIcon size={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "149,99€ pour les 50 premiers clients"
    },
    {
      icon: <Anchor size={24} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "14 kg de lest dans les pieds"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-3 sm:py-4 md:py-6 lg:py-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {features.map((feature, index) => (
          <Feature 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            className={`animate-fade-in opacity-0 [animation-delay:${index * 100 + 200}ms]`}
          />
        ))}
      </div>
    </div>
  );
});

ProductFeatures.displayName = "ProductFeatures";

export default ProductFeatures;
