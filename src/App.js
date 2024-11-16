import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Explore from "./components/Explore";
import About from "./components/About";
import Footer from "./components/Footer";
import Recipe from "./pages/Recipe";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
<Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/recipe"} element={<Recipe/>}/>
</Routes>

    </div>
  );
}

export default App;
