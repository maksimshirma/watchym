import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountsList, AccountForm, getAccountsDataStatus, deleteAccount, getAccountsList } from "../../entities";
import { Button } from "../../shared";

const Accounts = () => {
    const [editAccountId, setEditAccountId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const accounts = useSelector(getAccountsList());
    const dataLoaded = useSelector(getAccountsDataStatus());

    const handleDelete = (id) => {
        dispatch(deleteAccount(id));
    };

    const toggleEdit = (id) => {
        if (!editAccountId) {
            setEditAccountId(id);
        } else {
            setEditAccountId(null);
        }
    };

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    if (dataLoaded) {
        return (
            <>
                <AccountsList
                    accounts={accounts}
                    editAccountId={editAccountId}
                    onDelete={handleDelete}
                    toggleEdit={toggleEdit}
                />
                {!isOpen ? (
                    <Button title={"Добавить"} onClick={toggleOpen} />
                ) : (
                    <AccountForm type={"create"} toggleOpen={toggleOpen} />
                )}
            </>
        );
    }
    return "Loading...";
};

export default Accounts;
