import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../../shared/FeatureCard';

const AboutFeatures = ({ stats }) => {
    return (
        <section className="section-padding overflow-hidden">
            <div className="container-custom">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-[#22455C] md:text-5xl"
                    >
                        Why Travel With Us?
                    </motion.h2>
                    <div className="mx-auto mt-4 h-1 w-20 bg-[#BC8B22]" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            {...stat}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
