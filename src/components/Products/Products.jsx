import React from 'react';
import Button from '../Button/Button';

import '../Products/products.css';

function Products({img, title, description, price}){
return (
    <section className='wrapper_card'>
        <div className='card'>
            <div className='card_body'>
                <img src={img} className='card_image'/>
                <h3 className='card_title'>{title}</h3>
                <p className='card_description'>{description}</p>
                <span className='card_price'>{price}</span>
            </div>
                <Button title="Añadir el carrito"/>
        </div>        
    </section>

)
}
export default Products