import { Accounts } from "../../widgets";
import { PageHeader } from "../../shared";

const AccauntsPage = () => {
    return (
        <>
            <PageHeader>Мои счета</PageHeader>
            <div className="m-1">
                <Accounts />
            </div>
        </>
    );
};

export default AccauntsPage;
