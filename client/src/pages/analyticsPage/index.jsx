import { LayoutMain, PageHeader } from "../../shared";
import { Accounts, Analytics } from "../../widgets";

const AnalyticsPage = () => {
    return (
        <LayoutMain>
            <Accounts />
            <div className="w-full h-full">
                <PageHeader>Аналитика</PageHeader>
                <Analytics />
            </div>
        </LayoutMain>
    );
};

export default AnalyticsPage;
