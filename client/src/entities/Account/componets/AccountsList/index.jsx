import PropTypes from "prop-types";
import Account from "../Account";

const AccountsList = ({ accounts, onClick, ...props }) => {
    return (
        <div className="w-full overflow-y-auto" style={{ ...props }}>
            {accounts && accounts.map((account) => <Account key={account._id} _id={account._id} onClick={onClick} />)}
        </div>
    );
};

AccountsList.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
};

export default AccountsList;
