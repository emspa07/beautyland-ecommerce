import React from "react";
import { Container, WrapperAbout, AboutImage, AboutInfo, AboutTitle, AboutDescription } from "./elements";

function About (){
    return(
        <Container>
            <WrapperAbout>
                <AboutImage src="https://res.cloudinary.com/doo2bx7qe/image/upload/ar_1:1,b_rgb:ece4dd,bo_0px_solid_rgb:ece4dd,c_fill,g_auto,o_100,r_max,w_1000/v1687460954/Slider%20Beautyland/pexels-cottonbro-studio-4056467_k2pzug.webp"/>
                <AboutInfo>
                    <AboutTitle>
                       ¿Buscas los mejores productos de belleza en internet? 
                    </AboutTitle>
                    <AboutDescription>
                    Nuestro equipo ha seleccionado cuidadosamente las mejores opciones para ti. Dile adiós a la molestia de buscar los productos perfectos y permítenos llegar directamente a tu puerta. 
                    <br></br>
                    <br></br>
                    ¡Eleva tu rutina de belleza con lo mejor de lo mejor!
                    </AboutDescription>                    
                </AboutInfo>
            </WrapperAbout>
        </Container>
   )
}
export default About;