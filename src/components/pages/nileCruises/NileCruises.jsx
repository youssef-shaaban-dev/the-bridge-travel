import React from 'react';
import { motion } from 'framer-motion';
import NileCruisesHero from './NileCruisesHero';
import NileCruiseList from './NileCruiseList';
import { cruisesData } from './data/cruises';
import logo from "@/assets/logo.png";
import { Ship, Compass, Sparkles } from 'lucide-react';

const NileCruises = () => {
    return (
        <div className="bg-white">
            <NileCruisesHero />

            {/* Intro Content */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#BC8B22]/10 text-[#BC8B22] text-xs font-bold tracking-widest uppercase mb-8"
                        >
                            <Ship className="h-4 w-4" />
                            Legendary Journeys
                        </motion.div>
                        <h2 className="text-4xl font-bold text-[#22455C] mb-8 font-playfair md:text-5xl leading-tight">
                            Explore Ancient Civilizations <br /> From The Magic Of The Nile
                        </h2>
                        <div className="mx-auto w-24 h-1.5 bg-[#BC8B22] mb-10 rounded-full" />
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                            A Nile cruise is the classic way to explore Egypt. From the elegance of a
                            luxury vessel to the timeless beauty of the riverside temples, every
                            moment is a bridge between the ancient world and modern comfort.
                        </p>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                    <Compass className="h-[400px] w-[400px] -translate-x-1/2 rotate-12" />
                </div>
            </section>

            <NileCruiseList cruises={cruisesData} />

            {/* Features Recap */}
            <section className="py-24 bg-[#22455C]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FeatureItem
                            icon={<Sparkles className="h-8 w-8 text-[#BC8B22]" />}
                            title="5★ Star Comfort"
                            text="Hand-selected deluxe cruises offering premium cabins and world-class service."
                        />
                        <FeatureItem
                            icon={<Compass className="h-8 w-8 text-[#BC8B22]" />}
                            title="Expert Guidance"
                            text="Professional Egyptologist guides to bring 5000 years of history to life."
                        />
                        <FeatureItem
                            icon={<Ship className="h-8 w-8 text-[#BC8B22]" />}
                            title="All-Inclusive Luxury"
                            text="Full board accommodation and all-sightseeing tours included in every program."
                        />
                    </div>
                </div>
            </section>

            {/* Branded Closing */}
            <section className="py-24 bg-white text-center">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <img src={logo} alt="Logo" className="h-20 mx-auto mb-8 opacity-20 grayscale brightness-0" />
                        <h3 className="text-3xl font-bold text-[#22455C] font-playfair mb-6">Sail Through 5000 Years Of History</h3>
                        <p className="text-slate-500 italic mb-10">"The Bridge Travel - The Bridge to Luxury Egypt Tours"</p>
                                           </motion.div>
                </div>
            </section>
        </div>
    );
};

const FeatureItem = ({ icon, title, text }) => (
    <div className="text-center group">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 border border-white/10 group-hover:bg-[#BC8B22] group-hover:border-[#BC8B22] transition-all duration-300">
            <div className="group-hover:text-white transition-colors">
                {icon}
            </div>
        </div>
        <h4 className="text-white text-xl font-bold font-playfair mb-4">{title}</h4>
        <p className="text-white/60 leading-relaxed font-light">{text}</p>
    </div>
);

export default NileCruises;
