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
      className={`fixed bottom-6 left-6 z-50 group transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="relative">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group-hover:shadow-red-500/50">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full animate-bounce">
            <Icon icon="mdi:food" width="28" height="28" className="text-red-500" />
          </div>
          
          {/* Text */}
          <div className="flex flex-col">
            <span className="text-lg font-bold uppercase tracking-wider drop-shadow-lg">Order Now</span>
            <span className="text-sm font-semibold">on Zomato</span>
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
        <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
      </div>
    </Link>
  );
}

