import {BrowserRouter, Routes, Route} from "react-router-dom";
//Componentes 
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { Login } from "./views/Login/Login";
import { Signup } from "./views/Login/Signup";
import { Home } from "./views/Home/Home";
import { Makeup } from "./views/Store/Makeup";
import { Skincare } from "./views/Store/Skincare";
import { Perfume } from "./views/Store/Perfume";
import { Cart } from "./views/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/maquillaje" element={<Makeup/>}/>
            <Route path="/skincare" element={<Skincare/>}/>
            <Route path="/perfumes" element={<Perfume/>}/>


        </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
