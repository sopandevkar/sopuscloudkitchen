"use client"
import Link from "next/link";
import { Icon } from "@iconify/react";

const PreOrderBanner = () => {
    return (
        <section className='bg-gradient-to-r from-primary via-orange-500 to-primary py-4'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <Link href="/pre-order" className="block group">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                        {/* Lightning Icon */}
                        <div className="flex items-center gap-2 animate-pulse">
                            <Icon icon="mdi:lightning-bolt" width="32" height="32" className="text-yellow-300" />
                            <span className="text-xl md:text-2xl font-bold">SPECIAL OFFER!</span>
                        </div>
                        
                        {/* Main Message */}
                        <div className="text-center md:text-left">
                            <p className="text-lg md:text-xl font-semibold">
                                Hyderabadi Chicken Dum Biryani @ <span className="text-yellow-300 text-2xl md:text-3xl font-bold">₹99</span> Only
                            </p>
                            <p className="text-sm md:text-base">Pre-Book Now • Free Delivery • Limited Slots</p>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold group-hover:scale-105 transition-transform duration-300 shadow-lg">
                            <span>Book Now</span>
                            <Icon icon="mdi:arrow-right" width="24" height="24" className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default PreOrderBanner;
