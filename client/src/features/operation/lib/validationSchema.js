import * as yup from "yup";

export const validationSchema = yup.object().shape({
    account: yup.string().required("Обязаятельное поле"),
    type: yup.string().required("Обязаятельное поле"),
    category: yup.string(),
    amount: yup.string().required("Обязаятельное поле"),
    date: yup.string().required("Обязаятельное поле"),
});
