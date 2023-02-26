import { useDispatch, useSelector } from "react-redux";
import { AccountsList, accountsModel, AccountsAllMoney } from "../../entities";
import { AddAccountIcon, PageHeader } from "../../shared";
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
                <PageHeader>Мои счета</PageHeader>
                <div className="w-fit ml-2">
                    <AccountsAllMoney />
                </div>
                <PageHeader>Счета</PageHeader>
                <AccountsList onDelete={handleDelete} onEdit={handleEdit} />
                <PageHeader>Добавить счёт</PageHeader>
                <AddAccountIcon onCreate={handleCreate} />
            </div>
        );
    }
    return "Loading...";
};

export default Accounts;
