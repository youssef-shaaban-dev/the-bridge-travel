import React from 'react';
import { motion } from 'framer-motion';

const TravelGuideIntro = () => {
    return (
        <section className="py-20 bg-[#FCF9F4]">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl font-bold text-[#22455C] mb-8 font-playfair md:text-4xl"
                    >
                        Welcome to Egypt!
                    </motion.h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium mb-0">
                        To help you plan a smooth, safe, and unforgettable journey, here are the most frequently asked questions by travelers from the USA, UK, Australia, and around the world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TravelGuideIntro;
