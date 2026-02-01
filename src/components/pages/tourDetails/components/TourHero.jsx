import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

const TourHero = ({ tour }) => {
    return (
        <div className="space-y-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-md text-slate-500 mb-8 border-b border-slate-200 pb-4 py-5 md:py-10 rounded-md px-4" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-[#22455C] cursor-pointer">Home</Link>
                <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                <span className="text-[#22455C] font-semibold">{tour.category}</span>
            </nav>

            {/* Header Information */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl md:text-5xl font-black text-[#22455C] font-playfair tracking-tight leading-tight">
                            {tour.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {tour.isFeatured && (
                            <Badge className="bg-[#FF7043]/10 text-[#FF7043] border-none px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                Featured
                            </Badge>
                        )}
                        <div className="flex items-center gap-1" aria-label={`Rating: 5 out of 5 stars based on ${tour.reviews} reviews`}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-[#FFBB00] text-[#FFBB00]" aria-hidden="true" />
                            ))}
                            <span className="text-sm font-bold text-slate-700 ml-1">({tour.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 text-sm font-medium">
                            <MapPin className="h-4 w-4 text-[#BC8B22]" />
                            <span>{tour.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourHero;
