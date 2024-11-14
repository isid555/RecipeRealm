import React from 'react';
import par from "../assets/img_6.png";
import pasta from "../assets/img_7.png"
import salad from "../assets/img_8.png"
import taco from "../assets/img_9.png"

const Explore = () => {
    return (
        <div className="relative overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${par})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            ></div>

            <div className="relative flex flex-col items-center bg-cover bg-center py-16 px-6 z-10">
                {/*Upar wala*/}
                <div className=" bg-opacity-0 rounded-xl p-10 shadow-xl max-w-4xl text-center backdrop-blur-sm">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
                        Explore a vast collection of recipes, mouthwatering cuisines, and much more to satisfy your food cravings.
                    </h1>
                    <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-4 px-10 rounded-full font-bold border-none transition-transform transform hover:scale-110 shadow-md">
                        Explore More →
                    </button>
                </div>

                {/*dummy cards*/}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 max-w-7xl">


                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img src= {pasta} alt={"Delicious Pasta"} className="w-full h-56 object-cover transition-transform transform hover:scale-105" />
                        <div className="p-8">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Delicious Pasta</h2>
                            <p className="text-gray-600 mb-6">A delightful blend of creamy sauce, tender pasta, and fresh herbs.</p>
                            <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                                View More Recipes →
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img src={salad} alt="Hearty Salad" className="w-full h-56 object-cover transition-transform transform hover:scale-105" />
                        <div className="p-8">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Hearty Salad</h2>
                            <p className="text-gray-600 mb-6">A refreshing and crunchy mix of vegetables with a tangy dressing.</p>
                            <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                                View More Recipes →
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <img src={taco} alt="Spicy Tacos" className="w-full h-56 object-cover transition-transform transform hover:scale-105" />
                        <div className="p-8">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Spicy Tacos</h2>
                            <p className="text-gray-600 mb-6">A fusion of zesty spices wrapped in a crunchy taco shell.</p>
                            <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                                View More Recipes →
                            </button>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Explore;
