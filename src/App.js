import {BrowserRouter, Routes, Route} from "react-router-dom";
//Componentes 
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { Login } from "./views/Login/Login";
import { Signup } from "./views/Login/Signup";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { Home } from "./views/Home/Home";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
