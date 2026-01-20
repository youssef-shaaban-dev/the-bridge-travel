import React, { useState, useEffect } from 'react';
import TourHero from './components/TourHero';
import TourGallery from './components/TourGallery';
import TourGallerySlider from './components/TourGallerySlider';
import TourInfoBar from './components/TourInfoBar';
import TourDescription from './components/TourDescription';
import TourItinerary from './components/TourItinerary';
import BookingSidebar from './components/BookingSidebar';

const TourDetails = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Placeholder data for the tour
    const tour = {
        title: "Cairo and Alexandria",
        location: "Cairo, Egypt",
        rating: 5.0,
        reviews: 22,
        isFeatured: true,
        price: 500,
        duration: "6 Days / 5 Nights",
        category: "Tour Egypt Packages",
        images: [
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200", // Main
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=600", // Side 1
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=600", // Side 2
            "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=600", // Side 3
        ],
        description: "Step into the heart of ancient civilization with a perfectly curated Egypt experience that blends iconic sights, five-star comfort, and personal service from the moment you land. From the Great Pyramids and the Sphinx to the treasures of King Tut, from the spiritual beauty of Old Cairo to the Mediterranean charm of Alexandria - this journey is crafted to turn your dream of Egypt into a seamless, unforgettable reality.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Cairo",
                description: "Welcome to the mystical lands of Egypt, where the Pharaohs ruled for thousands of years. Upon your arrival at Cairo International Airport, your tour manager will meet and assist you and ease the process by helping you to get the entry visa."
            },
            {
                day: 2,
                title: "Giza Pyramids & Sphinx",
                description: "Explore the Great Pyramids of Giza, the only surviving wonder of the ancient world. Visit the Valley Temple and the iconic Sphinx, guardians of the plateau for millennia."
            }
        ]
    };

    const openLightbox = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    };

    // Keyboard support handled in TourGallerySlider internally, 
    // but we can add Esc support here as well for safety
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container-custom">
                {/* Hero Section */}
                <TourHero tour={tour} />

                {/* Gallery Section */}
                <TourGallery images={tour.images} openLightbox={openLightbox} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 mt-12">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-12">
                        <TourInfoBar duration={tour.duration} category={tour.category} />
                        <TourDescription description={tour.description} />
                        <TourItinerary itinerary={tour.itinerary} />
                    </div>

                    {/* Right Column: Booking Sidebar */}
                    <div className="lg:col-span-4 lg:relative">
                        <BookingSidebar basePrice={tour.price} />
                    </div>
                </div>
            </div>

            {/* Swiper Lightbox Slider */}
            <TourGallerySlider
                isOpen={selectedIndex !== null}
                images={tour.images}
                initialIndex={selectedIndex}
                onClose={closeLightbox}
                tourTitle={tour.title}
            />
        </div>
    );
};

export default TourDetails;
