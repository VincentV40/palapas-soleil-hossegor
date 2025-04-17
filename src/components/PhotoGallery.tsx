
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { memo } from "react";

const photos = [
  {
    src: "/lovable-uploads/a43b6248-a119-4980-bb93-b280fb3795a3.png",
    alt: "Palapas packed on beach",
    caption: "Facile à transporter"
  },
  {
    src: "/lovable-uploads/9e992bba-6293-4fec-a5b7-df310f8912c2.png", 
    alt: "Palapas with surfboard",
    caption: "La planche et vous profiterez de l'ombre ensemble"
  },
  {
    src: "/lovable-uploads/55060924-ac3a-4529-9864-f576b2db3e1a.png",
    alt: "Palapas full view",
    caption: "Une protection optimale"
  },
  {
    src: "/lovable-uploads/da1ed962-c3bb-449d-a8ae-09e38087686d.png",
    alt: "Palapas carrying bag",
    caption: "Pratique à emporter"
  },
  {
    src: "/lovable-uploads/4910ab32-7bd0-438a-a2ba-2e5f29c6be7c.png",
    alt: "Palapas detail",
    caption: "Un lest de 4kg de sable par pieds"
  },
  {
    src: "/lovable-uploads/9a052f7e-1bf5-4977-a601-d67a46fc3c34.png",
    alt: "Inside Palapas view",
    caption: "Vue de l'intérieur"
  }
];

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

// Memoized PhotoCard component to prevent unnecessary re-renders
const PhotoCard = memo(({ src, alt, caption, className }: PhotoCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className={cn(
          "overflow-hidden rounded-lg cursor-pointer group shadow-md", 
          "transition-all duration-500 ease-in-out",
          className
        )}>
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
            loading="lazy" 
            width="400"
            height="300"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="bg-palapas-sand/90 backdrop-blur-sm border-palapas-yellow">
        <p className="font-quicksand text-xs sm:text-sm md:text-base text-palapas-red text-center">{caption}</p>
      </HoverCardContent>
    </HoverCard>
  );
});

PhotoCard.displayName = "PhotoCard";

// Memoized main component
const PhotoGallery = memo(() => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-gradient-to-b from-palapas-sand/30 to-palapas-ocean/20">
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <PhotoCard 
              key={index} 
              src={photo.src} 
              alt={photo.alt} 
              caption={photo.caption} 
              className={`animate-fade-in opacity-0 [animation-delay:${index * 100 + 200}ms]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

PhotoGallery.displayName = "PhotoGallery";

export default PhotoGallery;
