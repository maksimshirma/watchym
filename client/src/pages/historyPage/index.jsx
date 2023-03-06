import { Layout, LayoutMain, LayoutSideBar } from "../../shared";
import { Operations, Accounts } from "../../widgets";

const HistoryPage = () => {
    return (
        <Layout>
            <LayoutSideBar>
                <Accounts />
            </LayoutSideBar>
            <LayoutMain>
                <Operations />
            </LayoutMain>
        </Layout>
    );
};

export default HistoryPage;
