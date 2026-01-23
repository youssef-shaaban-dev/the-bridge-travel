import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';

const TravelGuideFAQ = ({ faqData }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section-padding overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Summary Column */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <span className="text-sm font-bold tracking-widest text-[#BC8B22] uppercase">Expert Advice</span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold text-[#22455C] font-playfair leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-500 mb-8 font-medium">
                            Get essential insights from our local experts to prepare for your premium Egyptian experience.
                        </p>
                        <div className="p-6 rounded-3xl bg-[#22455C] text-white">
                            <ShieldCheck className="h-10 w-10 text-[#BC8B22] mb-4" />
                            <h4 className="font-bold text-lg mb-2">Safe & Secure</h4>
                            <p className="text-sm text-white/70 font-light leading-relaxed">
                                Your safety is our priority. We monitor local situations 24/7 to ensure your peace of mind.
                            </p>
                        </div>
                    </div>

                    {/* Questions Column */}
                    <div className="lg:col-span-8 space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className={`w-full flex items-center justify-between p-3 md:p-4 rounded-[40px] transition-all duration-300 group ${openIndex === index
                                        ? 'bg-[#22455C] shadow-lg shadow-[#22455C]/20'
                                        : 'bg-[#22455C] hover:bg-[#2c5774]'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#BC8B22] flex items-center justify-center text-white font-black text-lg shadow-inner shadow-black/20 shrink-0">
                                            {index + 1}
                                        </div>
                                        <span className={`text-left text-sm md:text-lg font-bold text-white tracking-tight ${openIndex === index ? 'opacity-100' : 'opacity-90'}`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <ChevronDown className="text-white/60 group-hover:text-white" size={24} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-16 md:px-24 py-6">
                                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 relative">
                                                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#BC8B22] rounded-r-full"></div>
                                                    <p className="text-[#22455C] leading-relaxed font-semibold text-base md:text-lg opacity-80">
                                                        {faq.answer}
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
            </div>
        </section>
    );
};

export default TravelGuideFAQ;
