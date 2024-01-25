import './formik.scss';

import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';



// const validate = (values) => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Обязательное поле'
//     } else if (values.name.length < 2) {
//         errors.name = 'минимум 2 символа'
//     }

//     if (!values.email) {
//         errors.email = 'Обязательное поле'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'неправильный email'
//     }

//     return errors;
// }

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>) : null}
        </>
    )
}


const FormField = () => {





    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поле нах!'),

                email: Yup.string()
                    .email('не правильно ввели Email')
                    .required('Обязательное поле нах!'),

                amount: Yup.number()
                    .min(5, 'не менее 5'),


                currency: Yup.string().required('Пустое поле'),

                text: Yup.string()
                    .min(10, '10 simbols!!!!'),
                terms: Yup.boolean()
                    .required('Обязательное поле нах!')
                    .oneOf([true], 'Необходимо согласие')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
        
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                {/* провели эксперемнт */}
                <MyTextInput
                    label='Ваше имя'
                    id="name"
                    name="name"
                    type="text"

                />
                {/* тоже самое что и нижняя строчка */}
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className='error' name='email' component='div' />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"

                />
                <ErrorMessage className='error' name='amount' component='div' />
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className='error' name='currency' component='div' />
                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className='error' name='text' component='div' />
                <label className="checkbox">
                    <Field
                        name="terms"
                        type="checkbox"

                    />
                    Соглашаетесь с политикой конфиденциальности?

                </label>
                <ErrorMessage className='error' name='terms' component='div' />
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default FormField;