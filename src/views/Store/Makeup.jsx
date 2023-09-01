import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import ProductList from "../../components/Products/ProductList";
import ContainerStore from "../../components/ContainerStore/ContainerStore";
import Card from "../../components/Card/Card";



export const Makeup= () => {
    return(
        <>        
            <Announcement/>
            <ContainerStore title="Maquillaje">
                <ProductList/>  
                <Card/>              
            </ContainerStore>

        </>
    )
}