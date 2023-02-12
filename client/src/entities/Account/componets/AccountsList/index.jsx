import PropTypes from "prop-types";
import Account from "../Account";
import AccountForm from "../AccountForm";

const AccountsList = ({ accounts, editAccountId, onDelete, toggleEdit }) => {
    return (
        <>
            {accounts &&
                accounts.map((account) => {
                    if (editAccountId !== account._id)
                        return (
                            <Account
                                key={account._id}
                                _id={account._id}
                                name={account.name}
                                number={account.number}
                                amount={account.amount}
                                toggleEdit={toggleEdit}
                                onDelete={onDelete}
                            />
                        );
                    return (
                        <AccountForm
                            key={account._id}
                            type={"edit"}
                            account={account}
                            toggleEdit={toggleEdit}
                            editAccountId={editAccountId}
                        />
                    );
                })}
        </>
    );
};

AccountsList.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.object),
    editAccountId: PropTypes.string,
    onDelete: PropTypes.func,
    toggleEdit: PropTypes.func,
};

export default AccountsList;
