import React from 'react';
import { ShieldCheck, UserCheck, Settings2, Sparkles, HeartHandshake } from 'lucide-react';

const WhyBookWithUs = () => {
    const reasons = [
        { icon: ShieldCheck, title: "Designed for Western travelers" },
        { icon: UserCheck, title: "English-speaking expert guides" },
        { icon: Settings2, title: "Private, flexible, and worry-free" },
        { icon: Sparkles, title: "Luxury service at exceptional value" },
        { icon: HeartHandshake, title: "Safe, comfortable, and fully supported" }
    ];

    return (
        <div className="pt-16 pb-12">
            <div className="bg-[#F8FAFC] rounded-[48px] p-8 md:p-12 border border-slate-100">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-[#22455C] font-playfair tracking-tight mb-4">Why Book This Tour?</h2>
                    <div className="h-1 w-20 bg-[#BC8B22] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-50 group hover:-translate-y-1 transition-all duration-300">
                            <div className="h-12 w-12 rounded-2xl bg-[#BC8B22]/5 flex items-center justify-center text-[#BC8B22] group-hover:bg-[#BC8B22] group-hover:text-white transition-all">
                                <item.icon size={24} />
                            </div>
                            <span className="text-[#22455C] font-bold text-sm md:text-base leading-tight">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center space-y-6">
                    <p className="text-xl md:text-2xl font-bold text-[#22455C] italic leading-relaxed">
                        "Turn your dream of Egypt into a once-in-a-lifetime journey."
                    </p>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium text-lg leading-relaxed">
                        This is not just a tour - it’s your personal gateway to the wonders of Egypt with
                        <p className="text-[#22455C] font-black decoration-4 underline-offset-4">The Bridge Travel</p>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyBookWithUs;
