import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { UserLoader, AccountsLoader, getIsLoggedIn } from "../../entities";

const AppLoaderWrapper = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (isLoggedIn) {
        return (
            <UserLoader>
                <AccountsLoader>{children}</AccountsLoader>
            </UserLoader>
        );
    }
    return <>{children}</>;
};

AppLoaderWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppLoaderWrapper;
