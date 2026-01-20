import React from 'react';

const TourDescription = ({ description }) => {
    return (
        <div className="space-y-8 py-4">
            <div className="prose prose-slate max-w-none">
                <p className="text-slate-500 leading-[1.8] text-lg font-medium">
                    {description || `Discover the magic of ancient Egypt with our comprehensive Cairo and Giza Pyramids tour. Visit the iconic Great Pyramid of Giza, one of the Seven Wonders of the Ancient World, and marvel at the enigmatic Sphinx. Explore the treasures of the Egyptian Museum, home to thousands of artifacts including the golden mask of Tutankhamun. 
                    Discover the magic of ancient Egypt with our comprehensive Cairo and Giza Pyramids tour. Visit the iconic Great Pyramid of Giza, one of the Seven Wonders of the Ancient World, and marvel at the enigmatic Sphinx. Explore the treasures of the Egyptian Museum, home to thousands of artifacts including the golden mask of Tutankhamun.
                    Discover the magic of ancient Egypt with our comprehensive Cairo and Giza Pyramids tour. Visit the iconic Great Pyramid of Giza, one of the Seven Wonders of the Ancient World, and marvel at the enigmatic Sphinx. Explore the treasures of the Egyptian Museum, home to thousands of artifacts including the golden mask of Tutankhamun.`}
                </p>
            </div>
            <div className="h-px bg-slate-100 w-full opacity-60"></div>
        </div>
    );
};

export default TourDescription;
