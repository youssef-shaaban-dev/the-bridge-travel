import React from 'react';
import { MapPin, ShieldCheck, Clock, Globe2, Compass, Waves, Landmark } from 
'lucide-react';
import FeatureCard from '../../shared/FeatureCard';
import heroImage from "@/assets/hero/nile.webp";
import pyramidsImage from "@/assets/hero/pyramids.webp";
import logo from "@/assets/logo.png";
import { motion } from 'framer-motion';
const stats = [
    {
        icon: <Globe2 className="h-8 w-8" />,
        title: "Global Reach",
        description: "Serving travelers from USA, UK, Australia & worldwide",
        color: "bg-[#22455C]"
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Expert Guides",
        description: "Professional Egyptologist guides for every journey",
        color: "bg-[#BC8B22]"
    },
    {
        icon: <Clock className="h-8 w-8" />,
        title: "24/7 Support",
        description: "Local support ensuring a seamless travel experience",
        color: "bg-[#6B8E23]"
    },
    {
        icon: <MapPin className="h-8 w-8" />,
        title: "Handpicked",
        description: "Carefully selected hotels and luxury Nile cruises",
        color: "bg-[#22455C]"
    }
];

const AboutUs = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Nile View"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="container-custom relative flex h-full items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl font-playfair">
                            About Us
                        </h1>
                        <div className="mx-auto h-1 w-24 bg-[#BC8B22]" />
                        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto italic">
                            The Bridge to Luxury Egypt Tours
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section-padding bg-[#FCF9F4]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-bold tracking-widest text-[#BC8B22] uppercase">Our Mission</span>
                            <h2 className="mt-4 mb-8 text-4xl font-bold text-[#22455C] md:text-5xl leading-tight">
                                Crafting Exceptional Journeys That Connect You With The True Spirit of Egypt.
                            </h2>
                            <p className="mb-6 text-lg text-slate-600 leading-relaxed font-medium">
                                At The Bridge Travel, we don’t simply arrange trips — we craft exceptional journeys that connect you with the true spirit and grandeur of Egypt.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Based in Egypt and specializing in luxury and cultural travel, we proudly welcome travelers from the USA, the UK, Australia, and around the world to discover Egypt in comfort, safety, and refined style.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-4/3 overflow-hidden rounded-[40px] shadow-2xl">
                                <img
                                    src={heroImage}
                                    alt="Luxury Egypt Travel"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 overflow-hidden rounded-[32px] border-8 border-white shadow-xl lg:block">
                                <img
                                    src={heroImage}
                                    alt="Experience"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values / Features Section */}
            <section className="section-padding overflow-hidden">
                <div className="container-custom">
                    <div className="mb-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-[#22455C] md:text-5xl"
                        >
                            Why Travel With Us?
                        </motion.h2>
                        <div className="mx-auto mt-4 h-1 w-20 bg-[#BC8B22]" />
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <FeatureCard
                                key={index}
                                index={index}
                                {...stat}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Deep Dive */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={pyramidsImage}
                        alt="Ancient Wonders"
                        className="h-full w-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#22455C] via-[#22455C]/95 to-[#22455C]" />
                </div>

                <div className="container-custom relative z-10 text-white">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="mb-4 inline-block text-sm font-bold tracking-[0.3em] text-[#BC8B22] uppercase">The Journey</span>
                            <h2 className="mb-12 font-playfair text-4xl md:text-5xl border-b border-white/10 pb-8 tracking-wide">
                                Your Egyptian Story Starts Here
                            </h2>
                            <div className="space-y-8 text-lg text-white/80 leading-relaxed font-light">
                                <p className="relative">
                                    <span className="absolute -left-8 -top-4 text-6xl text-[#BC8B22]/20 font-serif">"</span>
                                    From the timeless majesty of the Pyramids and ancient temples, to the romance of a Nile Cruise between Luxor and Aswan, and the crystal-clear waters of the Red Sea in Sharm El Sheikh and Hurghada, every itinerary is thoughtfully designed to blend history, relaxation, and authentic experiences.
                                </p>
                                <p>
                                    Our team of expert Egyptologist guides, carefully selected hotels and luxury Nile cruises, and 24/7 local support ensure that every moment of your journey is seamless, enriching, and truly unforgettable.
                                </p>
                                <p className="relative italic font-medium text-white/90">
                                    Whether you dream of sailing along the Nile River cruise, exploring the wonders of ancient civilizations, diving in the Red Sea, or enjoying private day tours in Cairo, Alexandria, Luxor, and Aswan, we are here to turn your travel dreams into reality.
                                    <span className="absolute -right-8 -bottom-4 text-6xl text-[#BC8B22]/20 font-serif">"</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom relative">
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <img src={logo} alt="The Bridge Travel" className="h-32 object-contain brightness-75 grayscale contrast-125 opacity-40" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="mb-6 font-playfair text-3xl font-bold text-[#22455C] md:text-4xl">
                                The Bridge Travel - The Bridge to Luxury Egypt Tours
                            </h3>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="h-px w-12 bg-[#BC8B22]" />
                                <p className="text-xl text-[#BC8B22] font-semibold tracking-wide">
                                    Where Luxury Meets History
                                </p>
                                <div className="h-px w-12 bg-[#BC8B22]" />
                            </div>
                            <p className="text-2xl text-[#22455C] font-playfair italic max-w-xl mx-auto">
                                "Every Journey Becomes a Story."
                            </p>

                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
                                <div className="group flex flex-col items-center gap-4">
                                    <div className="h-16 w-16 rounded-full border border-[#BC8B22]/20 flex items-center justify-center group-hover:bg-[#BC8B22] group-hover:text-white transition-all duration-500">
                                        <Landmark className="h-7 w-7 text-[#BC8B22] group-hover:text-white" />
                                    </div>
                                    <span className="font-bold text-[#22455C] tracking-widest uppercase text-sm">History</span>
                                </div>
                                <div className="group flex flex-col items-center gap-4">
                                    <div className="h-16 w-16 rounded-full border border-[#BC8B22]/20 flex items-center justify-center group-hover:bg-[#BC8B22] group-hover:text-white transition-all duration-500">
                                        <Compass className="h-7 w-7 text-[#BC8B22] group-hover:text-white" />
                                    </div>
                                    <span className="font-bold text-[#22455C] tracking-widest uppercase text-sm">Luxury</span>
                                </div>
                                <div className="group flex flex-col items-center gap-4">
                                    <div className="h-16 w-16 rounded-full border border-[#BC8B22]/20 flex items-center justify-center group-hover:bg-[#BC8B22] group-hover:text-white transition-all duration-500">
                                        <Waves className="h-7 w-7 text-[#BC8B22] group-hover:text-white" />
                                    </div>
                                    <span className="font-bold text-[#22455C] tracking-widest uppercase text-sm">Authenticity</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative background logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
                    <img src={logo} alt="background" className="w-[800px] brightness-0" />
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
