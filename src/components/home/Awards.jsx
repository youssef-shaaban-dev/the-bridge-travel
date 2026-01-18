import React from 'react';
import { motion } from 'framer-motion';

const awards = [
    { year: "2019", type: "Travellers' Choice" },
    { year: "2020", type: "Travellers' Choice" },
    { year: "2021", type: "Travellers' Choice" },
    { year: "2025", type: "Best of the Best", highlight: true },
    { year: "2022", type: "Travellers' Choice" },
    { year: "2023", type: "Travellers' Choice" },
    { year: "2024", type: "Travellers' Choice" },
];

const TripAdvisorBadge = ({ award }) => {
    const isHighlight = award.highlight;

    return (
        <motion.div
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            className={`relative flex flex-col items-center justify-center rounded-lg p-6 transition-all border-2 ${isHighlight
                ? "bg-[#FFBB00] border-[#FFBB00] text-black shadow-lg shadow-amber-500/30"
                : "bg-white border-slate-100 text-slate-800 hover:border-[#BC8B22]/30 shadow-md shadow-slate-200/50"
                }`}
        >
            <div className="mb-2 text-[10px] font-bold uppercase tracking-tighter opacity-70">
                {award.year}
            </div>

            {/* Fake TripAdvisor Logo Logo Placeholder */}
            <div className="mb-3">
                <svg viewBox="0 0 100 60" className={`w-16 h-10 ${isHighlight ? 'fill-black' : 'fill-[#00AF87]'}`}>
                    <path d="M50 0c-27.6 0-50 22.4-50 50h100c0-27.6-22.4-50-50-50zm0 40c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" />
                    <circle cx="35" cy="20" r="5" />
                    <circle cx="65" cy="20" r="5" />
                </svg>
            </div>

            <div className={`text-center text-[11px] font-black uppercase leading-none ${isHighlight ? 'text-black' : 'text-slate-900'}`}>
                {award.type.split(' ')[0]}<br />
                {award.type.split(' ').slice(1).join(' ')}
            </div>

            <div className="mt-2 flex h-4 w-12 items-center justify-center">
                <div className={`h-px w-full ${isHighlight ? 'bg-black/20' : 'bg-slate-200'}`} />
            </div>

            <div className={`mt-1 text-[9px] font-bold ${isHighlight ? 'text-black' : 'text-[#00AF87]'}`}>
                tripadvisor
            </div>
        </motion.div>
    );
};

const Awards = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[#22455C] md:text-5xl">TripAdvisor Hall of Fame</h2>
                    <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#BC8B22]" />
                    <p className="mb-12 text-lg text-slate-500 italic">Consistently recognized for excellence in travel experiences</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <TripAdvisorBadge award={award} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
