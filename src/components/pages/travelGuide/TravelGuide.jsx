import React from 'react';
import { History, Sparkles, Waves, Globe, Zap, Camera, MapPin } from 'lucide-react';
import heroImage from "@/assets/hero/egyptian-Museum.webp";
import logo from "@/assets/logo.png";

// Sub-components
import TravelGuideHero from './TravelGuideHero';
import TravelGuideIntro from './TravelGuideIntro';
import TravelGuideFAQ from './TravelGuideFAQ';
import TravelGuideMustSee from './TravelGuideMustSee';
import TravelGuideInfoBoxes from './TravelGuideInfoBoxes';
import TravelGuideClosing from './TravelGuideClosing';

const faqData = [
    {
        question: "Is Egypt safe for tourists?",
        answer: "Yes. Egypt is a safe and well-established destination for tourism. Main tourist areas such as Cairo, Luxor, Aswan, the Red Sea resorts, and Nile Cruise routes are highly secured and well-organized for visitors."
    },
    {
        question: "Do I need a visa to enter Egypt?",
        answer: "Most travelers from the USA, UK, Australia, and Europe can obtain a visa on arrival or apply for an e-visa online before travel."
    },
    {
        question: "What is the best time to visit Egypt?",
        answer: "The best time is from October to April, when the weather is mild and perfect for sightseeing and Nile Cruises. Summer (May–September) is ideal for Red Sea resorts like Sharm El Sheikh and Hurghada."
    },
    {
        question: "What should I wear in Egypt?",
        answer: "Light, comfortable clothing is recommended. In religious sites, modest attire is required (covered shoulders and knees). In resorts, casual summer wear is fine."
    },
    {
        question: "Is tipping expected in Egypt?",
        answer: "Tipping (known as “baksheesh”) is customary for guides, drivers, cruise staff, and hotel services. It is appreciated but always optional."
    },
    {
        question: "What currency is used in Egypt?",
        answer: "The Egyptian Pound (EGP). US Dollars and Euros are widely accepted in tourist areas, and credit cards are commonly used in hotels and cruises."
    },
    {
        question: "Can I drink tap water?",
        answer: "It is recommended to drink only bottled water, which is widely available and inexpensive."
    },
    {
        question: "Are Nile Cruises suitable for families and seniors?",
        answer: "Absolutely. Nile Cruises offer comfortable cabins, elevators on many ships, smooth sailing, and guided sightseeing at a relaxed pace."
    },
    {
        question: "What languages are spoken?",
        answer: "Arabic is the official language, but English is widely spoken in hotels, cruise ships, and tourist sites."
    },
    {
        question: "What power plugs are used?",
        answer: "Type C & F (European standard). A universal adapter is recommended."
    },
    {
        question: "Is Wi-Fi available?",
        answer: "Most hotels, cruises, and cafes provide Wi-Fi. You can also buy a local SIM card for fast mobile internet."
    }
];

const mustSeePlaces = [
    { title: "Giza Pyramids & Sphinx", icon: <History className="h-6 w-6" /> },
    { title: "Egyptian Museum & GEM", icon: <Sparkles className="h-6 w-6" /> },
    { title: "Nile Cruise (Luxor-Aswan)", icon: <Waves className="h-6 w-6" /> },
    { title: "Karnak & Valleys", icon: <Globe className="h-6 w-6" /> },
    { title: "Abu Simbel", icon: <Zap className="h-6 w-6" /> },
    { title: "Red Sea Resorts", icon: <Camera className="h-6 w-6" /> },
    { title: "Alexandria Coast", icon: <MapPin className="h-6 w-6" /> }
];

const TravelGuide = () => {
    return (
        <div className="bg-white">
            <TravelGuideHero image={heroImage} />
            <TravelGuideIntro />
            <TravelGuideFAQ faqData={faqData} />
            <TravelGuideMustSee mustSeePlaces={mustSeePlaces} />
            <TravelGuideInfoBoxes />
            <TravelGuideClosing logo={logo} />
        </div>
    );
};

export default TravelGuide;
