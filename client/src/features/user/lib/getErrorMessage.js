export const getErrorMessage = (error) => {
    const { message } = error;
    //prettier-ignore
    switch (message) {
    case "EMAIL_NOT_FOUND":
        return "Пользователь с таким email не был найден.";
    case "INVALID_PASSWORD":
        return "Неверный пароль.";
    case "EMAIL_EXISTS":
        return "Пользователь с таким email уже существует.";
    }
};
