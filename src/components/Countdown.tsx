
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-15T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto mt-6 mb-4 animate-fade-in [animation-delay:500ms] opacity-0">
      <p className="text-palapas-red font-quicksand text-base sm:text-lg md:text-xl mb-2">
        Premier Drop dans
      </p>
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
        {[
          { value: timeLeft.days, label: "Jours" },
          { value: timeLeft.hours, label: "Heures" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Secondes" }
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className={cn(
              "font-abril text-palapas-red",
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            )}>
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-palapas-red font-quicksand text-xs sm:text-sm">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
