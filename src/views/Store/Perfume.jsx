import Announcement from "../../components/Announcement/Announcement";
import ProductList from "../../components/Products/ProductList";
import ContainerStore from "../../components/ContainerStore/ContainerStore";
import Card from "../../components/Card/Card";

export const Perfume= () => {
    return(
        <>        
            <Announcement/>
            <ContainerStore title="Perfumes">
                <ProductList/>     
                <Card/>           
            </ContainerStore>

        </>
    )
}