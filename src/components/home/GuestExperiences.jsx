import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah M",
        location: "USA",
        initials: "SM",
        text: "An incredible experience. Everything was seamless, the service was top-notch, and seeing the Pyramids in person was a bucket-list moment. Truly unforgettable.",
        rating: 5,
        verified: true
    },
    {
        name: "James R.",
        location: "United Kingdom",
        initials: "JR",
        text: "Absolutely brilliant from start to finish. The organisation was spot on, the guides were first-class, and the Nile cruise was simply marvellous. Egypt exceeded all expectations.",
        rating: 5,
        verified: true
    },
    {
        name: "Daniel T",
        location: "Australia",
        initials: "DT",
        text: "Such a fantastic trip! The team was super friendly, the sights were mind-blowing, and the whole journey felt easy and relaxed. Egypt was an absolute ripper.",
        rating: 5,
        verified: true
    },
];

const GuestExperiences = () => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#22455C] md:text-6xl">What Travelers Say About Our Egypt Tours</h2>
                    <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#BC8B22]" />
                    <p className="text-slate-500 italic max-w-2xl mx-auto">
                        Discover what travelers say about their Egypt journey with us
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative flex flex-col rounded-[32px] bg-white p-10 shadow-xl shadow-slate-200/50 border border-slate-50 group hover:shadow-amber-900/5 transition-all"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-8 text-slate-100/80">
                                <Quote className="h-10 w-10 rotate-180" />
                            </div>

                            {/* Star Rating & Verified Badge */}
                            <div className="flex items-center justify-between mb-6 relative z-10">
                                <div className="flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-[#FFBB00] text-[#FFBB00]" />
                                    ))}
                                </div>
                                {item.verified && (
                                    <span className="rounded-full bg-[#00AF87] px-3 py-1 text-[10px] font-bold text-white shadow-sm flex items-center gap-1">
                                        Verified
                                    </span>
                                )}
                            </div>

                            {/* Testimonial Text */}
                            <p className="flex-1 text-slate-600 leading-relaxed italic mb-8 relative z-10 text-[15px]">
                                "{item.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#BC8B22] text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                                    {item.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#22455C] text-lg">{item.name}</h4>
                                    <div className="flex items-center gap-1 text-[12px] text-slate-400 font-medium">
                                        <MapPin className="h-3 w-3" />
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuestExperiences;
