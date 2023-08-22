import { ContainerBest, InfoBest, ImageBest, IconBest } from "./elementsBestSellers";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const BestSeller = ({item}) => {
    return (
        <ContainerBest>
            <ImageBest src={item.img}/>
            <InfoBest>
                <IconBest>
                    <FaShoppingCart/>
                </IconBest>
                <IconBest>
                    <FaHeart/>
                </IconBest>
            </InfoBest>

        </ContainerBest>
    )
}

export default BestSeller;