'use client'

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

export default function FloatingPreOrderButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href="/pre-order"
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="relative">
        {/* Pulsing background effect - hidden on mobile */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75 hidden md:block"></div>
        
        {/* Main button */}
        <div className="relative flex items-center gap-2 md:gap-3 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white px-3 py-2 md:px-6 md:py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group-hover:shadow-primary/50">
          {/* Icon */}
          <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white rounded-full animate-bounce">
            <Icon icon="mdi:calendar-clock" width="20" height="20" className="text-primary md:w-7 md:h-7" />
          </div>
          
          {/* Text */}
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-bold uppercase tracking-wider drop-shadow-lg">Pre-Order</span>
            <span className="text-xs md:text-sm font-semibold">@ ₹99 Only</span>
          </div>
          
          {/* Arrow icon - hidden on mobile */}
          <Icon 
            icon="mdi:chevron-right" 
            width="24" 
            height="24" 
            className="group-hover:translate-x-1 transition-transform drop-shadow-lg hidden md:block" 
          />
        </div>

        {/* Glow effect - hidden on mobile */}
        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity hidden md:block"></div>
      </div>
    </Link>
  );
}
