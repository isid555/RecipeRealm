import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce delay-300"></div>
            </div>
        </div>
    );
};

export default Loader;
