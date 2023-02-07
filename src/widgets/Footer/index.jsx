import PropTypes from "prop-types";
import { LayoutFooter } from "../../shared";

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
