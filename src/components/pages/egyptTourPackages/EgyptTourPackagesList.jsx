import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { toursData } from '../tourDetails/data/tours';

const EgyptTourPackagesList = () => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {toursData.map((tour, index) => (
                        <TourPackageCard key={index} tour={tour} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TourPackageCard = ({ tour, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group bg-white rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:shadow-amber-900/10 transition-all duration-500"
    >
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden">
            <Link to={`/Egypt-tour-package/${tour.slug}`} aria-label={`View details for ${tour.title}`}>
                <img
                    src={tour.images[0]}
                    alt={`Tour: ${tour.title}`}
                    width={400}
                    height={288}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>

            <div className="absolute top-4 left-4">
                {tour.badge && (
                    <span className="rounded-full bg-[#E91E63] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                        {tour.badge}
                    </span>
                )}
            </div>

            <div className="absolute top-4 right-4">
                <div className="bg-[#BC8B22] text-white px-4 py-2 rounded-2xl font-bold shadow-lg">
                    from ${tour.price}
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-1">
            <Link to={`/Egypt-tour-package/${tour.slug}`}>
                <h3 className="text-2xl font-bold text-[#22455C] mb-4 group-hover:text-[#BC8B22] transition-colors line-clamp-2 min-h-[64px] font-playfair leading-tight">
                    {tour.title}
                </h3>
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-1.5 rounded-md bg-[#FCF9F4] px-2.5 py-1.5 text-[10px] font-bold text-slate-500 border border-slate-100">
                    <Clock className="h-3.5 w-3.5 text-[#BC8B22]" />
                    {tour.duration}
                </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                {tour.description}
            </p>

            <div className="mt-auto flex flex-col gap-3">
                <Link to={`/Egypt-tour-package/${tour.slug}`} aria-label={`View tour details for ${tour.title}`}>
                    <Button variant='link' className="w-full h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#22455C] font-bold group/btn transition-all">
                        View Tour Details
                    </Button>
                </Link>
                <Link to={`/Egypt-tour-package/${tour.slug}`} aria-label={`Book the ${tour.title} tour now`}>
                    <Button className="w-full h-12 rounded-xl bg-[#22455C] hover:bg-[#BC8B22] text-white font-bold group/btn transition-all">
                        Book Now
                    </Button>
                </Link>
            </div>
        </div>
    </motion.div>
);

export default EgyptTourPackagesList;
