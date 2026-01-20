import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const BookingSidebar = ({ basePrice = 500 }) => {
    const [travellers, setTravellers] = useState(1);
    const [extras, setExtras] = useState({
        sunrise: false,
        guide: false,
        transport: false,
        lunch: false
    });

    const extraPrices = {
        sunrise: 25,
        guide: 45,
        transport: 60,
        lunch: 15
    };

    const calculateTotal = () => {
        const extrasTotal = Object.keys(extras).reduce((acc, key) => {
            return acc + (extras[key] ? extraPrices[key] : 0);
        }, 0);
        return (basePrice * travellers) + (extrasTotal * travellers);
    };

    return (
        <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-xl shadow-slate-100/50 sticky top-28">
            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-slate-50">
                <span className="text-slate-400 text-sm font-medium">From</span>
                <span className="text-3xl font-black text-[#22455C] tracking-tight">${basePrice.toFixed(2)}</span>
                <span className="text-slate-400 text-sm font-medium">per person</span>
            </div>

            <div className="space-y-6">
                <h3 className="text-lg font-black text-[#22455C] tracking-tight">Book This Tour</h3>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border-none focus:ring-2 focus:ring-[#BC8B22]/20 text-slate-700 font-medium placeholder:text-slate-400 transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border-none focus:ring-2 focus:ring-[#BC8B22]/20 text-slate-700 font-medium placeholder:text-slate-400 transition-all"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border-none focus:ring-2 focus:ring-[#BC8B22]/20 text-slate-700 font-medium placeholder:text-slate-400 transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Nationality"
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border-none focus:ring-2 focus:ring-[#BC8B22]/20 text-slate-700 font-medium placeholder:text-slate-400 transition-all"
                    />
                </div>

                <div className="space-y-3 pt-2">
                    <label className="text-sm font-black text-[#22455C] uppercase tracking-wider">No. of Travellers</label>
                    <input
                        type="number"
                        min="1"
                        value={travellers}
                        onChange={(e) => setTravellers(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border-none focus:ring-2 focus:ring-[#BC8B22]/20 text-slate-700 font-black transition-all"
                    />
                </div>

                <div className="space-y-4 pt-4">
                    <label className="text-sm font-black text-[#22455C] uppercase tracking-wider">Extra Options</label>

                    <div className="space-y-3">
                        {Object.entries(extraPrices).map(([key, price]) => (
                            <div key={key} className="flex items-center justify-between group cursor-pointer" onClick={() => setExtras(prev => ({ ...prev, [key]: !prev[key] }))}>
                                <div className="flex items-center gap-3">
                                    <div className={`h-6 w-6 rounded-md border-2 transition-all flex items-center justify-center ${extras[key] ? 'bg-[#BC8B22] border-[#BC8B22]' : 'border-slate-200 group-hover:border-[#BC8B22]/50'}`}>
                                        {extras[key] && <div className="w-1.5 h-3 border-r-2 border-b-2 border-white rotate-45 -mt-0.5"></div>}
                                    </div>
                                    <span className="text-sm font-bold text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')} Option</span>
                                </div>
                                <span className="text-sm font-black text-[#22455C]">(${price.toFixed(2)})</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-50">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-lg font-black text-[#22455C]">Total:</span>
                        <span className="text-2xl font-black text-[#BC8B22]">${calculateTotal().toFixed(2)}</span>
                    </div>

                    <Button className="w-full h-16 rounded-2xl bg-[#8B6E31] hover:bg-[#745C29] text-white font-black text-lg transition-all shadow-xl shadow-[#8B6E31]/20">
                        Booking Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BookingSidebar;
