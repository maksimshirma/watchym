import * as yup from "yup";

export const validationSchema = yup.object().shape({
    name: yup.string().required("Обязаятельное поле").max(10, "Максимальное число символов 10"),
    number: yup.string().required("Обязаятельное поле"),
    amount: yup.string().required("Обязаятельное поле"),
});
