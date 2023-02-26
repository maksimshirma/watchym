import { useState } from "react";
import { AuthorizationForm, RegistrationForm } from "../../features";
import { LayoutAuthForm } from "../../shared";

const Unauthorized = () => {
    const [param, setParam] = useState(true);
    if (param) {
        return (
            <LayoutAuthForm>
                <div>
                    <AuthorizationForm />
                </div>
                <p className="pt-1">
                    Нет аккаунта?{" "}
                    <b
                        role={"presentation"}
                        className="w-fit cursor-pointer text-black transition-all"
                        onClick={() => setParam((prevState) => !prevState)}
                    >
                        Зарегистрируйтесь!
                    </b>
                </p>
            </LayoutAuthForm>
        );
    }
    if (!param) {
        return (
            <LayoutAuthForm>
                <RegistrationForm />
                <div>
                    <p className="pt-1">
                        Уже есть аккаунт?{" "}
                        <b
                            role={"presentation"}
                            className="w-fit cursor-pointer text-black transition-all"
                            onClick={() => setParam((prevState) => !prevState)}
                        >
                            Войдите!
                        </b>
                    </p>
                </div>
            </LayoutAuthForm>
        );
    }
};

export default Unauthorized;
