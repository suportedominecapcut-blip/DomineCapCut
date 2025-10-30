"use client";

import { useState, useEffect } from 'react';
import { X, TimerIcon } from 'lucide-react';

export function CountdownBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (!isVisible) return;

    if (timeLeft <= 0) {
      // Optional: hide banner when time is up
      // setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isVisible]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-sm p-4 text-white">
      <div className="container mx-auto flex items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <TimerIcon className="h-6 w-6 text-primary" />
          <p className="font-semibold">
            Sua oferta de <span className="font-extrabold">R$19,90</span> expira em:
          </p>
          <span className="font-bold text-lg text-primary tabular-nums">
            {formatTime(timeLeft)}
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
