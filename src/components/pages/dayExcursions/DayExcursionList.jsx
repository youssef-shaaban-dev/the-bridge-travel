import React from 'react';
import DayExcursionCard from './DayExcursionCard';

const DayExcursionList = ({ excursions }) => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {excursions.map((excursion) => (
                        <DayExcursionCard key={excursion.id} excursion={excursion} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DayExcursionList;
