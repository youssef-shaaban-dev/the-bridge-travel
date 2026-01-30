import React from 'react';
import EgyptTourPackagesHero from './EgyptTourPackagesHero';
import EgyptTourPackagesList from './EgyptTourPackagesList';
import { motion } from 'framer-motion';
import logo from "@/assets/logo.png";
import { Compass, Sparkles, Map } from 'lucide-react';
import SEO from "@/components/shared/SEO";

const EgyptTourPackages = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Egypt Tour Packages"
                description="Explore our curated collection of luxury Egypt tour packages. From Cairo's pyramids to Nile cruises in Luxor and Aswan, find your perfect journey."
                keywords="Egypt Tour Packages, Cairo Tours, Nile Cruises, Luxor Tours, Aswan Tours, Luxury Egypt Holidays"
            />
            <EgyptTourPackagesHero />

            {/* Intro Content */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#BC8B22]/10 text-[#BC8B22] text-xs font-bold tracking-widest uppercase mb-8"
                        >
                            <Compass className="h-4 w-4" />
                            Curated Experiences
                        </motion.div>
                        <h2 className="text-4xl font-bold text-[#22455C] mb-8 font-playfair md:text-5xl leading-tight">
                            The Ultimate Journey To <br /> The Land Of The Pharaohs
                        </h2>
                        <div className="mx-auto w-24 h-1.5 bg-[#BC8B22] mb-10 rounded-full" />
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                            Discover expertly crafted Egypt tour packages that blend iconic history,
                            refined luxury, and authentic experiences. Our tours are designed to
                            bridge the gap between classic sightseeing and modern comfort.
                        </p>
                    </div>
                </div>
            </section>

            <EgyptTourPackagesList />

            {/* Features Recap */}
            <section className="py-24 bg-[#22455C]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FeatureItem
                            icon={<Map className="h-8 w-8 text-[#BC8B22]" />}
                            title="Tailor-Made Itineraries"
                            text="Classic routes and off-the-beaten-path experiences designed by local experts."
                        />
                        <FeatureItem
                            icon={<Sparkles className="h-8 w-8 text-[#BC8B22]" />}
                            title="Luxury Selection"
                            text="Hand-picked 5-star hotels and deluxe cruises to ensure maximum comfort."
                        />
                        <FeatureItem
                            icon={<Compass className="h-8 w-8 text-[#BC8B22]" />}
                            title="24/7 Local Support"
                            text="Dedicated assistants and professional guides available throughout your journey."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureItem = ({ icon, title, text }) => (
    <div className="text-center group">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 border border-white/10 group-hover:bg-[#BC8B22] group-hover:border-[#BC8B22] transition-all duration-300">
            <div className="group-hover:text-white transition-colors">
                {icon}
            </div>
        </div>
        <h4 className="text-white text-xl font-bold font-playfair mb-4">{title}</h4>
        <p className="text-white/60 leading-relaxed font-light">{text}</p>
    </div>
);

export default EgyptTourPackages;
