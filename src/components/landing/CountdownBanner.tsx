"use client";

import { useState, useEffect } from 'react';
import { X, TimerIcon } from 'lucide-react';

export function CountdownBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999); // Fim do dia atual

      const difference = endOfDay.getTime() - now.getTime();
      return Math.max(0, Math.floor(difference / 1000));
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  if (!isVisible || timeLeft <= 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-sm p-4 text-white">
      <div className="container mx-auto flex items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <TimerIcon className="h-6 w-6 text-primary" />
          <p className="font-semibold">
            Sua oferta expira em:
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
