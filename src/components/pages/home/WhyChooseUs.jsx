import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Gem, Tag, Heart } from 'lucide-react';
import FeatureCard from '../../shared/FeatureCard';

const reasons = [
    {
        icon: <Landmark className="h-8 w-8" />,
        title: "Iconic Sights, Up Close",
        description: "See the Pyramids, Nile, and ancient temples in real life, timeless wonders you’ve only dreamed of.",
        color: "bg-[#22455C]"
    },
    {
        icon: <Gem className="h-8 w-8" />,
        title: "Effortless Luxury",
        description: "Enjoy five-star hotels, private guides, and smooth VIP service from arrival to departure.",
        color: "bg-[#BC8B22]"
    },
    {
        icon: <Tag className="h-8 w-8" />,
        title: "Exceptional Value",
        description: "World-class experiences and premium comfort at a surprisingly great value.",
        color: "bg-[#6B8E23]" // Olive Green variant
    },
    {
        icon: <Heart className="h-8 w-8" />,
        title: "Warm Egyptian Hospitality",
        description: "Feel truly welcomed with personal, attentive service that makes every moment special.",
        color: "bg-[#22455C]"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[#22455C] md:text-6xl">The Allure of Egypt</h2>
                    <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#BC8B22]" />
                    <p className="mb-16 text-slate-500 italic max-w-2xl mx-auto">
                        Where timeless wonders, refined luxury, and warm hospitality create an unforgettable journey.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            {...reason}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
