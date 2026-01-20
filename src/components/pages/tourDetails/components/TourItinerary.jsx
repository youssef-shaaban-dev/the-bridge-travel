import React from 'react';

const TourItinerary = ({ itinerary }) => {
    const defaultItinerary = [
        {
            day: 1,
            title: "Arrival in Cairo",
            description: "Welcome to the mystical lands of Egypt, where the Pharaohs ruled for thousands of years. Upon your arrival at Cairo International Airport, your tour manager will meet and assist you and ease the process by helping you to get the entry visa."
        }
    ];

    const data = itinerary || defaultItinerary;

    return (
        <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#22455C] font-playfair tracking-tight">What To Expect</h2>

            <div className="space-y-0">
                {data.map((item, idx) => (
                    <div key={idx} className="relative pl-12 pb-12 last:pb-0 group">
                        {/* Timeline Line */}
                        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-slate-100 group-last:hidden"></div>

                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-0 h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center z-10 shadow-sm group-hover:border-[#BC8B22] group-hover:bg-[#BC8B22]/5 transition-all duration-300">
                            <span className="text-sm font-black text-[#BC8B22]">{item.day}</span>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-[#22455C] tracking-tight">
                                Day {item.day}: {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourItinerary;
