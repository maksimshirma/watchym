import { PageHeader, LayoutMain } from "../../shared";
import { Operations, Accounts } from "../../widgets";

const HistoryPage = () => {
    return (
        <LayoutMain>
            <Accounts />
            <div className="h-[85%] w-full">
                <PageHeader>Мои операции</PageHeader>
                <Operations />
            </div>
        </LayoutMain>
    );
};

export default HistoryPage;
