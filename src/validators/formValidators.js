import * as yup from 'yup';

//validation schema
export const formValidators = yup.object().shape({
    email: yup.string()
        .email('Enter a valid email')
        .required('Enter an email'),
    firstName: yup.string()
        .min(2, 'This fiels must have at least 2 characters')
        .max(15, 'This field cannot have more than 15 characters')
        .required('Enter your name'),
    lastName: yup.string()
        .min(2, 'This fiels must have at least 2 characters')
        .max(60, 'This field cannot have more than 60 characters')
        .required('Enter your surname'),
    password: yup.string()
        .min(6, 'Your password must have at least 6 characters')
        .max(10, 'Your password cannot have more than 10 characters')
        .required('Enter a password'),
    passwordRepeat: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords do not match')
        .required('Repeat the password'),
});