import React from "react";
import Products from "../Products/Products";

import '../Bestsellers/bestsellers.css'


function BestSellers(){
    return (
        <section className="beauty_container wrapper">
            <div className="wrapper_title">
                <h2 className="head_title">
                    Preferidos de Beauty Land
                </h2>
            </div>
            <div className="best_cards">
                <Products 
                img={'https://res.cloudinary.com/doo2bx7qe/image/upload/v1686626052/9ecd8828-c16c-5fe6-b94e-96ffa99f2fc0_zb6fha.jpg'}
                title="RARE BEAUTY"
                description="Sombras para ojos"
                price="$775" />
                <Products
                img={'https://res.cloudinary.com/doo2bx7qe/image/upload/v1686626052/Nudestix_MiniNudiesSet_Lifestyle_Desktop_pqsdd5.jpg'}
                title="NUDESTIX"
                description="Kit Beachy Nudes"
                price="$770" />
                <Products
                img={'https://res.cloudinary.com/doo2bx7qe/image/upload/v1686626052/Drunk_Elephant_Retinol_d1bzfh.jpg'}
                title="Drunk Elephant"
                description="Suero facial de noche"
                price="$1,500" />
                <Products
                img={'https://res.cloudinary.com/doo2bx7qe/image/upload/v1686626052/0168625_flower-by-kenzo-ikebana_hw7ie1.jpg'}
                title="KENZO"
                description="FLOWER BY KENZO Ikebana"
                price="$1,660" />      
            </div>        
            
    </section>
    )
    }
    export default BestSellers
