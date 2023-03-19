import { LayoutMain } from "../../shared";
import { useParams } from "react-router-dom";
import { AccountCard } from "../../entities";

const AccountPage = () => {
    const { accountId } = useParams();
    return (
        <LayoutMain height={"76%"}>
            <AccountCard id={accountId} />
        </LayoutMain>
    );
};

export default AccountPage;
