import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Wallet } from 'lucide-react';

const TravelGuideInfoBoxes = () => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InfoBox
                        title="Health & Safety"
                        icon={<ShieldCheck className="h-8 w-8" />}
                        text="Major cities and tourist areas have modern hospitals and pharmacies. Travel insurance is always recommended."
                    />
                    <InfoBox
                        title="Stay Duration"
                        icon={<Calendar className="h-8 w-8" />}
                        text="Ideal: 7-10 days for Cairo + Nile Cruise. 10-14 days if adding Red Sea resorts."
                    />
                    <InfoBox
                        title="Money & Tech"
                        icon={<Wallet className="h-8 w-8" />}
                        text="EGP is the official currency. Type C & F plugs. Local SIM cards recommended for internet."
                    />
                </div>
            </div>
        </section>
    );
};

const InfoBox = ({ title, icon, text }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-10 rounded-[48px] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group"
    >
        <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#BC8B22] mb-6 group-hover:bg-[#BC8B22] group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <h3 className="font-bold text-[#22455C] mb-4 uppercase tracking-widest text-sm">{title}</h3>
        <p className="text-slate-500 leading-relaxed font-medium">
            {text}
        </p>
    </motion.div>
);

export default TravelGuideInfoBoxes;
