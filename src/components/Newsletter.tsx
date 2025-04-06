
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler une soumission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Inscription réussie",
        description: "Merci de vous être inscrit à notre newsletter!",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto animate-fade-in [animation-delay:400ms] opacity-0">
      <p className="text-base md:text-lg text-palapas-red font-bold mb-2 text-center">
        Soyez les premiers informés et profitez de la livraison offerte
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse email"
          required
          className="bg-white/90 border-palapas-sand focus-visible:ring-palapas-red"
          aria-label="Adresse email pour la newsletter"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-palapas-red hover:bg-palapas-red/90 text-white transition-colors"
        >
          {isSubmitting ? "Inscription..." : "S'inscrire"}
        </Button>
      </div>
    </form>
  );
};

export default Newsletter;
