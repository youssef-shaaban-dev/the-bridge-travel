import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#22455C] text-white pt-16 pb-8 font-playfair">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Logo" className="h-24 md:h-32 brightness-0 invert" />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            The Bridge Travel is a tour operator and travel agency providing services for groups and individuals traveling to Egypt.
                        </p>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-[#BC8B22] text-xl font-bold mb-5">Egypt Tours</h3>
                        <ul className="space-y-2.5">
                            <FooterLink text="Egypt Tour Packages" />
                            <FooterLink text="Nile Cruises" />
                            <FooterLink text="Day Excursions" />
                            <FooterLink text="Custom Egypt Tours" />
                        </ul>
                    </div>

                    {/* General Links */}
                    <div>
                        <h3 className="text-[#BC8B22] text-xl font-bold mb-5">Quick Links</h3>
                        <ul className="space-y-2.5">
                            <FooterLink text="Travel Guide" />
                            <FooterLink text="About Us" />
                            <FooterLink text="Contact Us" />
                            <FooterLink text="Terms & Conditions" />
                            <FooterLink text="Privacy Policy" />
                        </ul>
                    </div>
                    <TripAdvisorCard />

                </div>
                <ContactBar />

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-md text-slate-400 font-medium">
                    <p>© 2026 The Bridge Travel - All content is copyrighted. Unauthorized use, including AI training, reproduction, or commercial exploitation, is strictly prohibited.
                        Check our privacy policy.</p>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ text }) => (
    <li className="flex items-center gap-2 group cursor-pointer">
        <ChevronRight className="h-3 w-3 text-[#BC8B22] opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
        <span className="text-slate-300 group-hover:text-[#BC8B22] transition-colors text-sm">{text}</span>
    </li>
);

const SocialIcon = ({ icon }) => (
    <a href="#" className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:bg-[#BC8B22] hover:text-white hover:border-[#BC8B22] transition-all">
        {icon}
    </a>
);

const TripAdvisorCard = () => (
    <div className="bg-white rounded-[24px] p-5 text-slate-900 shadow-2xl overflow-hidden w-full max-w-[260px] h-fit">
        <div className="relative z-10">
            <div className="flex justify-center mb-3">
                <span className="bg-[#00AA6C]/10 text-[#00AA6C] px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase">Tripadvisor</span>
            </div>

            <h4 className="text-[#00473F] text-lg font-bold mb-3 text-center border-b border-slate-50 pb-2">
                The Bridge Travel
            </h4>

            <div className="space-y-2 text-center text-[12px]">
                <p className="text-slate-500 font-medium">Traveler Rating</p>
                <div className="flex flex-col items-center gap-1.5">
                    <div className="flex gap-1 justify-center">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-4 h-4 rounded-full bg-[#00AA6C]" />
                        ))}
                    </div>
                    <span className="text-slate-900 font-bold">22 reviews</span>
                </div>
                <a href="#" className="inline-block mt-1 text-xs font-bold text-[#00AA6C] hover:underline transition-all">
                    Read reviews
                </a>
            </div>
        </div>
    </div>
);

// Minimal Star Icon
const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

// Minimal Users Icon
const UsersIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

const ContactBar = () => (
    <div className="bg-white/5 backdrop-blur-sm rounded-[32px] p-6 mb-12 flex flex-wrap items-center justify-between gap-8 border border-white/10">
        <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#BC8B22]/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-[#BC8B22]" />
            </div>
            <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-0.5">Location</span>
                <span className="text-sm font-medium text-slate-200">El Nasr Road, Nasr City, Cairo - Egypt</span>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#BC8B22]/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-[#BC8B22]" />
            </div>
            <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-0.5">Call Us</span>
                <span className="text-sm font-medium text-slate-200">+20 122 77 22233 / +20 100 56 47138</span>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#BC8B22]/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-[#BC8B22]" />
            </div>
            <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-0.5">Email</span>
                <span className="text-sm font-medium text-slate-200">info@thebridgetravel.com</span>
            </div>
        </div>

        <div className="flex gap-4">
            <SocialIcon icon={<Facebook className="h-5 w-5" />} />
            <SocialIcon icon={<Twitter className="h-5 w-5" />} />
        </div>
    </div>
);

export default Footer;
