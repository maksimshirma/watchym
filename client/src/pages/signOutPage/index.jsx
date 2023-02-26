import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userModel } from "../../entities";

const SignOutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userModel.signOut());
    }, [dispatch]);
    return null;
};

export default SignOutPage;
