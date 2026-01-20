import React from 'react';
import { Tag } from 'lucide-react';

const TourPricing = () => {
    const rates = [
        { grade: "4★ Experience", price: "635", description: "Premium Comfort" },
        { grade: "5★ Luxury", price: "735", description: "Ultimate Elegance", featured: true }
    ];

    return (
        <div className="pt-12">
            <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-[#BC8B22] rounded-full"></div>
                <h2 className="text-2xl font-black text-[#22455C] tracking-tight">Tour Rates</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {rates.map((rate, idx) => (
                    <div
                        key={idx}
                        className={`relative rounded-3xl p-8 border transition-all duration-500 ${rate.featured
                                ? 'bg-[#22455C] border-[#22455C] shadow-xl shadow-[#22455C]/20 text-white'
                                : 'bg-white border-slate-100 hover:border-[#BC8B22]/30 shadow-sm'
                            }`}
                    >
                        {rate.featured && (
                            <div className="absolute -top-3 right-8 bg-[#BC8B22] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                                Recommended
                            </div>
                        )}
                        <div className="mb-6">
                            <h4 className={`text-sm font-black uppercase tracking-widest mb-1 ${rate.featured ? 'text-[#BC8B22]' : 'text-slate-400'}`}>
                                {rate.description}
                            </h4>
                            <h3 className={`text-2xl font-black ${rate.featured ? 'text-white' : 'text-[#22455C]'}`}>
                                {rate.grade}
                            </h3>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className={`text-sm font-bold ${rate.featured ? 'text-white/60' : 'text-slate-400'}`}>From</span>
                            <span className={`text-4xl font-black ${rate.featured ? 'text-[#BC8B22]' : 'text-[#22455C]'}`}>${rate.price}</span>
                            <span className={`text-sm font-medium ${rate.featured ? 'text-white/40' : 'text-slate-400'}`}>/ per person</span>
                        </div>
                        <p className={`mt-4 text-xs font-bold italic ${rate.featured ? 'text-white/30' : 'text-slate-300'}`}>
                            (Double occupancy - private tour)
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourPricing;
