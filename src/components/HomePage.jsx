import React from 'react';
import img3 from '../assets/img_3.png';
import img4 from "../assets/img_5.png"
import img10 from "../assets/img_10.png"
import img11 from "../assets/img_11.png"
const HomePage = () => {
    return (
        <div id={"home"} className="flex h-screen border-8  flex-col lg:flex-row overflow-scroll">
            {/* left wala */}
            <div className="bg-green-900 text-white lg:w-1/2 w-full flex flex-col justify-center px-8 lg-px-12 py-8">
                <h1 className="lg:text-5xl text-3xl font-bold mb-6 leading-tight">
                    The Easiest Way <br/> To Make Your <br/> Favorite Meal
                </h1>
                <p className="lg:text-lg text-base mb-8">
                    Discover 1000+ recipes in your hand with the best recipe. <br/>
                    Help you to find the easiest way to cook.
                </p>
                <button className="bg-green-700 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold border-2 border-amber-50" onClick={() =>{

                        window.open(`/recipe`, '_blank');

                }}>
                    Explore Recipes
                </button>
            </div>

            {/* right wala */}
            <div
                className="bg-gradient-to-r from-green-700 to-green-800 text-white lg:w-1/2 w-full flex items-center justify-center px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
                    <div
                        className="bg-white rounded-xl p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300">
                        <div className="w-full h-40 bg-gray-200 rounded-md mb-4">
                            <img src={img3} alt="Recipe 1" className="w-full h-full object-cover rounded-md"/>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-green-600">
                                <img
                                    src={img10}
                                    alt="Parthiban"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-black">Parthiban</p>
                                <p className="text-gray-600 text-sm">
                                    It's an easy recipe that is quick to make and delicious!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-xl p-6 shadow-2xl transition-transform transform hover:scale-105 duration-300">
                        <div className="w-full h-40 bg-gray-200 rounded-md mb-4">
                            <img
                                src={img4}
                                alt="Recipe 2" className="w-full h-full object-cover rounded-md"/>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-green-600">
                                <img
                                    src={img11}
                                    alt="Leo Das"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-black">Leo Das</p>
                                <p className="text-gray-600 text-sm">
                                    Great and delicious recipe
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default HomePage;
