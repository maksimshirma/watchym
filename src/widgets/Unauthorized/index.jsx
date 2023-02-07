import { Link } from "react-router-dom";

const Unauthorized = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center w-1/2">
                <div>
                    <p>Вы не авторизованы!</p>
                </div>
                <div className="">
                    <p>
                        Чтобы начать пользоваться сайтом, <Link to="/signIn">войдите</Link> в существующую учётную
                        запись или <Link to="/signUp">зарегистрируйтесь</Link>, если у Вас её нет.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;
