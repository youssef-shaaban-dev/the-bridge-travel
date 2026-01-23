import React from 'react';
import heroImage from "@/assets/hero/nile.webp";
import { motion } from "framer-motion";

const NileCruisesHero = () => {
    return (
        <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Nile Cruises"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="container-custom relative flex h-full items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl font-playfair">
                        Nile Cruises
                    </h1>
                    <div className="mx-auto h-1 w-24 bg-[#BC8B22]" />
                    <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto italic">
                        Experience Luxury & History on the Legendary Nile River
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NileCruisesHero;
