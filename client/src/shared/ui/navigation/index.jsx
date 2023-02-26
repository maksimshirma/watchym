import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ routes }) => {
    return (
        <div className="flex justify-center">
            {routes &&
                Object.keys(routes).map((key) => {
                    if (key !== "user" && key !== "editUser" && key !== "notFound")
                        return (
                            <div className="flex-auto w-1/2 text-center " key={routes[key].title}>
                                <Link
                                    className="text-[10px] sm:text-[12px] lg:text-sm cursor-pointer hover:text-[15px] hover:border-b-[1px] border-black transition-[font-size] duration-1000"
                                    to={routes[key].path}
                                >
                                    {routes[key].title.toUpperCase()}
                                </Link>
                            </div>
                        );
                })}
        </div>
    );
};

Navigation.propTypes = {
    routes: PropTypes.object,
};

export default Navigation;
