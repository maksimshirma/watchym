import { LayoutMain, Loader, PageHeader } from "../../shared";
import { AccountsList, AccountsAllMoney, accountsModel, UserCard, UserEditProfileIcon } from "../../entities";
import { useSelector } from "react-redux";
import { EditUserForm, useModal } from "../../features";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    const navigate = useNavigate();
    const { openModal } = useModal();
    const accounts = useSelector(accountsModel.getAccountsList());
    const accountsDataStatus = useSelector(accountsModel.getAccountsDataStatus());
    const handleClickAccount = (id) => {
        navigate(`${id}`);
    };
    return (
        <LayoutMain height={"76%"} position={"relative"}>
            <div className="pt-1 pl-1 absolute" role={"presentation"} onClick={() => openModal(<EditUserForm />)}>
                <UserEditProfileIcon />
            </div>
            <div className="h-full flex">
                <UserCard width={"50%"} />
                {accountsDataStatus ? (
                    <div className="py-5 px-1 w-1/2 h-full">
                        <PageHeader>Мои счета</PageHeader>
                        <AccountsList
                            accounts={accounts}
                            onClick={handleClickAccount}
                            height={"fit-content"}
                            maxHeight={"calc(100%-50px)"}
                        />
                        <AccountsAllMoney paddingLeft={"8px"} marginTop={"8px"} />
                    </div>
                ) : (
                    <div className="w-1/2 flex justify-center items-center">
                        <Loader />
                    </div>
                )}
            </div>
        </LayoutMain>
    );
};

export default UserPage;
