import React from 'react';
import DayExcursionsHero from './DayExcursionsHero';
import DayExcursionList from './DayExcursionList';
import { excursionsData } from './data/excursions';
import logo from "@/assets/logo.png";
import { motion } from 'framer-motion';

const DayExcursions = () => {
    return (
        <div className="bg-white">
            <DayExcursionsHero />

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-[#22455C] mb-8 font-playfair md:text-5xl"
                        >
                            Exclusive Day Tours & Day Excursions
                        </motion.h2>
                        <div className="mx-auto w-24 h-1.5 bg-[#BC8B22] mb-10 rounded-full" />
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                            Experience the beauty of Egypt through our carefully curated day tours.
                            From ancient wonders to vibrant bazaars, we provide private, high-end
                            experiences tailored to your interests.
                        </p>
                    </div>
                </div>
            </section>

            <DayExcursionList excursions={excursionsData} />

            {/* Customization CTA */}
            <section className="py-24 bg-[#22455C] text-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold font-playfair mb-6 md:text-5xl leading-tight text-white">
                                Can't Find Your <br /> Perfect Excursion?
                            </h2>
                            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                                We specialize in custom-made private tours. Tell us what you want to see,
                                and we'll design a personalized day tour just for you.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-5 bg-[#BC8B22] hover:bg-[#d4a03a] text-white rounded-2xl font-bold transition-all shadow-xl shadow-black/20 text-lg">
                                    Customize My Tour
                                </button>
                                <button className="px-10 py-5 border-2 border-white/20 hover:bg-white/10 text-white rounded-2xl font-bold transition-all text-lg">
                                    Contact Support
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[60px] backdrop-blur-sm text-center">
                                <img src={logo} alt="Logo" className="h-24 mx-auto mb-8 opacity-40 brightness-0 invert" />
                                <h3 className="text-2xl font-bold mb-4 font-playfair">Premium Local Expertise</h3>
                                <p className="text-white/60 font-light flex items-center justify-center gap-2">
                                    Based in Cairo <span className="text-[#BC8B22]">•</span> 24/7 Support <span className="text-[#BC8B22]">•</span> Luxury Experience
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DayExcursions;
