import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Compass, Waves } from 'lucide-react';

const AboutClosing = ({ logo }) => {
    return (
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
    );
};

export default AboutClosing;
