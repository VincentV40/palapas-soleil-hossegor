
import { ShieldCheck, Clock, Square, BadgeCheck, TagIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const Feature = ({ icon, title, className }: FeatureProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-4",
      "bg-white/20 backdrop-blur-sm rounded-lg shadow-sm",
      "transition-all duration-300 hover:bg-white/30 hover:transform hover:scale-105",
      className
    )}>
      <div className="text-palapas-red mb-2">{icon}</div>
      <p className="font-quicksand font-medium text-palapas-red">{title}</p>
    </div>
  );
};

const ProductFeatures = () => {
  const features = [
    { 
      icon: <ShieldCheck size={32} />, 
      title: "UPF 50+ de protection" 
    },
    { 
      icon: <Clock size={32} />, 
      title: "30 secondes de montage" 
    },
    { 
      icon: <Square size={32} />, 
      title: "4 m² de protection" 
    },
    { 
      icon: <BadgeCheck size={32} />, 
      title: "90 jours de garantie" 
    },
    {
      icon: <TagIcon size={32} />,
      title: "149,99€ au lieu de 199,99€ pour nos premiers clients inscrits à la newsletter"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
};

export default ProductFeatures;
