import { Clock, Map, Plane } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { slugify } from '@/lib/utils';
import { toursData } from '../tourDetails/data/tours';

const experiences = toursData;

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
                                <Link
                                    to={`/Egypt-tours-package/${slugify(exp.title)}`}
                                    className="block h-full w-full"
                                >
                                    <motion.img
                                        src={exp.images[0]}
                                        alt={exp.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </Link>

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {exp.badge && (
                                        <span className="rounded-full bg-[#E91E63] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                                            {exp.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4 pointer-events-none">
                                    <span className="rounded-full bg-[#BC8B22] px-4 py-1.5 text-base lg:text-xl font-bold text-white shadow-lg">
                                        From ${exp.price}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col p-8 flex-1">
                                <Link to={`/Egypt-tours-package/${slugify(exp.title)}`}>
                                    <h3 className="text-2xl font-bold text-[#22455C] mb-4 group-hover:text-[#BC8B22] transition-colors line-clamp-2 min-h-[64px]">
                                        {exp.title}
                                    </h3>
                                </Link>

                                {/* Journey Duration */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <MetaTag icon={<Clock className="h-3.5 w-3.5" />} text={exp.duration} />
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-3">
                                    {exp.description}
                                </p>

                                {/* CTA Button */}
                                <Link to={`/Egypt-tours-package/${slugify(exp.title)}`}>
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
