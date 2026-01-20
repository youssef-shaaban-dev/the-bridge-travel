import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TourItinerary = ({ itinerary }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const defaultItinerary = [
        {
            day: 1,
            title: "VIP Arrival in Cairo",
            description: "A personal representative welcomes you at the airport, assists with fast-track procedures, and escorts you to your hotel. Relax, settle in, and review your private itinerary."
        }
    ];

    const data = itinerary || defaultItinerary;

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                {data.map((item, idx) => (
                    <div key={idx} className="overflow-hidden">
                        {/* Accordion Header */}
                        <button
                            onClick={() => toggleAccordion(idx)}
                            className={`w-full flex items-center justify-between p-3 md:p-4 rounded-[40px] transition-all duration-300 group ${openIndex === idx
                                    ? 'bg-[#22455C] shadow-lg shadow-[#22455C]/20'
                                    : 'bg-[#22455C] hover:bg-[#2c5774]'
                                }`}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                {/* Day Circle */}
                                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#BC8B22] flex items-center justify-center text-white font-black text-lg shadow-inner shadow-black/20 shrink-0">
                                    {item.day}
                                </div>

                                {/* Day Title */}
                                <span className={`text-left text-sm md:text-lg font-bold text-white tracking-tight ${openIndex === idx ? 'opacity-100' : 'opacity-90'}`}>
                                    Day {item.day.toString().padStart(2, '0')}: {item.title}
                                </span>
                            </div>

                            {/* Chevron Icon */}
                            <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                <ChevronDown className="text-white/60 group-hover:text-white" size={24} />
                            </div>
                        </button>

                        {/* Accordion Content */}
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="px-16 md:px-24 py-6">
                                        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 relative">
                                            {/* Decorative indicator line */}
                                            <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#BC8B22] rounded-r-full"></div>

                                            <p className="text-[#22455C] leading-relaxed font-semibold text-base md:text-lg opacity-80">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourItinerary;
