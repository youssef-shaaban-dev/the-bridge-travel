import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Breanna H",
        location: "United States",
        initials: "BH",
        text: "This trip did not disappoint! I have traveled to many places and this trip has been my favorite by far. Luxor and Aswan Travel made our trip absolutely perfect.",
        rating: 5,
        verified: true
    },
    {
        name: "Sergey P",
        location: "Italy",
        initials: "SP",
        text: "Loved the trip! Thanks for the amazing journey through The Nile! Wonderful views, exceptional staff and incredible food. Special thanks to our guide Mr. Mohammed.",
        rating: 5,
        verified: true
    },
    {
        name: "Deana C",
        location: "Australia",
        initials: "DC",
        text: "Luxor and Aswan Travel exceeded all expectations and gave us an experience of a lifetime. Our personal Egyptologist Hassan was absolutely incredible.",
        rating: 5,
        verified: true
    },
    {
        name: "Michael R",
        location: "United Kingdom",
        initials: "MR",
        text: "A truly magical experience from start to finish. The attention to detail and the level of luxury was unmatched. Highly recommend to anyone visiting Egypt.",
        rating: 5,
        verified: true
    },
    {
        name: "Sarah L",
        location: "Canada",
        initials: "SL",
        text: "The perfect blend of adventure and relaxation. Sailing the Nile on a private Dahabiya was the highlight of our year. Everything was perfectly organized.",
        rating: 5,
        verified: true
    },
    {
        name: "Ahmed K",
        location: "Saudi Arabia",
        initials: "AK",
        text: "Outstanding service and very knowledgeable guides. They made every moment meaningful and helped us explore the hidden gems of Luxor. Five stars!",
        rating: 5,
        verified: true
    }
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
                    <h2 className="text-4xl font-bold text-[#22455C] md:text-6xl">Guest Experiences</h2>
                    <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#BC8B22]" />
                    <p className="text-slate-500 italic max-w-2xl mx-auto">
                        Hear from travelers who have experienced the magic of Egypt with us
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
