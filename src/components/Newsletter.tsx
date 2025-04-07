
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
    
    // Webhook URL pour n8n
    const webhookUrl = "https://n8n-oceaniscapital-u36515.vm.elestio.app/webhook-test/b404b0ab-2758-46c4-938c-8fd8a4e9783f";
    
    // Envoyer les données au webhook n8n
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        date: new Date().toISOString(),
        source: window.location.href
      }),
      mode: "no-cors", // Pour éviter les problèmes CORS
    }).catch(error => {
      console.error("Erreur lors de l'envoi au webhook:", error);
    });
    
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
        Bénéficier de notre prix de lancement à 149,99€ au lieu de 199,99€ en vous inscrivant à notre newsletter
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse email"
          required
          className="bg-white/90 border-palapas-sand focus-visible:ring-palapas-red text-palapas-red"
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
