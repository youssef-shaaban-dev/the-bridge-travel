import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Headphones, CreditCard } from 'lucide-react';

const featureData = [
    {
        icon: <Trophy className="h-8 w-8" />,
        title: "Award-Winning Service",
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Licensed & Certified",
    },
    {
        icon: <Headphones className="h-8 w-8" />,
        title: "24/7 Support",
    },
    {
        icon: <CreditCard className="h-8 w-8" />,
        title: "Secure Payment",
    }
];

const Features = () => {
    return (
        <section className="section-padding bg-slate-50/50">
            <div className="container-custom">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featureData.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -12,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-md shadow-slate-200/50 transition-shadow hover:shadow-2xl hover:shadow-amber-500/10"
                        >
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#BC8B22]/10 text-[#BC8B22] shadow-inner transition-colors group-hover:bg-[#BC8B22] group-hover:text-white"
                            >
                                {feature.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[#22455C] group-hover:text-[#BC8B22] transition-colors">
                                {feature.title}
                            </h3>

                            {/* Decorative background element on hover */}
                            <div className="absolute -bottom-1 left-1/2 -z-10 h-1 w-0 -translate-x-1/2 rounded-full bg-[#BC8B22] transition-all duration-300 group-hover:w-1/3" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
