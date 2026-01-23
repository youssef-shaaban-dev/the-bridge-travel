import React from 'react';
import NileCruiseCard from './NileCruiseCard';

const NileCruiseList = ({ cruises }) => {
    return (
        <section className="section-padding bg-[#FCF9F4]">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {cruises.map((cruise) => (
                        <NileCruiseCard key={cruise.id} cruise={cruise} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NileCruiseList;
