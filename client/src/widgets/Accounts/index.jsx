import { useSelector } from "react-redux";
import { AccountsList, accountsModel, AccountsAllMoney, AddAccountIcon } from "../../entities";
import { PageHeader, Loader } from "../../shared";
import { EditAccountForm, CreateAccountForm, useModal } from "../../features";

const Accounts = () => {
    const accounts = useSelector(accountsModel.getAccountsList());
    const dataLoaded = useSelector(accountsModel.getAccountsDataStatus());

    const { openModal } = useModal();

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
                    <AccountsAllMoney marginLeft={"8px"} />
                    <PageHeader>Счета</PageHeader>
                    <AccountsList accounts={accounts} onEdit={handleEdit} height={"fit-content"} maxHeight={"67%"} />
                    <PageHeader>Добавить счёт</PageHeader>
                    <AddAccountIcon onCreate={handleCreate} marginLeft={"8px"} />
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
