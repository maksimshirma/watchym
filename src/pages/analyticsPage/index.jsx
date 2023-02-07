import { Button } from "../../shared";
import { useDispatch } from "react-redux";
import { signOut } from "../../entities";

const AnalyticsPage = () => {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut());
    };
    return (
        <div>
            Analytics Page
            <Button title={"Выйти"} onClick={handleSignOut} />
        </div>
    );
};

export default AnalyticsPage;
