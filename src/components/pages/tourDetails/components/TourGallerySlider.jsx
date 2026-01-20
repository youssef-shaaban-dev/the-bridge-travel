import React, { useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TourGallerySlider = ({ isOpen, images, initialIndex, onClose, tourTitle }) => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    React.useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-100 bg-black/50 backdrop-blur-md flex items-center justify-center"
            >
                {/* Backdrop handle close */}
                <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/70 hover:text-white h-12 w-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 transition-all hover:bg-white/20 z-50 shadow-2xl"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-6 text-white/70 hover:text-white h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/10 transition-all hover:bg-white/20 z-50 hidden md:flex shadow-2xl"
                >
                    <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-6 text-white/70 hover:text-white h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/10 transition-all hover:bg-white/20 z-50 hidden md:flex shadow-2xl"
                >
                    <ChevronRight className="h-8 w-8" />
                </button>

                {/* Swiper Container */}
                <div className="relative w-full h-full max-w-7xl px-4 md:px-20 py-12 flex items-center justify-center pointer-events-none">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        initialSlide={initialIndex}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                        modules={[Navigation, Pagination, Keyboard]}
                        keyboard={{ enabled: true }}
                        spaceBetween={40}
                        className="w-full h-full flex items-center pointer-events-auto"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx} className="flex items-center justify-center p-4">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={img}
                                        alt={`Tour ${idx + 1}`}
                                        className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl select-none"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Info & Custom Pagination */}
                <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6 px-6 text-white pointer-events-none">
                    <div className="bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 flex items-center gap-6">
                        <span className="text-sm font-bold text-[#BC8B22] tabular-nums">
                            {(currentIndex + 1).toString().padStart(2, '0')}
                            <span className="text-white/30 mx-2">/</span>
                            {images.length.toString().padStart(2, '0')}
                        </span>
                        <h3 className="hidden sm:block text-sm font-bold tracking-tight uppercase">{tourTitle}</h3>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-2.5 pointer-events-auto">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => swiperRef.current?.slideTo(i)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-[#BC8B22]' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TourGallerySlider;
