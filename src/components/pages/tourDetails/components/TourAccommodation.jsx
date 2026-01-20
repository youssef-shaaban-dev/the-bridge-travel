import React from 'react';
import { Hotel, Car, CheckCircle2 } from 'lucide-react';

const TourAccommodation = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
            {/* Hotels Card */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-14 w-14 rounded-2xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22] mb-6 group-hover:bg-[#BC8B22] group-hover:text-white transition-all duration-500">
                    <Hotel size={28} />
                </div>
                <h3 className="text-xl font-black text-[#22455C] mb-4 tracking-tight">Stay in Hand-Picked 4★ or 5★ Hotels</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Including options like <span className="text-[#22455C] font-bold">Steigenberger Pyramids</span>, <span className="text-[#22455C] font-bold">Ramses Hilton</span>, <span className="text-[#22455C] font-bold">Barceló Pyramids</span>, and more gems of Egyptian hospitality.
                </p>
            </div>

            {/* Comfort Card */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-14 w-14 rounded-2xl bg-[#22455C]/10 flex items-center justify-center text-[#22455C] mb-6 group-hover:bg-[#22455C] group-hover:text-white transition-all duration-500">
                    <Car size={28} />
                </div>
                <h3 className="text-xl font-black text-[#22455C] mb-4 tracking-tight">Travel in Comfort</h3>
                <ul className="space-y-3">
                    {["Private air-conditioned vehicle", "Private Egyptologist guide", "All entrance fees included", "Door-to-door service"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                            <CheckCircle2 size={16} className="text-[#BC8B22] shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TourAccommodation;
