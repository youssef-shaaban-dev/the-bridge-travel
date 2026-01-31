import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = ({ img_1,img_2 }) => {
    return (
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
                            At The Bridge Travel, we don’t simply arrange trips - we craft exceptional journeys that connect you with the true spirit and grandeur of Egypt.
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
                                src={img_2}
                                alt="Luxury Egypt Travel"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 overflow-hidden rounded-[32px] border-8 border-white shadow-xl lg:block">
                            <img
                                src={img_1}
                                alt="Experience"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
