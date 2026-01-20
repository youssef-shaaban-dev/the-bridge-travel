import React from 'react';
import { Grid } from 'lucide-react';

const TourGallery = ({ images, openLightbox }) => {
    return (
        <div className="flex flex-col xl:flex-row gap-3 md:gap-4 mb-12 h-auto">
            {/* Main Large Image */}
            <div
                onClick={() => openLightbox(0)}
                className="xl:w-[66%] relative aspect-[4/3] sm:aspect-[16/9] md:h-[450px] xl:h-[600px] overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer shadow-lg shadow-slate-200/50"
            >
                <img
                    src={images[0]}
                    alt="Main View"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white">
                        <Grid className="h-6 w-6" />
                    </div>
                </div>
            </div>

            {/* Smaller Images Container */}
            <div className="xl:w-[34%] grid grid-cols-2 xl:flex xl:flex-col gap-3 md:gap-4 xl:h-[600px]">
                {images.slice(1).map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => openLightbox(idx + 1)}
                        className={`relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer shadow-md shadow-slate-100/50 xl:flex-1 ${idx === 2
                                ? 'col-span-2 h-[140px] md:h-[220px] xl:h-auto'
                                : 'h-[120px] md:h-[180px] xl:h-auto'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`View ${idx + 2}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                                <Grid className="h-4 w-4" />
                            </div>
                        </div>

                        {/* Gallery Button - Visible on last image */}
                        {idx === 2 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
                                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-xl hover:bg-white transition-all transform active:scale-95 z-20"
                            >
                                <Grid className="h-4 w-4" />
                                <span>Gallery</span>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourGallery;
