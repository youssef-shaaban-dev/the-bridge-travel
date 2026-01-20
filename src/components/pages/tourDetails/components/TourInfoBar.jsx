import React from 'react';
import { Clock, Tag } from 'lucide-react';

const TourInfoBar = ({ duration, category }) => {
    return (
        <div className="flex flex-wrap items-center gap-4 md:gap-8 bg-[#F8FAFC] p-4 md:p-6 rounded-3xl border border-slate-100 mb-8">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-50">
                    <Clock className="h-6 w-6 text-[#BC8B22]" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1.5">Duration</p>
                    <p className="text-base font-bold text-[#22455C] tracking-tight">{duration}</p>
                </div>
            </div>

            <div className="h-10 w-px bg-slate-200 hidden md:block mx-2"></div>

            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-50">
                    <Tag className="h-6 w-6 text-[#BC8B22]" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1.5">Category</p>
                    <p className="text-base font-bold text-[#22455C] tracking-tight">{category}</p>
                </div>
            </div>
        </div>
    );
};

export default TourInfoBar;
