import { useDispatch, useSelector } from "react-redux";
import { AccountsList, accountsModel } from "../../entities";
import { AddAccountIcon } from "../../shared";
import { EditAccountForm, CreateAccountForm, modalModel } from "../../features";

const Accounts = () => {
    const dispatch = useDispatch();
    const dataLoaded = useSelector(accountsModel.getAccountsDataStatus());

    const handleDelete = (id) => {
        dispatch(accountsModel.deleteAccount(id));
    };

    const handleCreate = () => {
        dispatch(modalModel.handleOpenModal(<CreateAccountForm />));
    };

    const handleEdit = (id) => {
        dispatch(modalModel.handleOpenModal(<EditAccountForm _id={id} />));
    };

    if (dataLoaded) {
        return (
            <div className="m-1">
                <p className="text-2xl">Мои счета</p>
                <AccountsList onDelete={handleDelete} onEdit={handleEdit} />
                <p className="text-2xl">Добавить счёт</p>
                <AddAccountIcon onCreate={handleCreate} />
            </div>
        );
    }
    return "Loading...";
};

export default Accounts;
