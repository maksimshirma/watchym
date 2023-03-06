import { Layout, LayoutSideBar, LayoutMain } from "../../shared";
import { Accounts, Analytics } from "../../widgets";

const AnalyticsPage = () => {
    return (
        <Layout>
            <LayoutSideBar>
                <Accounts />
            </LayoutSideBar>
            <LayoutMain>
                <Analytics />
            </LayoutMain>
        </Layout>
    );
};

export default AnalyticsPage;
