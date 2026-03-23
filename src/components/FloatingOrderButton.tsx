'use client'

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

export default function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href="https://zomato.onelink.me/xqzv/m1g9ltnd"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 group transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="relative">
        {/* Pulsing background effect - hidden on mobile */}
        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75 hidden md:block"></div>
        
        {/* Main button */}
        <div className="relative flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 md:px-6 md:py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group-hover:shadow-red-500/50">
          {/* Icon */}
          <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white rounded-full animate-bounce">
            <Icon icon="mdi:food" width="20" height="20" className="text-red-500 md:w-7 md:h-7" />
          </div>
          
          {/* Text */}
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-bold uppercase tracking-wider drop-shadow-lg">Order Now</span>
            <span className="text-xs md:text-sm font-semibold">on Zomato</span>
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
        <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity hidden md:block"></div>
      </div>
    </Link>
  );
}

