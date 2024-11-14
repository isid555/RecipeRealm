import React, { useState } from 'react';

const Navbar = () => {
    // State to handle the mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">

                        <h1 className="text-2xl font-bold text-green-600">RecipeRealm</h1>

                        <div className="hidden md:flex ml-10 space-x-4">
                            <a href="#" className="text-gray-700 hover:text-green-600">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600">
                                Recipes
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600">
                                About
                            </a>
                            <a href="#" className="text-gray-700 hover:text-green-600">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block text-gray-700 hover:text-green-600">
                            Home
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-green-600">
                            Recipes
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-green-600">
                            About
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-green-600">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
