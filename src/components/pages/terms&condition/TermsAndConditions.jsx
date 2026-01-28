import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Scale, Globe, AlertCircle, ClipboardCheck, Lock, ChevronRight, Menu, X } from 'lucide-react';
import heroImage from "@/assets/images/Jordan-03.webp";
import { cn } from "@/lib/utils";

const sections = [
    { id: 'booking', title: '1. Booking Security', icon: FileText },
    { id: 'payments', title: '2. Deposits & Payments', icon: Scale },
    { id: 'amendments', title: '3. Amendments', icon: ClipboardCheck },
    { id: 'rates', title: '4. Rates', icon: Globe },
    { id: 'cancellations', title: '5. Cancellations', icon: AlertCircle },
    { id: 'responsibility', title: '6. Responsibility', icon: Lock },
    { id: 'other', title: '7-13. General Terms', icon: FileText },
    { id: 'contact', title: '14. Contact', icon: Globe }
];

const TermsAndConditions = () => {
    const [activeSection, setActiveSection] = useState('booking');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroImage} alt="The Bridge Travel Terms" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-b from-[#22455C]/80 to-white/10" />
                </div>
                <div className="container-custom relative flex h-full items-end pb-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#BC8B22] font-bold uppercase tracking-widest text-sm mb-2 block">Legal Documentation</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair">Terms & Conditions</h1>
                    </motion.div>
                </div>
            </section>

            <div className="container-custom py-16">
                <div className="flex flex-col lg:flex-row gap-12 relative">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="hidden lg:block w-80 sticky top-28 h-fit">
                        <div className="bg-slate-50 rounded-[32px] p-6 border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Navigation</h3>
                            <nav className="space-y-1">
                                {sections.map((section) => {
                                    const Icon = section.icon;
                                    const isActive = activeSection === section.id;
                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={cn(
                                                "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 text-left group",
                                                isActive
                                                    ? "bg-[#22455C] text-white shadow-lg shadow-[#22455C]/10"
                                                    : "text-slate-500 hover:bg-white hover:text-[#22455C]"
                                            )}
                                        >
                                            <Icon size={18} className={cn(isActive ? "text-[#BC8B22]" : "text-slate-400 group-hover:text-[#BC8B22]")} />
                                            <span className="font-bold text-sm">{section.title}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Mobile Navigation Toggle */}
                    <div className="lg:hidden sticky top-24 z-30 mb-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-full bg-[#22455C] text-white p-4 rounded-2xl flex items-center justify-between shadow-xl"
                        >
                            <span className="flex items-center gap-3 font-bold">
                                <Menu size={20} />
                                {sections.find(s => s.id === activeSection)?.title || 'Navigation'}
                            </span>
                            <ChevronRight className={cn("transition-transform", isMobileMenuOpen && "rotate-90")} />
                        </button>

                        <AnimatePresence>
                            {isMobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-40"
                                >
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className="w-full p-4 text-left border-b border-slate-50 last:border-0 hover:bg-slate-50 font-bold text-slate-600 active:bg-slate-100"
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 space-y-24 pb-24">
                        <section id="booking" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">1</span>
                                Booking Security
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                All bookings must be requested in writing via email or through our website. Upon confirmation, clients must review and approve the final itinerary, services, and payment terms. Payments may be made by bank transfer or credit card (Visa / MasterCard).
                            </p>
                        </section>

                        <section id="payments" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">2</span>
                                Deposits & Payments
                            </h2>
                            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                                <p className="text-slate-600 leading-relaxed text-lg font-medium mb-6">
                                    A deposit of <span className="text-[#BC8B22] font-bold">50%</span> of the total tour cost is required to confirm any booking. The remaining balance must be paid no later than <span className="text-[#22455C] font-bold">45 days</span> prior to arrival.
                                </p>
                                <div className="p-6 bg-white rounded-3xl border border-slate-200">
                                    <h4 className="font-bold text-[#22455C] mb-2 text-sm uppercase tracking-wider">Note:</h4>
                                    <p className="text-slate-500 text-sm">For bookings made within 45 days of travel, full payment is required at the time of confirmation. During peak seasons (Christmas, New Year, and Easter), full payment is mandatory upon booking.</p>
                                </div>
                            </div>
                        </section>

                        <section id="amendments" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">3</span>
                                Amendments
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                Any amendments to confirmed bookings are subject to availability and may result in additional charges. Requests for changes should be made as early as possible.
                            </p>
                        </section>

                        <section id="rates" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">4</span>
                                Rates
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                All prices are quoted per person in <span className="text-[#BC8B22] font-bold">US Dollars</span> and include applicable taxes and service charges unless stated otherwise. Prices are subject to change in the event of increases in government fees, fuel surcharges, exchange rates, or supplier costs.
                            </p>
                        </section>

                        <section id="cancellations" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">5</span>
                                Cancellations
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { period: "45 days or more before arrival", charge: "No charge", type: "free" },
                                    { period: "44–21 days before arrival", charge: "25% of total cost" },
                                    { period: "20–15 days before arrival", charge: "50% of total cost" },
                                    { period: "14–8 days before arrival", charge: "75% of total cost" },
                                    { period: "Less than 7 days / No-show", charge: "100% of total cost", type: "full" }
                                ].map((item, idx) => (
                                    <div key={idx} className={cn(
                                        "p-6 rounded-[32px] border transition-all duration-300",
                                        item.type === 'free' ? "bg-green-50 border-green-100" :
                                            item.type === 'full' ? "bg-red-50 border-red-100 md:col-span-2" :
                                                "bg-slate-50 border-slate-100"
                                    )}>
                                        <div className="flex justify-between items-center gap-4">
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Time Period</p>
                                                <h4 className="font-bold text-[#22455C]">{item.period}</h4>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Charge</p>
                                                <h4 className={cn("text-xl font-black", item.type === 'free' ? "text-green-600" : "text-[#BC8B22]")}>
                                                    {item.charge}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="responsibility" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">6</span>
                                Responsibility
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                    The Bridge Travel acts solely as an intermediary between clients and service providers such as hotels, airlines, cruise companies, and transportation operators. The company shall not be liable for force majeure events, airline delays, weather conditions, political situations, acts of terrorism, natural disasters, or any supplier failures beyond its control.
                                </p>
                            </div>
                        </section>

                        <section id="other" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">7-13</span>
                                General Policies
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { id: 7, title: "Complaints", text: "Issues must be reported immediately to our local representative. Written complaints must be submitted within 14 days of tour completion." },
                                    { id: 8, title: "Insurance", text: "Clients are strongly advised to obtain comprehensive travel insurance covering medical, emergency evacuation, and trip cancellation." },
                                    { id: 9, title: "Baggage", text: "All luggage and personal belongings are carried at the client's own risk. The Bridge Travel is not responsible for loss, theft, or damage." },
                                    { id: 10, title: "Health", text: "Clients are responsible for ensuring they meet all health requirements and vaccination regulations prior to travel." },
                                    { id: 11, title: "Modifications", text: "The Bridge Travel reserves the right to modify these Terms & Conditions at any time." },
                                    { id: 12, title: "Data Protection", text: "Personal information is handled in accordance with our Privacy Policy and treated as strictly confidential." }
                                ].map((item) => (
                                    <div key={item.id} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                                        <span className="text-[#BC8B22] font-black text-xs uppercase tracking-[0.2em] mb-2 block">{item.id}. {item.title}</span>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                                <div className="md:col-span-2 p-8 rounded-[32px] bg-[#22455C] text-white">
                                    <span className="text-[#BC8B22] font-black text-xs uppercase tracking-[0.2em] mb-2 block">13. Governing Law</span>
                                    <p className="text-white/80 font-medium">All agreements shall be governed by and interpreted in accordance with the laws of the Arab Republic of Egypt.</p>
                                </div>
                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-32 border-t border-slate-100 pt-12">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8">14. Contact Details</h2>
                            <div className="bg-[#FCF9F4] p-10 rounded-[40px] border border-[#BC8B22]/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC8B22]/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-bold text-[#22455C] font-playfair">The Bridge Travel</h4>
                                        <p className="text-slate-500 font-medium">Cairo, Egypt</p>
                                        <a href="https://www.thebridgetravel.com" className="text-[#BC8B22] font-bold hover:underline block">www.thebridgetravel.com</a>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                                            <span className="font-bold text-[#22455C]">info@thebridgetravel.com</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone / WhatsApp</span>
                                            <span className="font-bold text-[#22455C]">+20 122 77 22233</span>
                                            <span className="font-bold text-[#22455C]">+20 100 56 47138</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                                    <p className="text-slate-400 text-xs italic font-medium">The Bridge Travel - The Bridge to Luxury Egypt Tours</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
