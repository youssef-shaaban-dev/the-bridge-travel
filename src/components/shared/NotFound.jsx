import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-32 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BC8B22]/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22455C]/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-30 animate-pulse"></div>

            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Big Error Number with Icon */}
                    <div className="relative inline-block mb-12">
                        <span className="text-[180px] md:text-[240px] font-black text-[#22455C]/5 leading-none select-none">404</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="text-[#BC8B22]"
                            >
                                <Compass size={120} className="md:size-[160px] opacity-20" />
                            </motion.div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-[#22455C] font-playfair mb-6 tracking-tight">
                        Lost in the <span className="text-[#BC8B22]">Ancient Sands</span>?
                    </h1>
                    
                    <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto">
                        Even the greatest explorers lose their way. The page you are looking for has been buried in time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            to="/" 
                            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#22455C] text-white font-black rounded-2xl hover:bg-[#1a3547] hover:-translate-y-1 transition-all shadow-xl shadow-[#22455C]/20 group"
                        >
                            <Home size={20} className="group-hover:animate-bounce" />
                            Return to Home
                        </Link>
                        <Link 
                            to="/Egypt-tours-package/cairo-and-alexandria" 
                            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#BC8B22]/20 text-[#22455C] font-black rounded-2xl hover:border-[#BC8B22] hover:bg-[#BC8B22]/5 transition-all group"
                        >
                            <MapPin size={20} className="text-[#BC8B22]" />
                            View Our Tours
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
