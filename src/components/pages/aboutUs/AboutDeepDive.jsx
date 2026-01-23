import React from 'react';
import { motion } from 'framer-motion';

const AboutDeepDive = ({ pyramidsImage }) => {
    return (
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
    );
};

export default AboutDeepDive;
