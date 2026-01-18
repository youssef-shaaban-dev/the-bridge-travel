import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#22455C] text-white pt-20 pb-10 font-playfair">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Logo" className="h-12 brightness-0 invert" />
                            <h2 className="text-2xl font-bold leading-tight">the bridge travel</h2>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            the bridge travel best travel agency in Egypt specialized in providing professional advice on planning Travel Packages, Nile Cruises and Day Tours.
                        </p>
                        <div className="space-y-4 pt-4">
                            <ContactLink icon={<MapPin className="h-5 w-5" />} text="El Fardous Tower El Fayrouz District, Luxor, Egypt" />
                            <ContactLink icon={<Phone className="h-5 w-5" />} text="+1 (917) 267-8628" />
                            <ContactLink icon={<Phone className="h-5 w-5" />} text="+201004880015" />
                            <ContactLink icon={<Mail className="h-5 w-5" />} text="info@thebridgetravel.com" />
                        </div>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-[#BC8B22] text-xl font-bold mb-8">Destinations</h3>
                        <ul className="space-y-4">
                            <FooterLink text="Egypt" />
                            <FooterLink text="Jordan" />
                            <FooterLink text="Dubai" />
                            <FooterLink text="Morocco" />
                            <FooterLink text="Oman" />
                            <FooterLink text="Turkey" />
                            <FooterLink text="African Safari" />
                        </ul>
                    </div>

                    {/* General Links */}
                    <div>
                        <h3 className="text-[#BC8B22] text-xl font-bold mb-8">General</h3>
                        <ul className="space-y-4">
                            <FooterLink text="About Luxor and Aswan Travel" />
                            <FooterLink text="Why Luxor and Aswan Travel" />
                            <FooterLink text="Terms and Conditions" />
                            <FooterLink text="Privacy Policy" />
                            <FooterLink text="Travel Tips" />
                            <FooterLink text="Blog" />
                        </ul>
                    </div>

                    {/* Award Card */}
                    <div className="relative">
                        <div className="bg-white rounded-[32px] p-8 text-slate-900 text-center shadow-2xl">
                            <div className="flex justify-center gap-2 mb-4">
                                <span className="bg-[#FFBB00]/10 text-[#FFBB00] p-1 rounded-full"><StarIcon className="h-4 w-4" /></span>
                                <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500">2025</span>
                            </div>

                            {/* Tripadvisor Badge Fake */}
                            <div className="bg-[#00AF87] rounded-2xl p-4 mb-6 relative overflow-hidden flex flex-col items-center">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                                <svg viewBox="0 0 100 60" className="w-16 h-10 fill-white mb-2">
                                    <path d="M50 0c-27.6 0-50 22.4-50 50h100c0-27.6-22.4-50-50-50zm0 40c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" />
                                    <circle cx="35" cy="20" r="5" />
                                    <circle cx="65" cy="20" r="5" />
                                </svg>
                                <span className="text-white text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                                    Tripadvisor<br />Travelers'<br />Choice Awards<br />2025
                                </span>
                            </div>

                            <h4 className="text-[#22455C] font-black uppercase text-sm mb-2">Travelers' Choice Award</h4>
                            <p className="text-slate-400 text-[10px] mb-4 uppercase font-bold tracking-wider">Top 10% of Experiences Worldwide</p>

                            <div className="flex items-center justify-center gap-4 text-[12px] font-bold">
                                <div className="flex items-center gap-1">
                                    <StarIcon className="h-3 w-3 fill-[#FFBB00] text-[#FFBB00]" />
                                    <span>5.0 Rating</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <UsersIcon className="h-3 w-3 text-[#00AF87]" />
                                    <span>1000+ Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-8 text-sm font-medium text-slate-300">
                        <a href="#" className="hover:text-[#BC8B22] transition-colors">Terms and Conditions</a>
                        <a href="#" className="hover:text-[#BC8B22] transition-colors">About Us</a>
                        <a href="#" className="hover:text-[#BC8B22] transition-colors">Contact Us</a>
                    </div>

                    <div className="flex gap-6">
                        <SocialIcon icon={<Facebook className="h-5 w-5" />} />
                        <SocialIcon icon={<Twitter className="h-5 w-5" />} />
                        <SocialIcon icon={<Instagram className="h-5 w-5" />} />
                        <SocialIcon icon={<Youtube className="h-5 w-5" />} />
                    </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-slate-400 font-medium">
                    <p>© 2025 Copyright to <span className="text-[#BC8B22]">the bridge travel</span></p>
                    <div className="flex items-center gap-4">
                        <span>We Accept</span>
                        <div className="flex gap-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 opacity-70" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5 opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ContactLink = ({ icon, text }) => (
    <div className="flex items-start gap-3 group cursor-pointer">
        <span className="text-[#BC8B22] group-hover:scale-110 transition-transform">{icon}</span>
        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{text}</span>
    </div>
);

const FooterLink = ({ text }) => (
    <li className="flex items-center gap-2 group cursor-pointer">
        <ChevronRight className="h-3 w-3 text-[#BC8B22] opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
        <span className="text-slate-300 group-hover:text-[#BC8B22] transition-colors text-sm">{text}</span>
    </li>
);

const SocialIcon = ({ icon }) => (
    <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#BC8B22] hover:text-white hover:border-[#BC8B22] transition-all">
        {icon}
    </a>
);

// Minimal Star Icon
const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

// Minimal Users Icon
const UsersIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

export default Footer;
