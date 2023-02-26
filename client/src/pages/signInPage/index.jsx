import { Authorization } from "../../widgets";

const SignInPage = () => {
    return (
        <div className="w-full h-full grid justify-items-center content-center">
            <div className="w-1/2 h-fit mb-20">
                <Authorization />
            </div>
        </div>
    );
};

export default SignInPage;
