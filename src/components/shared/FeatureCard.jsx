import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, color, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover="hover"
            className="group relative flex flex-col items-center rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl h-full border-2 border-transparent hover:border-[#BC8B22]/20 overflow-hidden"
        >
            {/* Decorative background glow on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${color}`} />

            {/* Circular Icon Wrapper */}
            <motion.div
                variants={{
                    hover: { scale: 1.15, rotate: 12, y: -5 }
                }}
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg z-10 ${color}`}
            >
                {icon}
            </motion.div>

            {/* Text Content */}
            <motion.h3
                variants={{
                    hover: { color: "#BC8B22", y: -2 }
                }}
                className="mb-6 text-2xl font-bold text-[#22455C] leading-tight px-4 z-10 transition-colors"
            >
                {title}
            </motion.h3>

            <p className="text-sm leading-relaxed text-slate-500 font-medium z-10">
                {description}
            </p>

            {/* Animated line at the bottom */}
            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#BC8B22] transition-all duration-500 group-hover:w-full" />
        </motion.div>
    );
};

export default FeatureCard;
