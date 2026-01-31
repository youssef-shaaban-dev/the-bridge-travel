import React from 'react';
import { ShieldCheck, Clock, Globe2, MapPin } from 'lucide-react';
import heroImage from "@/assets/images/Sharm-El-Sheikh-01.webp";
import pyramidsImage from "@/assets/images/Jordan-03.webp";
import sphinxImage from "@/assets/images/Sphinx.webp";
// Sub-components
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutFeatures from './AboutFeatures';
import AboutDeepDive from './AboutDeepDive';
import SEO from '@/components/shared/SEO';

const stats = [
    {
        icon: <Globe2 className="h-8 w-8" />,
        title: "Global Reach",
        description: "Serving travelers from USA, UK, Australia & worldwide",
        color: "bg-[#22455C]"
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Expert Guides",
        description: "Professional Egyptologist guides for every journey",
        color: "bg-[#BC8B22]"
    },
    {
        icon: <Clock className="h-8 w-8" />,
        title: "24/7 Support",
        description: "Local support ensuring a seamless travel experience",
        color: "bg-[#6B8E23]"
    },
    {
        icon: <MapPin className="h-8 w-8" />,
        title: "Handpicked",
        description: "Carefully selected hotels and luxury Nile cruises",
        color: "bg-[#22455C]"
    }
];

const AboutUs = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Crafting Exceptional Journeys to Egypt"
                description="Learn about The Bridge Travel - Luxury Egypt tours, Nile cruises, Red Sea holidays, and exceptional journeys to Egypt with expert guided experiences in Cairo, Luxor, and Aswan."
            />
            <AboutHero image={heroImage} />
            <AboutIntro img_1={heroImage} img_2={sphinxImage} />
            <AboutFeatures stats={stats} />
            <AboutDeepDive pyramidsImage={pyramidsImage} />
        </div>
    );
};

export default AboutUs;
