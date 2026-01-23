import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import heroImage from "@/assets/hero/temple.webp";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        status: 'idle' // idle, sending, success
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState(prev => ({ ...prev, status: 'sending' }));
        // Simulate API call
        setTimeout(() => {
            setFormState(prev => ({ ...prev, status: 'success' }));
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Location",
            content: "El Nasr Road, Nasr City, Cairo, Egypt",
            link: "https://maps.google.com/?q=El+Nasr+Road,+Nasr+City,+Cairo,+Egypt"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Call / WhatsApp",
            content: "+20 122 77 22233 / +20 100 56 47138",
            link: "https://wa.me/201227722233"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            content: "info@thebridgetravel.com",
            link: "mailto:info@thebridgetravel.com"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Contact Us"
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
                            Contact Us
                        </h1>
                        <div className="mx-auto h-1 w-24 bg-[#BC8B22]" />
                        <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto italic">
                            Plan Your Luxury Egypt Journey with The Bridge Travel
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-[#FCF9F4] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#22455C]/5 -skew-x-12 transform translate-x-1/2" />

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Left Column: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-bold tracking-widest text-[#BC8B22] uppercase">Get In Touch</span>
                            <h2 className="mt-4 mb-8 text-4xl font-bold text-[#22455C] md:text-5xl leading-tight">
                                We Are Here To Guide You Every Step Of The Way.
                            </h2>
                            <p className="mb-12 text-slate-600 leading-relaxed text-lg">
                                Whether you are dreaming of a private Nile Cruise, a relaxing Red Sea holiday, or a tailor-made cultural tour, our experienced travel specialists are here to assist with your travel plans.
                            </p>

                            <div className="space-y-8">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#BC8B22]/20 text-[#BC8B22] shadow-sm transition-all duration-300 group-hover:bg-[#BC8B22] group-hover:text-white group-hover:-translate-y-1">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#22455C] tracking-wide uppercase text-sm mb-1">{info.title}</h3>
                                            <p className="text-slate-600 font-medium group-hover:text-[#BC8B22] transition-colors">
                                                {info.content}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-16 p-8 rounded-[32px] bg-[#22455C] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Clock className="h-24 w-24" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 font-playfair">24/7 Local Support</h4>
                                <p className="text-white/80 leading-relaxed font-light">
                                    Feel free to reach out to us anytime - we are always happy to hear from you and assist with your luxury travel plans.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-[40px] p-10 shadow-2xl shadow-slate-200 border border-slate-100"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-[#22455C] mb-2 font-playfair">Inquiry Form</h3>
                                <p className="text-slate-500 font-medium">Complete the form and we'll contact you shortly.</p>
                            </div>

                            {formState.status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <CheckCircle2 className="h-20 w-20 text-[#6B8E23] mb-6" />
                                    <h4 className="text-2xl font-bold text-[#22455C] mb-2">Message Sent!</h4>
                                    <p className="text-slate-500">Thank you for reaching out. One of our specialists will contact you soon.</p>
                                    <Button
                                        onClick={() => setFormState(prev => ({ ...prev, status: 'idle' }))}
                                        className="mt-8 bg-[#22455C] hover:bg-[#22455C]/90 text-white px-8 rounded-full"
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#22455C] uppercase tracking-wider">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-6 py-4 rounded-2xl bg-[#FCF9F4] border-transparent focus:border-[#BC8B22] focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/10 transition-all outline-none"
                                            onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#22455C] uppercase tracking-wider">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="example@mail.com"
                                                className="w-full px-6 py-4 rounded-2xl bg-[#FCF9F4] border-transparent focus:border-[#BC8B22] focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/10 transition-all outline-none"
                                                onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#22455C] uppercase tracking-wider">Phone / WhatsApp</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+00 000 0000"
                                                className="w-full px-6 py-4 rounded-2xl bg-[#FCF9F4] border-transparent focus:border-[#BC8B22] focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/10 transition-all outline-none"
                                                onChange={(e) => setFormState(p => ({ ...p, phone: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#22455C] uppercase tracking-wider">Your Message</label>
                                        <textarea
                                            required
                                            rows="4"
                                            placeholder="How can we help you plan your journey?"
                                            className="w-full px-6 py-4 rounded-2xl bg-[#FCF9F4] border-transparent focus:border-[#BC8B22] focus:bg-white focus:ring-4 focus:ring-[#BC8B22]/10 transition-all outline-none resize-none"
                                            onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                                        />
                                    </div>
                                    <Button
                                        disabled={formState.status === 'sending'}
                                        type="submit"
                                        className="w-full py-8 text-lg font-bold bg-[#BC8B22] hover:bg-[#BC8B22]/90 text-white rounded-2xl shadow-xl shadow-[#BC8B22]/20 transition-all active:scale-[0.98]"
                                    >
                                        {formState.status === 'sending' ? (
                                            <div className="flex items-center gap-3">
                                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3">
                                                <Send className="h-5 w-5" />
                                                Send Inquiry
                                            </div>
                                        )}
                                    </Button>
                                    <p className="text-center text-xs text-slate-400 font-medium tracking-wide">
                                        We look forward to welcoming you to Egypt.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing Section (Similar to About Us for consistency) */}
            <section className="py-24 bg-white relative overflow-hidden border-t border-slate-50">
                <div className="container-custom relative text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-4 font-playfair text-3xl font-bold text-[#22455C] md:text-5xl">
                            The Bridge Travel
                        </h3>
                        <p className="text-[#BC8B22] text-xl font-medium tracking-[0.2em] uppercase mb-12">
                            The Bridge to Luxury Egypt Tours
                        </p>

                        <div className="flex flex-col items-center gap-8">
                            <img src={logo} alt="Logo" className="h-20 object-contain opacity-50 grayscale" />
                            <p className="text-slate-500 italic max-w-xl mx-auto text-lg leading-relaxed">
                                "Our travel consultants will contact you shortly with a personalized itinerary and the best available offers."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Background decorative text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <span className="text-[20vw] font-bold text-[#22455C] whitespace-nowrap">CONTACT</span>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
