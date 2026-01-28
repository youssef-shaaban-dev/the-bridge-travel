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

        </div>
    );
};

export default DayExcursions;
