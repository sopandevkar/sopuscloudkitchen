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
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="relative">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white px-6 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group-hover:shadow-primary/50">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full animate-bounce">
            <Icon icon="mdi:calendar-clock" width="28" height="28" className="text-primary" />
          </div>
          
          {/* Text */}
          <div className="flex flex-col">
            <span className="text-lg font-bold uppercase tracking-wider drop-shadow-lg">Pre-Order</span>
            <span className="text-sm font-semibold">@ ₹99 Only</span>
          </div>
          
          {/* Arrow icon */}
          <Icon 
            icon="mdi:chevron-right" 
            width="28" 
            height="28" 
            className="group-hover:translate-x-1 transition-transform drop-shadow-lg" 
          />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
      </div>
    </Link>
  );
}
