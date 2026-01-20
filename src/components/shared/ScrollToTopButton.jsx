import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-26 right-8 z-100 h-14 w-14 rounded-2xl bg-white border-2 border-[#BC8B22] text-[#BC8B22] flex items-center justify-center shadow-2xl backdrop-blur-md hover:bg-[#BC8B22] hover:text-white transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />

                    {/* Subtle Brand Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-[#BC8B22]/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Force usage of motion if linter misses JSX */}
                    <span className="hidden">{motion ? '' : ''}</span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
