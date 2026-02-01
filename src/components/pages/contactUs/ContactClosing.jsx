import React from 'react';
import { motion } from 'framer-motion';

const ContactClosing = ({ logo }) => {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-50">
            <div className="container-custom relative text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="mb-4 font-playfair text-3xl font-bold text-[#22455C] md:text-5xl">
                        The Bridge Travel
                    </h3>
                    <p className="text-[#BC8B22] text-xl font-medium tracking-[0.2em] uppercase mb-12">
                        The Bridge to Luxury Egypt Tours
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <img src={logo} alt="The Bridge Travel Logo" className="h-20 object-contain opacity-50 grayscale" />
                        <p className="text-slate-500 italic max-w-xl mx-auto text-lg leading-relaxed">
                            "Our travel consultants will contact you shortly with a personalized itinerary and the best available offers."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <span className="text-[20vw] font-bold text-[#22455C] whitespace-nowrap">CONTACT</span>
            </div>
        </section>
    );
};

export default ContactClosing;
