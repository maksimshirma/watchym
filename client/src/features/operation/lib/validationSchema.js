import * as yup from "yup";

export const validationSchema = yup.object().shape({
    account: yup.string().required("Обязаятельное поле").length(16, "Необходимое число символов - 16"),
    type: yup.string().required("Обязаятельное поле"),
    category: yup.string(),
    amount: yup.string().required("Обязаятельное поле").max(8, "Максимальное число символов - 8"),
    date: yup.string().required("Обязаятельное поле"),
});
