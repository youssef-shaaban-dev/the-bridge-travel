import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NileCruiseCard = ({ cruise }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-[32px] overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-100 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Link to={`/nile-cruise/${cruise.slug}`}>
                    <img
                        src={cruise.images[0]}
                        alt={cruise.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>

                <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm text-[#22455C] px-4 py-2 rounded-2xl font-bold shadow-lg flex items-center gap-1.5">
                        <span className="text-xs opacity-60 font-medium font-playfair lowercase">from</span>
                        <span className="text-lg">${cruise.price}</span>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="px-3 py-1 bg-[#BC8B22] text-white text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-lg">
                        {cruise.duration}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-[#BC8B22]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{cruise.location}</span>
                </div>

                <Link to={`/nile-cruise/${cruise.slug}`}>
                    <h3 className="text-xl font-bold text-[#22455C] mb-3 font-playfair leading-tight group-hover:text-[#BC8B22] transition-colors line-clamp-2 min-h-[56px]">
                        {cruise.title}
                    </h3>
                </Link>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {cruise.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link to={`/nile-cruise/${cruise.slug}`} className="text-[#22455C] font-bold text-sm flex items-center gap-2 hover:text-[#BC8B22] transition-colors relative group/btn overflow-hidden">
                        View Itinerary
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <Link to={`/nile-cruise/${cruise.slug}#booking-section`}>
                        <Button className="bg-[#22455C] hover:bg-[#BC8B22] text-white rounded-xl px-5 h-10 text-xs font-bold transition-all shadow-md active:scale-95">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default NileCruiseCard;
