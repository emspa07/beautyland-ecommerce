import Announcement from "../../components/Announcement/Announcement";
import ProductList from "../../components/Products/ProductList";
import ContainerStore from "../../components/ContainerStore/ContainerStore";

export const Skincare= () => {
    return(
        <>        
            <Announcement/>
            <ContainerStore title="Skincare">
                <ProductList/>                
            </ContainerStore>

        </>
    )
}