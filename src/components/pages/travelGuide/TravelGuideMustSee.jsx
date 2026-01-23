import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const TravelGuideMustSee = ({ mustSeePlaces }) => {
    return (
        <section className="section-padding bg-[#22455C] text-white">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold font-playfair mb-4 md:text-5xl">Must-See Places In Egypt</h2>
                    <div className="mx-auto w-20 h-1 bg-[#BC8B22] mb-12" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {mustSeePlaces.map((place, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center group hover:bg-white/10 transition-all hover:-translate-y-2"
                        >
                            <div className="h-16 w-16 rounded-full bg-[#BC8B22]/10 border border-[#BC8B22]/20 flex items-center justify-center mb-6 group-hover:bg-[#BC8B22] group-hover:text-white transition-all">
                                <div className="text-[#BC8B22] group-hover:text-white">
                                    {place.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold font-playfair tracking-wide group-hover:text-[#BC8B22] transition-colors">
                                {place.title}
                            </h3>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="p-8 rounded-[40px] bg-[#BC8B22] flex flex-col items-center justify-center text-center col-span-2 lg:col-span-1"
                    >
                        <Heart className="h-10 w-10 text-white mb-4 animate-pulse" />
                        <h3 className="text-lg font-bold mb-2">Custom Tours</h3>
                        <p className="text-xs text-white/80 font-light">Tailored to your budget & interests</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TravelGuideMustSee;
