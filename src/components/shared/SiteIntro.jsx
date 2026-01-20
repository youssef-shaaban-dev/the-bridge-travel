import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SiteIntro = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // Keep it just for initial mount
            const finishTimer = setTimeout(() => setIsVisible(false), 2000);
            return () => clearTimeout(finishTimer);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="intro-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#22455C]/95" // Almost solid but clean dark navy
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 1, 
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex flex-col items-center"
                    >
                        {/* Main Logo from public folder */}
                        <div className="relative mb-6">
                            <motion.img 
                                src="/logo.png" 
                                alt="The Bridge Travel" 
                                className="h-32 md:h-40 w-auto object-contain drop-shadow-[0_0_30px_rgba(188,139,34,0.3)]"
                                initial={{ filter: "brightness(0.8)" }}
                                animate={{ filter: "brightness(1.1)" }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </div>

                        {/* Minimalist divider line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 120, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                            className="h-[1px] bg-[#BC8B22]/50"
                        />
                    </motion.div>

                    {/* Clean exit reveal line at bottom */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#BC8B22] origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SiteIntro;
