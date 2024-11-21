import React, { useState, useEffect } from 'react';
import Navbar from "../components/NavBar";
import HomePage from "../components/HomePage";
import Explore from "../components/Explore";
import About from "../components/About";
import Footer from "../components/Footer";
import Loader from "../components/Loader";  // Assuming you have a Loader component

const Home = () => {
    const [loading, setLoading] = useState(true);

    // Simulate data fetching or use actual data fetching logic
    useEffect(() => {
        const fetchData = async () => {
            // Simulate a delay or fetch data here
            setTimeout(() => {
                setLoading(false);  // Set loading to false after data is fetched
            }, 2000);  // Simulating 2 seconds of loading
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <HomePage />
                    <Explore />
                    <About />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
