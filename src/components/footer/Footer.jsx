// Import necessary components
import PromoFooter from '../promofooter/PromoFooter';
import IntroFooter from '../introfooter/IntroFooter';
import Sponsors from '../sponsors/Sponsors';
import CopyFooter from '../copyfooter/CopyFooter';

// Import styling
import './footer.scss';

// Define Footer component
const Footer = () => {
    return (
        <footer>
            {/* Render PromoFooter component */}
            <PromoFooter />

            {/* Render IntroFooter component */}
            <IntroFooter />

            {/* Render Sponsors component */}
            <Sponsors />

            <div className="footer-row">
                <div className="footer-col">
                    <h4>Info</h4>
                    <ul>
                        <li><a href="/">Perguntas Frequentes</a></li>
                        <li><a href="/">Jogo Responsável</a></li>
                        <li><a href="/">Contactos</a></li>
                        <li><a href="/">Sobre nós</a></li>
                        <li><a href="/">Política de Bónus</a></li>
                        <li><a href="/">Política de Privacidade e Cookies</a></li>
                    </ul>
                    
                </div>
                <div className="footer-col">
                    <ul>
                        <li><a href="/">Jogo Responsável</a></li>
                        <li><a href="/">Termos e Condições</a></li>
                        <li><a href="/">Direito à informação</a></li>
                        <li><a href="/">Afiliados</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Disponível em Android e iOS</h4>
                    <button>Descarregar App Oficial</button>
                    <h4>Siga-nos em</h4>
                    <div className="social-links">
                        <a href="/"><i className="facebook-f"></i></a>
                        <a href="/"><i className="x-twitter"></i></a>
                        <a href="/"><i className="instagram"></i></a>
                        <a href="/"><i className="linkedin-in"></i></a>
                    </div>
                </div>
            </div>

             {/* Render CopyFooter component */}
            <CopyFooter />
        </footer>
    );
};

// Export Footer component
export default Footer;