import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Facebook, Instagram, Twitter, Youtube, X ,Phone} from 'lucide-react';

const SocialFloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { icon: <Phone className="h-5 w-5" />, color: "bg-[#25D366]", label: "whatsApp" },
        { icon: <Facebook className="h-5 w-5" />, color: "bg-[#1877F2]", label: "Facebook" },
        { icon: <Instagram className="h-5 w-5" />, color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]", label: "Instagram" },
        { icon: <Twitter className="h-5 w-5" />, color: "bg-[#1DA1F2]", label: "Twitter" },
        { icon: <Youtube className="h-5 w-5" />, color: "bg-[#FF0000]", label: "Youtube" },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-100 flex flex-col items-center gap-4">
            {/* Social Icons Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, x: -5 }}
                                className={`h-12 w-12 rounded-full ${link.color} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative group`}
                            >
                                {link.icon}
                                <span className="absolute right-full mr-3 px-2 py-1 bg-white text-slate-900 text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none whitespace-nowrap">
                                    {link.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button (Brand Styled) */}
            <div className="relative">
                {/* Glow Effect Animation (Brand Gold) */}
                {!isOpen && (
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.1, 0.4]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-[#BC8B22] rounded-full blur-xl"
                    />
                )}

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative h-16 w-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 z-10 ${isOpen ? 'bg-[#22455C]' : 'bg-[#BC8B22] text-white hover:bg-[#A67A1D]'}`}
                >
                    {isOpen ? (
                        <X className="h-8 w-8 text-white" />
                    ) : (
                        <div className="relative">
                            <MessageCircle className="h-9 w-9 text-white group-hover:scale-110 transition-transform" />
                            {/* Ping dots */}
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                        </div>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default SocialFloatingButton;
