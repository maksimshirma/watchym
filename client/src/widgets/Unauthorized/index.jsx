import { useState } from "react";
import { AuthorizationForm, RegistrationForm } from "../../features";
import { Layout } from "../../shared";

const Unauthorized = () => {
    const [param, setParam] = useState(true);
    if (param) {
        return (
            <Layout.LayoutAuthForm>
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
                        Зарегистрироваться
                    </b>
                </p>
            </Layout.LayoutAuthForm>
        );
    }
    if (!param) {
        return (
            <Layout.LayoutAuthForm>
                <RegistrationForm />
                <div>
                    <p className="pt-1">
                        Уже есть аккаунт?{" "}
                        <b
                            role={"presentation"}
                            className="w-fit cursor-pointer text-black transition-all"
                            onClick={() => setParam((prevState) => !prevState)}
                        >
                            Войти
                        </b>
                    </p>
                </div>
            </Layout.LayoutAuthForm>
        );
    }
};

export default Unauthorized;
