import styled from "styled-components";
import {mobile} from '../../responsive';

const ContainerAnnouncement = styled.section`
    height: 30px;
    background-color: #fcf6f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-font);
    font-weight: bold;
    ${mobile({fontSize: "12px"})}
`;


const Announcement = () => {
    return(
        <ContainerAnnouncement>
            ¡Envíos gratis en compras mayores a $1,200 MXN!
        </ContainerAnnouncement>
    )
}

export default Announcement;