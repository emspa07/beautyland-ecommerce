//Librerias 
import React from 'react';

import { FaBars, FaFemale, FaShoppingBag } from "react-icons/fa";

//Estilos 
import './css/navbar.css'
//Componentes 



function Navbar (){
    return(
        <header>
            <div className='beauty_container nav_container'>
                <nav>
                  <input type='checkbox' id='menu_responsive'/>
                  <label htmlFor='menu_responsive' className='horizontal-btn'><FaBars/></label>
                <ul className='nav_list'>
                    <li>Maquillaje</li>
                    <li>Skincare</li>
                    <li>Perfumes</li>
                </ul>
                </nav>
                <h1 className='nav_logo'>BEAUTY LAND</h1>
                <div className='items'>
                    <ul className='nav_items'>
                    <li className='li_items'><FaFemale/></li>
                    <li className='li_items'><FaShoppingBag/></li>
                    </ul>                    
                </div>
            </div>
        </header>
    )
}

export default Navbar; 