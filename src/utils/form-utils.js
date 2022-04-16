import * as Yup from "yup";




export const SignUpvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: Yup.string().required("Phone Number is required"),
});

export const LoginvalidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),

});

export const ResetPasswordvalidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),

});
