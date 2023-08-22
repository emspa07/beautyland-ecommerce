import { Container, ImageCategory, InfoCategory, TitleCategory, ButtonCategory } from "./elementsItems";
import { Link } from "react-router-dom";



const CategoryItem = ({item}) => {
    return(
        <Container>
            <ImageCategory src={item.img}/>
            <InfoCategory>
                <TitleCategory>{item.title}</TitleCategory>
                <Link to={item.link}><ButtonCategory>¡Descúbrelo!</ButtonCategory></Link>
            </InfoCategory>
        </Container>
    )
}

export default CategoryItem;