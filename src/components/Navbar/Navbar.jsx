//Librerias 
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaFemale, FaShoppingBag } from "react-icons/fa";

//Estilos 
import "../Navbar/navbar.css"

//Componentes 



function Navbar (){
    return(
            <header>
                <div className='beauty_container nav_container'>
                    <nav>
                    <input type='checkbox' id='menu_responsive'/>
                    <label htmlFor='menu_responsive' className='horizontal-btn'><FaBars/></label>
                    <ul className='nav_list'>
                        <Link to="/maquillaje"><li>Maquillaje</li></Link>
                        <Link to="/skincare"><li>Skincare</li></Link>
                        <Link to="/perfumes"><li>Perfumes</li></Link>
                    </ul>
                    </nav>
                    <h1 className='nav_logo'><Link to="/" className='link_items'>BEAUTY LAND </Link></h1>
                    <div className='items'>
                        <ul className='nav_items'>
                        <li className='li_items'><Link to="/login" className='link_items'><FaFemale/></Link></li>
                        <li className='li_items'><Link to="/cart" className='link_items'><FaShoppingBag/></Link></li>
                        </ul>                    
                    </div>
                </div>
            </header>
    )
}

export default Navbar; 