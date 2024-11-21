import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-green-600 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loader;