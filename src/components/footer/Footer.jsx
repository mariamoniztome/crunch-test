// Import necessary components
import PromoFooter from '../promofooter/PromoFooter';
import IntroFooter from '../introfooter/IntroFooter';
import Sponsors from '../sponsors/Sponsors';

// Import styling
import './footer.scss';

// Define Footer component
const Footer = () => {
    return (
        <>
            {/* Render PromoFooter component */}
            <PromoFooter />

            {/* Render IntroFooter component */}
            <IntroFooter />

            {/* Render Sponsors component */}
            <Sponsors />
        </>
    );
};

// Export Footer component
export default Footer;