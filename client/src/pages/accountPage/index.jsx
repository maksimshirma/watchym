import { Layout } from "../../shared";
import { useParams } from "react-router-dom";
import { AccountCard } from "../../entities";

const AccountPage = () => {
    const { accountId } = useParams();
    return (
        <Layout.LayoutMain height={"76%"}>
            <AccountCard id={accountId} />
        </Layout.LayoutMain>
    );
};

export default AccountPage;
