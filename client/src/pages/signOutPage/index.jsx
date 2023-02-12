import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../entities";

const SignOutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signOut());
    }, [dispatch]);
    return null;
};

export default SignOutPage;
