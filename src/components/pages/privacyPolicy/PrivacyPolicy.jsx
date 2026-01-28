import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, Database, Lock, FileText, ChevronRight, Menu, Check, Globe } from 'lucide-react';
import heroImage from "@/assets/images/Luxor.webp";
import { cn } from "@/lib/utils";

const sections = [
    { id: 'intro', title: 'Introduction', icon: ShieldCheck },
    { id: 'collection', title: '1. Information We Collect', icon: Database },
    { id: 'usage', title: '2. How We Use Information', icon: Eye },
    { id: 'protection', title: '3. Data Protection', icon: Lock },
    { id: 'cookies', title: '4. Cookies', icon: FileText },
    { id: 'third-party', title: '5. Third-Party Links', icon: FileText },
    { id: 'rights', title: '6. Your Rights', icon: ShieldCheck },
    { id: 'contact', title: '7. Contact Us', icon: Globe }
];

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('intro');
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
                    <img src={heroImage} alt="Privacy Policy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-b from-[#22455C]/80 to-white/10" />
                </div>
                <div className="container-custom relative flex h-full items-end pb-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#BC8B22] font-bold uppercase tracking-widest text-sm mb-2 block">Privacy Framework</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair">Privacy Policy</h1>
                    </motion.div>
                </div>
            </section>

            <div className="container-custom py-16">
                <div className="flex flex-col lg:flex-row gap-12 relative">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="hidden lg:block w-80 sticky top-28 h-fit">
                        <div className="bg-slate-50 rounded-[32px] p-6 border border-slate-100">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Policy Navigation</h3>
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
                        <section id="intro" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8">Introduction</h2>
                            <div className="bg-[#FCF9F4] p-8 md:p-12 rounded-[40px] border-l-8 border-[#BC8B22] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BC8B22]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                                <p className="text-xl text-[#22455C] leading-relaxed font-playfair italic">
                                    "At The Bridge Travel, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or contact us to plan your trip."
                                </p>
                            </div>
                        </section>

                        <section id="collection" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">1</span>
                                Information We Collect
                            </h2>
                            <div className="space-y-4">
                                <p className="text-slate-600 text-lg font-medium mb-6">We may collect personal information such as:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Full name",
                                        "Email address",
                                        "Phone number",
                                        "Travel preferences and inquiries",
                                        "Booking form information"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                <Check className="text-[#BC8B22]" size={16} />
                                            </div>
                                            <span className="font-bold text-[#22455C]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="usage" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">2</span>
                                How We Use Your Information
                            </h2>
                            <div className="space-y-8">
                                <p className="text-slate-600 text-lg font-medium">Your information is used for the following purposes:</p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[
                                        "Respond to your inquiries and requests promptly",
                                        "Create and manage your tailored travel arrangements",
                                        "Send you quotes, itineraries, and booking confirmations",
                                        "Improve our services and website experience",
                                        "Communicate important updates related to your travel"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                            <div className="h-2 w-2 rounded-full bg-[#BC8B22] mt-2.5 shrink-0" />
                                            <p className="font-medium text-[#22455C]">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-8 bg-[#22455C] rounded-[40px] text-white overflow-hidden relative shadow-2xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC8B22]/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                                    <h4 className="text-[#BC8B22] font-black text-xs uppercase tracking-[0.2em] mb-4">Sharing Policy</h4>
                                    <p className="text-white/80 font-medium leading-relaxed italic">
                                        "We do not sell, rent, or share your personal data with third parties except when required to provide your travel services (hotels, cruise operators, airlines, or government authorities) or when legally required."
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="protection" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">3</span>
                                Data Protection
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                We take appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. Our systems are regularly reviewed to ensure the highest security standards.
                            </p>
                        </section>

                        <section id="cookies" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">4</span>
                                Cookies
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                Our website may use cookies to enhance your browsing experience, analyze website traffic, and improve our services. You may choose to disable cookies in your browser settings at any time.
                            </p>
                        </section>

                        <section id="third-party" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">5</span>
                                Third-Party Links
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                Our website may contain links to external websites. The Bridge Travel is not responsible for the privacy practices or content of those websites. We encourage you to read the privacy statements of any linked site.
                            </p>
                        </section>

                        <section id="rights" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">6</span>
                                Your Rights
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Access", desc: "Request access to your personal information held by us." },
                                    { title: "Correction", desc: "Ask for corrections or updates to your data." },
                                    { title: "Deletion", desc: "Request deletion of your data, subject to legal obligations." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-300">
                                        <h4 className="text-[#BC8B22] font-black text-xs uppercase tracking-[0.2em] mb-4 group-hover:scale-105 origin-left transition-transform">{item.title}</h4>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-32 border-t border-slate-100 pt-12">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-8">Contact & Policy Updates</h2>
                            <div className="space-y-8">
                                <p className="text-slate-600 leading-relaxed text-lg font-medium italic">
                                    "We may update this Privacy Policy from time to time. Any changes will be posted on this page."
                                </p>
                                <div className="bg-[#22455C] p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC8B22]/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                                    <h4 className="text-[#BC8B22] font-black text-xs uppercase tracking-[0.2em] mb-8 px-4">Get in Touch</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <Lock className="text-[#BC8B22]" size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Company</span>
                                                    <span className="text-xl font-bold font-playfair">The Bridge Travel</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <Globe className="text-[#BC8B22]" size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Location</span>
                                                    <span className="font-bold">Cairo, Egypt</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <Eye className="text-[#BC8B22]" size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Email</span>
                                                    <span className="font-bold underline decoration-[#BC8B22]/30">info@thebridgetravel.com</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <ShieldCheck className="text-[#BC8B22]" size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Phone / WhatsApp</span>
                                                    <span className="font-bold">+20 122 77 22233</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                        <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em]">The Bridge to Luxury Egypt Tours</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
