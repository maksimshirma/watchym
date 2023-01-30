import PropTypes from "prop-types";
import LayoutFooter from "../../shared/ui/layoutFooter/Layout.Footer.jsx";

const Footer = () => {
    return (
        <LayoutFooter>
            <div>Footer</div>
        </LayoutFooter>
    );
};

Footer.propTypes = {
    routes: PropTypes.object,
};

export default Footer;
