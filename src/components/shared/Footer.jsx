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
                            <img src={logo} alt="Logo" className="h-12 brightness-0 invert" />
                            <h2 className="text-2xl font-bold leading-tight">the bridge travel</h2>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            The Bridge Travel best travel agency in Egypt specialized in providing professional advice on planning Travel Packages, Nile Cruises and Day Tours.
                        </p>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-[#BC8B22] text-xl font-bold mb-5">Our Tours</h3>
                        <ul className="space-y-2.5">
                            <FooterLink text="Book now" />
                            <FooterLink text="Blog" />
                            <FooterLink text="About us" />
                            <FooterLink text="Trip planner" />
                            <FooterLink text="Contact us" />
                            <FooterLink text="Payment Policy" />
                            <FooterLink text="Why Us" />
                        </ul>
                    </div>

                    {/* General Links */}
                    <div>
                        <h3 className="text-[#BC8B22] text-xl font-bold mb-5">The Bridge Travel</h3>
                        <ul className="space-y-2.5">
                            <FooterLink text="Home" />
                            <FooterLink text="About Us" />
                            <FooterLink text="Why Us" />
                            <FooterLink text="Trip Planner" />
                            <FooterLink text="Blog" />
                            <FooterLink text="Contact Us" />
                            <FooterLink text="Payment Policy" />
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-[32px] p-6 text-slate-900 shadow-2xl overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex justify-center gap-2 mb-4">
                                    <span className="bg-[#BC8B22]/10 text-[#BC8B22] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Contact us</span>
                                </div>

                                {/* Contact Details In Card */}
                                <div className="space-y-3 mb-6 text-left">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-[#BC8B22]/10 flex items-center justify-center shrink-0">
                                            <MapPin className="h-4 w-4 text-[#BC8B22]" />
                                        </div>
                                        <span className="text-[13px] text-slate-600 leading-relaxed font-medium">El Nasr Road. El Nasr City, Cairo, Egypt</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-[#BC8B22]/10 flex items-center justify-center shrink-0">
                                            <Phone className="h-4 w-4 text-[#BC8B22]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[13px] text-slate-600 font-medium">+20 1227722233</span>
                                            <span className="text-[13px] text-slate-600 font-medium">+20 1005647138</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-[#BC8B22]/10 flex items-center justify-center shrink-0">
                                            <Mail className="h-4 w-4 text-[#BC8B22]" />
                                        </div>
                                        <span className="text-[13px] text-slate-600 font-medium whitespace-nowrap">info@thebridgetravel.com</span>
                                    </div>
                                </div>
                                <h3 className="text-[#BC8B22] text-lg font-bold mb-4">Follow us</h3>
                                <div className="flex gap-4">
                                    <SocialIcon icon={<Facebook className="h-5 w-5" />} />
                                    <SocialIcon icon={<Twitter className="h-5 w-5" />} />
                                    <SocialIcon icon={<Instagram className="h-5 w-5" />} />
                                    <SocialIcon icon={<Youtube className="h-5 w-5" />} />
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-md text-slate-400 font-medium">
                    <p>© 2026 Copyright to <span className="text-[#BC8B22]">the bridge travel</span></p>
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

// Minimal Star Icon
const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

// Minimal Users Icon
const UsersIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

export default Footer;
