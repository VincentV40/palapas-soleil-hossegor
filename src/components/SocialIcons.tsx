
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <a
        href="https://www.instagram.com/mypalapas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-palapas-yellow transition-colors p-2 rounded-full"
        aria-label="Instagram"
      >
        <Instagram size={32} />
      </a>
    </div>
  );
};

export default SocialIcons;
