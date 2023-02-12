import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ routes }) => {
    return (
        <div className="flex">
            {routes &&
                Object.keys(routes).map((key) => {
                    if (key !== "user" && key !== "editUser" && key !== "notFound")
                        return (
                            <Link className="flex-auto text-center" key={routes[key].title} to={routes[key].path}>
                                {routes[key].title}
                            </Link>
                        );
                })}
        </div>
    );
};

Navigation.propTypes = {
    routes: PropTypes.object,
};

export default Navigation;
