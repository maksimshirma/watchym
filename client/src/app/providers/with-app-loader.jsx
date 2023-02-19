import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { UserLoader, AccountsLoader, userModel, OperationsLoader } from "../../entities";

const AppLoaderWrapper = ({ children }) => {
    const isLoggedIn = useSelector(userModel.getIsLoggedIn());
    if (isLoggedIn) {
        return (
            <UserLoader>
                <AccountsLoader>
                    <OperationsLoader>{children}</OperationsLoader>
                </AccountsLoader>
            </UserLoader>
        );
    }
    return <>{children}</>;
};

AppLoaderWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppLoaderWrapper;
