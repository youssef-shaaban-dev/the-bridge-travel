import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Star, Headset } from 'lucide-react';

const reasons = [
    {
        icon: <GraduationCap className="h-8 w-8" />,
        title: "Expert Egyptologists",
        description: "Our certified Egyptologist guides bring ancient history to life with deep knowledge and passionate storytelling, ensuring an educational and immersive experience.",
        color: "bg-[#22455C]"
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Safety & Security",
        description: "Your safety is our priority. We maintain the highest safety standards with 24/7 support, modern vehicles, and comprehensive safety protocols.",
        color: "bg-[#BC8B22]"
    },
    {
        icon: <Star className="h-8 w-8" />,
        title: "Luxury Experience",
        description: "From premium accommodations to exclusive access, we provide luxury experiences that exceed expectations and create unforgettable memories.",
        color: "bg-[#6B8E23]" // Olive Green variant
    },
    {
        icon: <Headset className="h-8 w-8" />,
        title: "Personalized Service",
        description: "Every journey is tailored to your preferences with dedicated support from planning to departure, ensuring a seamless and personalized experience.",
        color: "bg-[#22455C]"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[#22455C] md:text-6xl">Why Choose Us</h2>
                    <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#BC8B22]" />
                    <p className="mb-16 text-slate-500 italic max-w-2xl mx-auto">
                        Experience the difference that makes us Egypt's premier travel company
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover="hover"
                            className="group relative flex flex-col items-center rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl h-full border-2 border-transparent hover:border-[#BC8B22]/20 overflow-hidden"
                        >
                            {/* Decorative background glow on hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${reason.color}`} />

                            {/* Circular Icon Wrapper */}
                            <motion.div
                                variants={{
                                    hover: { scale: 1.15, rotate: 12, y: -5 }
                                }}
                                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg z-10 ${reason.color}`}
                            >
                                {reason.icon}
                            </motion.div>

                            {/* Text Content */}
                            <motion.h3
                                variants={{
                                    hover: { color: "#BC8B22", y: -2 }
                                }}
                                className="mb-6 text-2xl font-bold text-[#22455C] leading-tight px-4 z-10 transition-colors"
                            >
                                {reason.title}
                            </motion.h3>

                            <p className="text-sm leading-relaxed text-slate-500 font-medium z-10">
                                {reason.description}
                            </p>

                            {/* Animated line at the bottom */}
                            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#BC8B22] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
