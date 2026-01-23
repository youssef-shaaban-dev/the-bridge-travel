import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const TravelGuideClosing = ({ logo }) => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold font-playfair text-[#22455C] mb-8 md:text-5xl tracking-tight leading-tight">
                        Travel with Confidence
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8 italic text-slate-500 text-lg leading-relaxed">
                        <p>
                            With professional Egyptologist guides, luxury transportation, selected hotels and cruises, and 24/7 local support, The Bridge Travel ensures your journey is safe, comfortable, and unforgettable.
                        </p>
                        <div className="flex flex-col items-center gap-6 pt-6 not-italic">
                            <img src={logo} alt="Logo" className="h-16 object-contain opacity-30 grayscale" />
                            <h3 className="text-2xl font-bold text-[#BC8B22] font-playfair">
                                The Bridge Travel - The Bridge to Luxury Egypt Tours
                            </h3>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.02] -rotate-12">
                <Globe className="w-full h-full text-[#22455C]" />
            </div>
        </section>
    );
};

export default TravelGuideClosing;
