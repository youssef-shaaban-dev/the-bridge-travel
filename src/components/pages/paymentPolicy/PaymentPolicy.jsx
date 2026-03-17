import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Scale, Globe, AlertCircle, ClipboardCheck, ChevronRight, Menu } from 'lucide-react';
import heroImage from "@/assets/images/Jordan-03.webp";
import { cn } from "@/lib/utils";
import SEO from '@/components/shared/SEO';

const sections = [
    { id: 'payment-policy', title: '1. Payment Policy', icon: FileText },
    { id: 'payment-method', title: '2. Payment Method', icon: Scale },
    { id: 'cancellation', title: '3. Cancellation Policy', icon: AlertCircle },
    { id: 'children', title: '4. Children Policy', icon: ClipboardCheck },
    { id: 'tour-leader', title: '5. Tour Leader Policy', icon: Globe }
];

const PaymentPolicy = () => {
    const [activeSection, setActiveSection] = useState('payment-policy');
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
            <SEO
                title="Payment Policy"
                description="Read the payment policy of booking with The Bridge Travel. Essential information about payment, cancellations, and policies."
            />
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroImage} alt="The Bridge Travel Payment Policy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-b from-[#22455C]/80 to-white/10" />
                </div>
                <div className="container-custom relative flex h-full items-end pb-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#BC8B22] font-bold uppercase tracking-widest text-sm mb-2 block">Legal Documentation</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair">Payment Policy</h1>
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
                        <section id="payment-policy" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">1</span>
                                Payment Policy
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-[#22455C] text-xl mb-3">Individual Travelers less than 15 persons</h3>
                                    <ul className="list-disc list-inside text-slate-600 leading-relaxed text-lg font-medium space-y-2">
                                        <li><span className="text-[#BC8B22] font-bold">50%</span> of total bill must be paid upon confirmation of reservation by Wire Transfer or through Western Union.</li>
                                        <li>The <span className="text-[#BC8B22] font-bold">50%</span> rest of payment to be paid in cash to our representative upon arrival to Cairo.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#22455C] text-xl mb-3">Groups 15 persons & up</h3>
                                    <ul className="list-disc list-inside text-slate-600 leading-relaxed text-lg font-medium space-y-2">
                                        <li><span className="text-[#BC8B22] font-bold">50%</span> must be paid upon confirmation.</li>
                                        <li><span className="text-[#BC8B22] font-bold">50%</span> 25 days prior to the arrival date.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="payment-method" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">2</span>
                                Payment Method Information
                            </h2>
                            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                                <h3 className="font-bold text-[#22455C] text-xl mb-6">The Bank Wire Transfer Details:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 text-slate-600 font-medium">
                                    <div className="md:col-span-2">
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">Bank Name</span>
                                        <span className="text-lg">National Bank of Egypt - El-Golf Branch</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">Swift Code</span>
                                        <span className="text-lg font-mono tracking-wide text-[#22455C]">NBEGEGCX138</span>
                                    </div>
                                    <div className="md:col-span-2 break-all">
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">IBAN</span>
                                        <span className="text-lg font-mono tracking-wide text-[#22455C]">EG330003013850002536643010190</span>
                                    </div>
                                    <div className="md:col-span-2 break-all">
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">Account Number by USA</span>
                                        <span className="text-lg font-mono tracking-wide text-[#22455C]">1385000253664301019</span>
                                    </div>
                                    <div className="md:col-span-2">
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">Full Name</span>
                                        <span className="text-lg font-bold">Ahmed Hamdy Mahmoud Younes</span>
                                    </div>
                                    <div className="md:col-span-2">
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">Address</span>
                                        <span>5 Sakaliya Street Nasr city Cairo – Egypt</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 uppercase text-xs tracking-wider block mb-1">Phone Number</span>
                                        <span className="font-mono tracking-wide">+201227722233</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="cancellation" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">3</span>
                                Cancellation Policy
                            </h2>
                            
                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-bold text-[#22455C] text-xl mb-3">Individual Travelers</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg font-medium mb-4">
                                        For any cancellation before arrival date <span className="font-bold text-[#BC8B22]">10%</span> of total bill will be charged as cancellation fees in return of management and office fees.
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 leading-relaxed text-lg font-medium space-y-2">
                                        <li><span className="font-bold text-[#22455C]">45 days before arrival date:</span> no cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">35 days before arrival date:</span> 25% of total bill will be charged as cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">25 days before arrival date:</span> 50% of total bill will be charged as cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">10 days before arrival date:</span> 100% of total bill will be charged as cancellation fees.</li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-[#FCF9F4] rounded-3xl border border-[#BC8B22]/20">
                                    <h4 className="font-bold text-[#BC8B22] mb-2 text-sm uppercase tracking-wider">Note:</h4>
                                    <p className="text-slate-600 font-medium">Except peak period from 22/12 till 07/01 & Eastern holidays & high seasons periods around the year must be revised with your tour operator upon confirmation of your reservation by correspondence for down payment policy.</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#22455C] text-xl mb-3">Groups</h3>
                                    <ul className="list-disc list-inside text-slate-600 leading-relaxed text-lg font-medium space-y-2">
                                        <li><span className="font-bold text-[#22455C]">50 days before arrival date:</span> no cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">40 days before arrival date:</span> 25% of total bill will be charged as cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">35 days before arrival date:</span> 50% of total bill will be charged as cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">30 days before arrival date:</span> 100% of total bill will be charged as cancellation fees.</li>
                                        <li><span className="font-bold text-[#22455C]">100%</span> will be charged as a cancellation fees in case of no show.</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
                                    <h3 className="font-bold text-[#22455C] text-xl mb-3">Cancellation Policy for Sleeping train:</h3>
                                    <ul className="list-disc list-inside text-slate-600 leading-relaxed font-medium space-y-2">
                                        <li><span className="font-bold text-[#22455C]">48 Hours before train departure:</span> 20% cancellation fee</li>
                                        <li><span className="font-bold text-[#22455C]">Less than 48 hours before departure:</span> cancellation fee will apply 25%</li>
                                        <li><span className="font-bold text-[#22455C]">Less than 24 hours:</span> Full payment (no Refund)</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
                                    <h3 className="font-bold text-[#22455C] text-xl mb-3">Cancellation Policy for Domestic Flights:</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Domestic airfares are subject to different rules and cancellation fees: some maybe non-refundable. Details will be quoted per case.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="children" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">4</span>
                                Children Policy
                            </h2>
                            <div className="space-y-6">
                                <ul className="list-disc list-inside text-slate-600 leading-relaxed text-lg font-medium space-y-3">
                                    <li>Children till 2 years old will be charge only <span className="font-bold text-[#BC8B22]">20%</span> of domestic airfare.</li>
                                    <li>Children between 2 / 12 years old will be charge with <span className="font-bold text-[#BC8B22]">60%</span> of total bill & sharing with parent's room in hotels & Cruises (***Excepted Domestic Flight will be 68% from adult's rate).</li>
                                    <li>Children more than 12 years old: are considered as adults.</li>
                                    <li>Children between above 9 Years old will be considered as an adult in Sleeping Train.</li>
                                </ul>

                                <div className="p-6 bg-white rounded-3xl border border-slate-200">
                                    <h4 className="font-bold text-[#22455C] mb-2 text-sm uppercase tracking-wider">Please Note:</h4>
                                    <ul className="list-disc list-inside text-slate-500 text-sm space-y-1">
                                        <li>Children age will be calculated according to the documented date of birth.</li>
                                        <li>For the domestic air fare, children will be charged according to their exact age on the day of the internal travel & for the hotels they will be charged according to the check-in day.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="tour-leader" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#22455C] font-playfair mb-6 flex items-center gap-4">
                                <span className="h-10 w-10 rounded-xl bg-[#BC8B22]/10 flex items-center justify-center text-[#BC8B22]">5</span>
                                Tour Leader Policy
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium mb-6">
                                For every 21 paying persons, the 22th person will be <span className="text-[#BC8B22] font-bold">free of charge</span> staying in a double cabin. (A maximum of one double cabin is allowed.)
                            </p>
                            <p className="text-slate-500 italic">In case the Egyptian laws are changed, the new laws will prevail.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPolicy;
