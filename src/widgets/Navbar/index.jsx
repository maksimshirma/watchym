import PropTypes from "prop-types";
import LayoutHeader from "../../shared/ui/layoutHeader/Layout.Header.jsx";
import Navigation from "./ui/navigation";

const Navbar = ({ routes }) => {
    return (
        <LayoutHeader>
            <div className="flex-auto">Logo</div>
            <Navigation routes={routes} />
            <div className="flex-auto relative">
                <div className="absolute inset-y-0 right-0">User</div>
            </div>
        </LayoutHeader>
    );
};

Navbar.propTypes = {
    routes: PropTypes.object,
};

export default Navbar;
