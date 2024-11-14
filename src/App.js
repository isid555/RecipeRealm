import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Explore from "./components/Explore";
import About from "./components/About";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
      <Explore/>
      <About/>
    <Footer/>
    </div>
  );
}

export default App;
