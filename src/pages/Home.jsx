import Navbar from "../components/NavBar";
import HomePage from "../components/HomePage";
import Explore from "../components/Explore";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () =>{

    return (
        <div>
            <Navbar/>
            <HomePage/>
            <Explore/>
            <About/>
            <Footer/>
        </div>
    )
}
export default Home