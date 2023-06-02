//Librerias 
import React from "react";
import {FaFacebook, FaTwitter, FaWhatsapp, FaInstagram} from "react-icons/fa";

//Estilos
import './css/footer.css'

function Footer (){
    return(
        <footer>
            <section className="beauty_container">
                <div className="footer_main">
                    <div className="newsletter_footer">
                        <form className="newsletter_form">
                            <p>REGÍSTRESE PARA RECIBIR CORREOS ELECTRÓNICOS Y/O MENSAJES DE TEXTO CON LAS ÚLTIMAS ACTUALIZACIONES, OFERTAS ESPECIALES Y MÁS.</p>
                            <input type="email" placeholder="Tu Email" required></input>
                            <button>Unirme</button>
                        </form>
                        <div className="footer_redes">
                            <span><FaFacebook/></span>
                            <span><FaTwitter/></span>
                            <span><FaInstagram/></span>
                            <span><FaWhatsapp/></span>
                        </div>             
                    </div>
            
                    <div className="info_footer">
                        <div className="about_footer">
                            <h5>Productos</h5>
                            <ul>
                                <li>Maquillaje</li>
                                <li>Skincare</li>
                                <li>Perfumes</li>
                            </ul>
                        </div>
                        <div className="about_footer">
                            <h5>Beauty Land</h5>
                            <ul>
                                <li>¿Quiénes somos?</li>
                                <li>Contáctanos</li>
                                <li>Ubicaciones y Horarios</li>
                            </ul>
                        </div>
                        <div className="about_footer">
                            <h5>Servicio al cliente</h5>
                            <ul>
                                <li>Pagos y envíos</li>
                                <li>Preguntas frecuentes</li>
                                <li>Avisos de privacidad</li>
                                <li>Términos y condiciones</li>
                            </ul>
                        </div>
                    </div>
                </div>
                

                <div className="copyright">
                    <h1 className='logo'>BEAUTY LAND</h1>
                    <span> &copy; Todos los derechos reservados | Emily Paulín| 2023</span>
                </div>
            </section>
        </footer>

    )
}

export default Footer;