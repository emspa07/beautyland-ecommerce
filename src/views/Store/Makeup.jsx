import Announcement from "../../components/Announcement/Announcement";
import ProductList from "../../components/Products/ProductList";
import ContainerStore from "../../components/ContainerStore/ContainerStore";

export const Makeup= () => {
    return(
        <>        
            <Announcement/>
            <ContainerStore title="Maquillaje">
                <ProductList/>                
            </ContainerStore>

        </>
    )
}