import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from './data/tours';
import TourHero from './components/TourHero';
import TourGallery from './components/TourGallery';
import TourGallerySlider from './components/TourGallerySlider';
import TourInfoBar from './components/TourInfoBar';
import TourDescription from './components/TourDescription';
import TourItinerary from './components/TourItinerary';
import BookingSidebar from './components/BookingSidebar';
import TourAccommodation from './components/TourAccommodation';
import TourPricing from './components/TourPricing';
import WhyBookWithUs from './components/WhyBookWithUs';
import NotFound from '@/components/shared/NotFound';

const TourDetails = () => {
    const { slug } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Find the current tour based on slug
    const tour = toursData.find(t => t.slug === slug);

    // Rates Data (Normally would come from tour data)
    const rates = [
        { grade: "4★ Experience", price: tour?.price || 635, description: "Premium Comfort" },
        { grade: "5★ Luxury", price: (tour?.price || 635) + 100, description: "Ultimate Elegance", featured: true }
    ];

    const [selectedRateIndex, setSelectedRateIndex] = useState(1); // Default to Luxury as per original featured

    const openLightbox = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    };

    // Keyboard support handled in TourGallerySlider internally
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    if (!tour) return <NotFound />;

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container-custom">
                {/* Hero Section */}
                <TourHero tour={tour} />

                {/* Gallery Section */}
                <TourGallery images={tour.images} openLightbox={openLightbox} />

                {/* Main Content Flex Layout */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 mt-12 items-start">
                    {/* Left Column: Details */}
                    <div className="w-full lg:w-[60%] space-y-12">
                        <TourInfoBar duration={tour.duration} category={tour.category} />
                        <TourDescription description={tour.description} />
                        <TourItinerary itinerary={tour.itinerary} />
                        <TourAccommodation />
                        <TourPricing
                            rates={rates}
                            selectedRateIndex={selectedRateIndex}
                            onRateSelect={setSelectedRateIndex}
                        />
                        <WhyBookWithUs />
                    </div>

                    {/* Right Column: Booking Sidebar */}
                    <div className="w-full lg:w-[40%] lg:sticky lg:top-28">
                        <BookingSidebar
                            rates={rates}
                            selectedRateIndex={selectedRateIndex}
                            onRateSelect={setSelectedRateIndex}
                        />
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
