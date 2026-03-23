"use client"
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from '@/utils/publicPath';
import { Icon } from "@iconify/react";

const PreOrderHero = () => {
    return (
        <section className='bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen py-12 pt-28 md:pt-32'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                
                {/* Header Banner */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-primary to-orange-600 text-white px-6 py-3 rounded-full shadow-lg mb-4">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Hyderabadi Chicken Dum Biryani @ ₹99
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                            <Icon icon="mdi:truck-delivery" className="text-green-600" width="24" />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">No Delivery Charges</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                            <Icon icon="mdi:clock-alert" className="text-orange-600" width="24" />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Limited Slots</span>
                        </div>
                    </div>
                </div>

                {/* Pre-Booking Badge */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-400 px-4 py-2 rounded-lg">
                        <Icon icon="mdi:lightning-bolt" className="text-yellow-600" width="20" />
                        <span className="text-yellow-800 dark:text-yellow-300 font-bold">Pre-Booking Only</span>
                    </div>
                </div>

                {/* Timing Information */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8 max-w-2xl mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                            <Icon icon="mdi:clock-time-four" className="text-primary" width="28" />
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Lunch Orders Close:</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">11:00 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="mdi:moon-waning-crescent" className="text-primary" width="28" />
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Dinner Orders Close:</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Options Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    
                    {/* Campus Delivery Card */}
                    <div className="bg-gradient-to-br from-orange-500 to-primary rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="p-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
                                <h3 className="text-2xl font-bold text-white text-center mb-2">
                                    Campus Delivery - MIT College
                                </h3>
                                <p className="text-white/90 text-center text-sm">For Students Only</p>
                            </div>

                            {/* Timing Badges */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                                    <div className="bg-white rounded-full p-2">
                                        <Icon icon="mdi:food" className="text-orange-600" width="24" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold">Lunch: 12:00 PM - 2:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                                    <div className="bg-white rounded-full p-2">
                                        <Icon icon="mdi:food-variant" className="text-orange-600" width="24" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold">Dinner: 7:00 PM - 8:30 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-yellow-400/30 backdrop-blur-sm rounded-xl p-3 border-2 border-yellow-300">
                                <Icon icon="mdi:truck-check" className="text-white" width="24" />
                                    <p className="text-white font-semibold text-sm">Free Delivery</p>
                                </div>
                            </div>

                            {/* Campus Image */}
                            <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                                <Image 
                                    src={imageUrl('/images/Features/biryani.jpg')} 
                                    alt="Campus Delivery Biryani" 
                                    width={500} 
                                    height={400} 
                                    className="w-full h-56 object-cover"
                                />
                            </div>

                            {/* Book Button */}
                            <Link
                                href="https://forms.gle/M7Abw53GbG4o4Voa6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-100 text-primary text-xl font-bold py-5 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <span>Book for Campus</span>
                                <Icon icon="mdi:arrow-right" width="24" />
                            </Link>
                        </div>
                    </div>

                    {/* Home Delivery Card */}
                    <div className="relative bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl shadow-2xl overflow-hidden opacity-75">
                        {/* Coming Soon Overlay */}
                        <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
                            <div className="bg-white rounded-2xl px-8 py-4 shadow-2xl transform rotate-[-5deg]">
                                <p className="text-3xl font-bold text-gray-800 text-center">Coming Soon!</p>
                                <p className="text-sm text-gray-600 text-center mt-1">Stay Tuned</p>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
                                <h3 className="text-2xl font-bold text-white text-center mb-2">
                                    Home Delivery
                                </h3>
                                <p className="text-white/90 text-center text-sm">For Home Orders</p>
                            </div>

                            {/* Timing Badges */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                                    <div className="bg-white rounded-full p-2">
                                        <Icon icon="mdi:calendar-clock" className="text-gray-600" width="24" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold">Day: 12:00 PM - 4:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                                    <div className="bg-white rounded-full p-2">
                                        <Icon icon="mdi:weather-night" className="text-gray-600" width="24" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold">Night: 8:00 PM - 10:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-xl p-3 border-2 border-white/50">
                                    <Icon icon="mdi:truck-check" className="text-white" width="24" />
                                    <p className="text-white font-semibold text-sm">Free Delivery</p>
                                </div>
                            </div>

                            {/* Home Delivery Image */}
                            <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                                <Image 
                                    src={imageUrl('/images/Gallery/ChickenBiryani.jpg')} 
                                    alt="Home Delivery Biryani" 
                                    width={500} 
                                    height={400} 
                                    className="w-full h-56 object-cover"
                                />
                            </div>

                            {/* Disabled Button */}
                            <button
                                disabled
                                className="flex items-center justify-center gap-3 w-full bg-gray-300 text-gray-500 text-xl font-bold py-5 px-8 rounded-full shadow-lg cursor-not-allowed opacity-60"
                            >
                                <span>Order for Home</span>
                                <Icon icon="mdi:lock" width="24" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        How It Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-primary/20 to-orange-100 dark:from-primary/30 dark:to-orange-900/30 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-all duration-300">
                                <div className="bg-white dark:bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Icon icon="mdi:calendar-check" className="text-primary" width="40" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Book Your Slot</h3>
                                <p className="text-gray-600 dark:text-gray-400">Choose your preferred delivery time and fill the Google Form</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-all duration-300">
                                <div className="bg-white dark:bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Icon icon="mdi:chef-hat" className="text-orange-600" width="40" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. We Cook Fresh</h3>
                                <p className="text-gray-600 dark:text-gray-400">Chef Sopu prepares your biryani with authentic spices</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-all duration-300">
                                <div className="bg-white dark:bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Icon icon="mdi:bike-fast" className="text-green-600" width="40" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. We Deliver On Time</h3>
                                <p className="text-gray-600 dark:text-gray-400">Hot & fresh biryani delivered to your doorstep</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Limited Orders Badge */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-xl">
                        <p className="text-2xl font-bold">Only 30 Orders Per Day!</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link
                        href="https://forms.gle/M7Abw53GbG4o4Voa6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white text-2xl font-bold py-6 px-12 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
                    >
                        <Icon icon="mdi:google-forms" width="32" />
                        <span>Book Now on Google Form</span>
                        <Icon icon="mdi:arrow-right" width="32" />
                    </Link>
                </div>

                {/* Service Area Notice */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border-2 border-primary rounded-full px-6 py-3">
                        <Icon icon="mdi:map-marker" width="24" height="24" className="text-primary" />
                        <span className="text-primary font-semibold text-lg">
                            Serving in Chh. Sambhaji Nagar
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreOrderHero;
