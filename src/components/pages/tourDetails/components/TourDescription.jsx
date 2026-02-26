import React from 'react';

const TourDescription = ({ description }) => {
    return (
        <div className="space-y-8 py-4">
            <div className="prose prose-slate max-w-none">
                <p className="text-slate-500 leading-[1.8] text-lg font-medium">
                    {description}
                </p>
            </div>
            <div className="h-px bg-slate-100 w-full opacity-60"></div>
        </div>
    );
};

export default TourDescription;
