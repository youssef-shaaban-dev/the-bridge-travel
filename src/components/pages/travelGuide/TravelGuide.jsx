import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ShieldCheck, MapPin, Calendar, Camera, Wallet, Waves, Globe, Zap, History, Sparkles, Heart } from 'lucide-react';
import heroImage from "@/assets/hero/egyptian-Museum.webp";
import logo from "@/assets/logo.png";

const faqData = [
    {
        question: "Is Egypt safe for tourists?",
        answer: "Yes. Egypt is a safe and well-established destination for tourism. Main tourist areas such as Cairo, Luxor, Aswan, the Red Sea resorts, and Nile Cruise routes are highly secured and well-organized for visitors."
    },
    {
        question: "Do I need a visa to enter Egypt?",
        answer: "Most travelers from the USA, UK, Australia, and Europe can obtain a visa on arrival or apply for an e-visa online before travel."
    },
    {
        question: "What is the best time to visit Egypt?",
        answer: "The best time is from October to April, when the weather is mild and perfect for sightseeing and Nile Cruises. Summer (May–September) is ideal for Red Sea resorts like Sharm El Sheikh and Hurghada."
    },
    {
        question: "What should I wear in Egypt?",
        answer: "Light, comfortable clothing is recommended. In religious sites, modest attire is required (covered shoulders and knees). In resorts, casual summer wear is fine."
    },
    {
        question: "Is tipping expected in Egypt?",
        answer: "Tipping (known as “baksheesh”) is customary for guides, drivers, cruise staff, and hotel services. It is appreciated but always optional."
    },
    {
        question: "What currency is used in Egypt?",
        answer: "The Egyptian Pound (EGP). US Dollars and Euros are widely accepted in tourist areas, and credit cards are commonly used in hotels and cruises."
    },
    {
        question: "Can I drink tap water?",
        answer: "It is recommended to drink only bottled water, which is widely available and inexpensive."
    },
    {
        question: "Are Nile Cruises suitable for families and seniors?",
        answer: "Absolutely. Nile Cruises offer comfortable cabins, elevators on many ships, smooth sailing, and guided sightseeing at a relaxed pace."
    },
    {
        question: "What languages are spoken?",
        answer: "Arabic is the official language, but English is widely spoken in hotels, cruise ships, and tourist sites."
    },
    {
        question: "What power plugs are used?",
        answer: "Type C & F (European standard). A universal adapter is recommended."
    },
    {
        question: "Is Wi-Fi available?",
        answer: "Most hotels, cruises, and cafes provide Wi-Fi. You can also buy a local SIM card for fast mobile internet."
    }
];

const mustSeePlaces = [
    { title: "Giza Pyramids & Sphinx", icon: <History className="h-6 w-6" /> },
    { title: "Egyptian Museum & GEM", icon: <Sparkles className="h-6 w-6" /> },
    { title: "Nile Cruise (Luxor-Aswan)", icon: <Waves className="h-6 w-6" /> },
    { title: "Karnak & Valleys", icon: <Globe className="h-6 w-6" /> },
    { title: "Abu Simbel", icon: <Zap className="h-6 w-6" /> },
    { title: "Red Sea Resorts", icon: <Camera className="h-6 w-6" /> },
    { title: "Alexandria Coast", icon: <MapPin className="h-6 w-6" /> }
];

const TravelGuide = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Travel Guide"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container-custom relative flex h-full items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl font-playfair">
                            Travel Guide
                        </h1>
                        <div className="mx-auto h-1 w-24 bg-[#BC8B22]" />
                        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto italic">
                            Everything You Need to Know Before Traveling to Egypt
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Message */}
            <section className="py-20 bg-[#FCF9F4]">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-3xl font-bold text-[#22455C] mb-8 font-playfair md:text-4xl"
                        >
                            Welcome to Egypt!
                        </motion.h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-0">
                            To help you plan a smooth, safe, and unforgettable journey, here are the most frequently asked questions by travelers from the USA, UK, Australia, and around the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="section-padding overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Summary Column */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <span className="text-sm font-bold tracking-widest text-[#BC8B22] uppercase">Expert Advice</span>
                            <h2 className="mt-4 mb-6 text-4xl font-bold text-[#22455C] font-playfair leading-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 mb-8 font-medium">
                                Get essential insights from our local experts to prepare for your premium Egyptian experience.
                            </p>
                            <div className="p-6 rounded-3xl bg-[#22455C] text-white">
                                <ShieldCheck className="h-10 w-10 text-[#BC8B22] mb-4" />
                                <h4 className="font-bold text-lg mb-2">Safe & Secure</h4>
                                <p className="text-sm text-white/70 font-light leading-relaxed">
                                    Your safety is our priority. We monitor local situations 24/7 to ensure your peace of mind.
                                </p>
                            </div>
                        </div>

                        {/* Questions Column */}
                        <div className="lg:col-span-8 space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className="overflow-hidden">
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        className={`w-full flex items-center justify-between p-3 md:p-4 rounded-[40px] transition-all duration-300 group ${openIndex === index
                                            ? 'bg-[#22455C] shadow-lg shadow-[#22455C]/20'
                                            : 'bg-[#22455C] hover:bg-[#2c5774]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 md:gap-6">
                                            {/* Index Circle */}
                                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#BC8B22] flex items-center justify-center text-white font-black text-lg shadow-inner shadow-black/20 shrink-0">
                                                {index + 1}
                                            </div>

                                            {/* Question Title */}
                                            <span className={`text-left text-sm md:text-lg font-bold text-white tracking-tight ${openIndex === index ? 'opacity-100' : 'opacity-90'}`}>
                                                {faq.question}
                                            </span>
                                        </div>

                                        {/* Chevron Icon */}
                                        <div className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                                            <ChevronDown className="text-white/60 group-hover:text-white" size={24} />
                                        </div>
                                    </button>

                                    {/* Accordion Content */}
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="px-16 md:px-24 py-6">
                                                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 relative">
                                                        {/* Decorative indicator line */}
                                                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#BC8B22] rounded-r-full"></div>

                                                        <p className="text-[#22455C] leading-relaxed font-semibold text-base md:text-lg opacity-80">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Must-See Places Section */}
            <section className="section-padding bg-[#22455C] text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold font-playfair mb-4 md:text-5xl">Must-See Places In Egypt</h2>
                        <div className="mx-auto w-20 h-1 bg-[#BC8B22] mb-12" />
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {mustSeePlaces.map((place, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col items-center group hover:bg-white/10 transition-all hover:-translate-y-2"
                            >
                                <div className="h-16 w-16 rounded-full bg-[#BC8B22]/10 border border-[#BC8B22]/20 flex items-center justify-center mb-6 group-hover:bg-[#BC8B22] group-hover:text-white transition-all">
                                    <div className="text-[#BC8B22] group-hover:text-white">
                                        {place.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold font-playfair tracking-wide group-hover:text-[#BC8B22] transition-colors">
                                    {place.title}
                                </h3>
                            </motion.div>
                        ))}
                        {/* Customization Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="p-8 rounded-[40px] bg-[#BC8B22] flex flex-col items-center justify-center text-center col-span-2 lg:col-span-1"
                        >
                            <Heart className="h-10 w-10 text-white mb-4 animate-pulse" />
                            <h3 className="text-lg font-bold mb-2">Custom Tours</h3>
                            <p className="text-xs text-white/80 font-light">Tailored to your budget & interests</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Info Cards */}
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

            {/* Confidence Section */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold font-playfair text-[#22455C] mb-8 md:text-5xl tracking-tight leading-tight">
                            Travel with Confidence
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-8 italic text-slate-500 text-lg leading-relaxed">
                            <p>
                                With professional Egyptologist guides, luxury transportation, selected hotels and cruises, and 24/7 local support, The Bridge Travel ensures your journey is safe, comfortable, and unforgettable.
                            </p>
                            <div className="flex flex-col items-center gap-6 pt-6 not-italic">
                                <img src={logo} alt="Logo" className="h-16 object-contain opacity-30 grayscale" />
                                <h3 className="text-2xl font-bold text-[#BC8B22] font-playfair">
                                    The Bridge Travel - The Bridge to Luxury Egypt Tours
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* Background decorative element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.02] -rotate-12">
                    <Globe className="w-full h-full text-[#22455C]" />
                </div>
            </section>
        </div>
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

export default TravelGuide;
