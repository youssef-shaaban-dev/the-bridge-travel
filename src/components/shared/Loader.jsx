import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-[#BC8B22]/20 rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 w-full h-full border-t-4 border-[#BC8B22] rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;
