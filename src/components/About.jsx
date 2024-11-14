import React from 'react';
import aboutImage from '../assets/img_1.png';

const About = () => {
    return (
        <div className="w-full h-screen bg-gray-100 border-8 ">
            <div className="flex flex-col md:flex-row h-full">


                <div className="flex-1 p-10 md:p-16 flex items-center justify-center bg-white">
                    <div>
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                            About <span className="text-green-600">Our</span> Recipe App
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Welcome to our culinary world! Our recipe app is designed to bring the joy of cooking right to your fingertips.
                            We use the <strong>Spoonacular API</strong> to source an incredible variety of recipes, making it easy for you to find
                            new and exciting dishes to try, whether you're a beginner or a seasoned chef.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our mission is simple: to make cooking fun, accessible, and stress-free. We believe that food has the power to bring
                            people together, and with our app, we aim to inspire you with delicious recipes from around the globe, complete
                            with clear instructions and nutritional details.
                        </p>
                        <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-4 px-10 rounded-full font-bold transition-transform transform hover:scale-110 shadow-md">
                            Discover Our Recipes
                        </button>
                    </div>
                </div>


                <div className="flex-1 ">
                    <img
                        src={aboutImage}
                        alt="Pizza"
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-95 hover:shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
