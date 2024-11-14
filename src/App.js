import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Explore from "./components/Explore";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
      <Explore/>
    </div>
  );
}

export default App;
