import React from 'react';
import { Clock, MapPin, Info, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const DayExcursionCard = ({ excursion }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-[32px] overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-100 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={excursion.image}
                    alt={excursion.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm text-[#22455C] px-4 py-2 rounded-2xl font-bold shadow-lg flex items-center gap-1.5">
                        <span className="text-xs opacity-60 font-medium">From</span>
                        <span className="text-lg">${excursion.price}</span>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="px-3 py-1 bg-[#BC8B22] text-white text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-lg">
                        {excursion.duration}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-[#BC8B22]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{excursion.location}</span>
                </div>

                <h3 className="text-xl font-bold text-[#22455C] mb-3 font-playfair leading-tight group-hover:text-[#BC8B22] transition-colors line-clamp-2">
                    {excursion.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {excursion.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="text-[#22455C] font-bold text-sm flex items-center gap-2 hover:text-[#BC8B22] transition-colors relative group/btn overflow-hidden">
                                View Details
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:max-w-xl bg-white p-0 overflow-y-auto">
                            <ExcursionDetailsContent excursion={excursion} />
                        </SheetContent>
                    </Sheet>

                    <Button className="bg-[#22455C] hover:bg-[#BC8B22] text-white rounded-xl px-5 h-10 text-xs font-bold transition-all shadow-md active:scale-95">
                        Book Now
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

const ExcursionDetailsContent = ({ excursion }) => (
    <div className="flex flex-col h-full bg-[#FCF9F4]">
        <div className="relative h-[250px] shrink-0">
            <img src={excursion.image} alt={excursion.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#FCF9F4] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-3">
                    {excursion.tags?.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#BC8B22] text-white text-[9px] font-bold tracking-widest uppercase rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-2xl font-bold text-[#22455C] font-playfair">{excursion.title}</h2>
            </div>
        </div>

        <div className="px-8 py-8 space-y-8 flex-1 overflow-y-auto pb-32">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#BC8B22]">
                        <Clock className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Duration</p>
                        <p className="font-bold text-[#22455C] text-sm">{excursion.duration}</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#BC8B22]">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Location</p>
                        <p className="font-bold text-[#22455C] text-sm">{excursion.location}</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-sm font-bold text-[#22455C] uppercase tracking-[0.2em] mb-4">Overview</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                    {excursion.longDescription || excursion.description}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <h4 className="text-xs font-black text-[#6B8E23] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        What's Included
                    </h4>
                    <ul className="space-y-3">
                        {excursion.includes.map((item, i) => (
                            <li key={i} className="text-xs text-slate-500 flex items-start gap-2 leading-relaxed">
                                <div className="h-1 w-1 rounded-full bg-[#BC8B22] mt-1.5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <X className="h-4 w-4" />
                        What's Not Included
                    </h4>
                    <ul className="space-y-3">
                        {excursion.notIncludes.map((item, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed italic">
                                <div className="h-1 w-1 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#22455C]/5 border border-[#22455C]/10">
                <h4 className="text-xs font-bold text-[#22455C] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#BC8B22]" />
                    Tour Details
                </h4>
                <div className="space-y-3 text-xs">
                    {Object.entries(excursion.details).map(([key, value], i) => (
                        <p key={i} className="text-slate-600">
                            <span className="font-bold text-[#22455C] capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
                        </p>
                    ))}
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 flex items-center justify-between">
            <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Price per person</p>
                <p className="text-2xl font-bold text-[#22455C]">${excursion.price}</p>
            </div>
            <Button className="bg-[#BC8B22] hover:bg-[#22455C] text-white px-10 py-6 rounded-2xl font-bold transition-all shadow-xl shadow-[#BC8B22]/20">
                Book This Tour
            </Button>
        </div>
    </div>
);

export default DayExcursionCard;
