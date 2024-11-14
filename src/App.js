import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Explore from "./components/Explore";
import About from "./components/About";



function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
      <Explore/>
      <About/>

    </div>
  );
}

export default App;
