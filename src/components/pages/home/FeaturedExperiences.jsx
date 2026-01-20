import { Clock, Map, Plane } from 'lucide-react';
import { Button } from "@/components/ui/button";
// Images from previous sections and new ones
import pyramids from "@/assets/hero/pyramids.webp";
import nile from "@/assets/hero/nile.webp";
import temple from "@/assets/hero/temple.webp";
import sharm from "@/assets/experiences/sharm.png";
import cairo from "@/assets/experiences/old_cairo.png";
import desert from "@/assets/experiences/desert.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { slugify } from '@/lib/utils';
const experiences = [
    {
        image: nile,
        title: "5 Day Luxor to Aswan Nile Cruise",
        price: "$1280",
        badge: "Best Seller",
        duration: "5 Days",
        type: "Private Tour",
        includes: "Flights Included",
        description: "Experience the magic of ancient Egypt on this luxurious Nile cruise from Luxor to Aswan, featuring expert guides and premium accommodations.",
    },
    {
        image: pyramids,
        title: "7 Day Cairo and Nile Cruise",
        price: "$1599",
        badge: "",
        duration: "7 Days",
        type: "Private Tour",
        includes: "Cairo + Cruise",
        description: "Discover the wonders of Cairo including the Pyramids and Egyptian Museum, then embark on a luxury Nile cruise experience.",
    },
    {
        image: temple,
        title: "10 Day Jordan Egypt Adventure",
        price: "$3292",
        badge: "",
        duration: "10 Days",
        type: "Private Tour",
        includes: "Two Countries",
        description: "Epic adventure combining the wonders of Petra in Jordan with Egypt's ancient treasures on one unforgettable journey.",
        tags: ["Petra Visit", "Multi-Country", "VIP Treatment"]
    },
    {
        image: sharm,
        title: "Luxury Red Sea Escape",
        price: "$950",
        badge: "Relaxation",
        duration: "4 Days",
        type: "Resort Stay",
        includes: "All Inclusive",
        description: "Unwind at a premium resort in Sharm El Sheikh with private beach access and world-class snorkeling in the Red Sea.",
    },
    {
        image: cairo,
        title: "Historic Cairo Night Tour",
        price: "$450",
        badge: "Culture",
        duration: "Full Day",
        type: "Group Tour",
        includes: "Dinner Included",
        description: "Walk through the historic Al-Muizz street and Khan el-Khalili bazaar, experiencing the vibrant soul of Islamic Cairo.",
    },
    {
        image: desert,
        title: "Epic Desert Safari & Oasis",
        price: "$1100",
        badge: "Adventure",
        duration: "3 Days",
        type: "Private 4x4",
        includes: "Camping Under Stars",
        description: "Venture into the White Desert and Siwa Oasis for a unique luxury camping experience among surreal geological formations.",
    }
];

const FeaturedExperiences = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#22455C] md:text-6xl">Egypt Tour Packages</h2>
                    <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#BC8B22]" />
                    <p className="text-slate-500 italic max-w-2xl mx-auto">
                        Discover expertly crafted Egypt tour packages that blend iconic history, refined luxury, and authentic experiences - designed for worldwide travelers seeking a journey of a lifetime.
                    </p>
                </motion.div>

                {/* Experiences Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col rounded-[32px] bg-white shadow-2xl shadow-slate-200/50 hover:shadow-amber-900/10 transition-all duration-500 overflow-hidden border border-slate-50"
                        >
                            {/* Image Container */}
                            <div className="relative h-[280px] w-full overflow-hidden">
                                <motion.img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {exp.badge && (
                                        <span className="rounded-full bg-[#E91E63] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                                            {exp.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="rounded-full bg-[#BC8B22] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                                        From {exp.price}
                                    </span>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col p-8 flex-1">
                                <h3 className="text-2xl font-bold text-[#22455C] mb-4 group-hover:text-[#BC8B22] transition-colors line-clamp-2 min-h-[64px]">
                                    {exp.title}
                                </h3>

                                {/* Metadata Row */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <MetaTag icon={<Clock className="h-3.5 w-3.5" />} text={exp.duration} />
                                    <MetaTag icon={<Map className="h-3.5 w-3.5" />} text={exp.type} />
                                    <MetaTag icon={<Plane className="h-3.5 w-3.5" />} text={exp.includes} />
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                                    {exp.description}
                                </p>

                                {/* CTA Button */}
                                <Link to={`Egypt-tours-package/${slugify(exp.title)}`}>
                                    <Button variant='link' className="w-full h-12 rounded-xl bg-[#BC8B22] hover:bg-[#A67A1D] text-white font-bold group/btn transition-all cursor-pointer">
                                        View Tour Details
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MetaTag = ({ icon, text }) => (
    <div className="flex items-center gap-1.5 rounded-md bg-[#FCF9F4] px-2.5 py-1.5 text-[10px] font-bold text-slate-500 border border-slate-100">
        <span className="text-[#BC8B22]">{icon}</span>
        {text}
    </div>
);

export default FeaturedExperiences;
