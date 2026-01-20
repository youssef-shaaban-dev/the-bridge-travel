import React from 'react';
import { Check, X } from 'lucide-react';

const TourInclusions = ({ inclusions = [], exclusions = [] }) => {
    return (
        <div className="pt-12">
            <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-[#BC8B22] rounded-full"></div>
                <h2 className="text-2xl font-black text-[#22455C] tracking-tight">Included / Not Included</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions Card */}
                <div className="bg-[#F8FAFC] rounded-[32px] p-8 border border-emerald-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <h3 className="text-xl font-black text-[#22455C]">What's Included</h3>
                    </div>

                    <ul className="space-y-4">
                        {inclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span className="text-slate-600 font-medium leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Exclusions Card */}
                <div className="bg-[#F8FAFC] rounded-[32px] p-8 border border-red-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-red-500/10 transition-colors"></div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-xl bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                            <X size={20} strokeWidth={3} />
                        </div>
                        <h3 className="text-xl font-black text-[#22455C]">Not Included</h3>
                    </div>

                    <ul className="space-y-4">
                        {exclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                                <span className="text-slate-600 font-medium leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TourInclusions;
