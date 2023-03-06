import { useDispatch, useSelector } from "react-redux";
import { AccountsList, accountsModel, AccountsAllMoney, AddAccountIcon } from "../../entities";
import { PageHeader, Loader } from "../../shared";
import { EditAccountForm, CreateAccountForm, useModal } from "../../features";

const Accounts = () => {
    const dispatch = useDispatch();
    const dataLoaded = useSelector(accountsModel.getAccountsDataStatus());

    const { openModal } = useModal();

    const handleDelete = (id) => {
        dispatch(accountsModel.deleteAccount(id));
    };

    const handleCreate = () => {
        openModal(<CreateAccountForm />);
    };

    const handleEdit = (id) => {
        openModal(<EditAccountForm _id={id} />);
    };

    return (
        <div className="h-full p-1">
            <PageHeader>Мои счета</PageHeader>
            {dataLoaded ? (
                <>
                    <div className="ml-2">
                        <AccountsAllMoney />
                    </div>
                    <PageHeader>Счета</PageHeader>
                    <div className="w-full h-fit max-h-[67%] overflow-y-auto">
                        <AccountsList onDelete={handleDelete} onEdit={handleEdit} />
                    </div>
                    <PageHeader>Добавить счёт</PageHeader>
                    <div className="ml-2">
                        <AddAccountIcon onCreate={handleCreate} />
                    </div>
                </>
            ) : (
                <div className="flex justify-center">
                    <Loader width={160} height={64} />
                </div>
            )}
        </div>
    );
};

export default Accounts;
