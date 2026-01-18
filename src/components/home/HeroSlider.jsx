import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronRight, Plane, Calendar } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import images
import pyramids from "@/assets/hero/pyramids.png";
import nile from "@/assets/hero/nile.png";
import temple from "@/assets/hero/temple.png";

const slides = [
    {
        image: pyramids,
        title: "Luxor and Aswan Travel",
        subtitle: "Egypt's Premier Luxury Travel Experience",
        badge: "Award-Winning Since 2008",
        cta1: "Discover Egypt",
        cta2: "View Packages"
    },
    {
        image: nile,
        title: "Sail the Majestic Nile",
        subtitle: "Experience ancient wonders from a luxury Dahabiya",
        badge: "Limited Seasonal Offers",
        cta1: "Explore Cruises",
        cta2: "Book Now"
    },
    {
        image: temple,
        title: "Unveil Ancient Mysteries",
        subtitle: "Private guided tours to the world's greatest temples",
        badge: "Expert Local Guides",
        cta1: "Start Planning",
        cta2: "Contact Us"
    }
];

const HeroSlider = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={1500}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                {/* Background Image with Zoom Effect */}
                                <motion.div
                                    className="absolute inset-0 z-0"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: isActive ? 1 : 1.1 }}
                                    transition={{ duration: 6, ease: "linear" }}
                                >
                                    <img
                                        src={slide.image}
                                        className="h-full w-full object-cover"
                                        alt={slide.title}
                                    />
                                    <div className="absolute inset-0 bg-black/40 bg-linear-to-b from-black/60 via-transparent to-black/60" />
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10 flex h-full items-center justify-center pt-20">
                                    <div className="container-custom text-center text-white">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <div className="flex flex-col items-center">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.8, delay: 0.2 }}
                                                        className="mb-6 flex items-center gap-2 rounded-full bg-[#BC8B22]/80 px-6 py-2 text-sm font-medium backdrop-blur-sm"
                                                    >
                                                        <Calendar className="h-4 w-4" />
                                                        {slide.badge}
                                                    </motion.div>

                                                    <motion.h1
                                                        initial={{ opacity: 0, y: 40 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 1, delay: 0.4 }}
                                                        className="mb-4 text-5xl font-bold md:text-7xl lg:text-8xl"
                                                    >
                                                        {slide.title}
                                                    </motion.h1>

                                                    <motion.p
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.8, delay: 0.6 }}
                                                        className="mb-10 max-w-2xl text-lg opacity-90 md:text-xl lg:text-2xl font-light italic"
                                                    >
                                                        {slide.subtitle}
                                                    </motion.p>

                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.6, delay: 0.8 }}
                                                        className="flex flex-col gap-4 sm:flex-row"
                                                    >
                                                        <Button className="h-14 rounded-full bg-[#BC8B22] px-10 text-lg font-bold hover:bg-[#A67A1D] shadow-xl shadow-amber-500/20">
                                                            {slide.cta1}
                                                            <ChevronRight className="ml-2 h-5 w-5" />
                                                        </Button>
                                                        <Button variant="outline" className="h-14 rounded-full border-2 border-white bg-transparent px-10 text-lg font-bold text-white hover:bg-white hover:text-[#22455C]">
                                                            {slide.cta2}
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="absolute bottom-10 right-10 z-20 hidden items-center gap-4 lg:flex">
                    <button className="swiper-button-prev-custom flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#22455C]">
                        <ChevronRight className="h-6 w-6 rotate-180" />
                    </button>
                    <button className="swiper-button-next-custom flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#22455C]">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </Swiper>

            {/* Styles for pagination */}
            <style>{`
        .swiper-pagination-bullet { width: 10px; height: 10px; background: white !important; opacity: 0.5; transition: all 0.3s ease; }
        .swiper-pagination-bullet-active { width: 30px; border-radius: 5px; opacity: 1; background: #BC8B22 !important; }
      `}</style>
        </section>
    );
};

export default HeroSlider;
