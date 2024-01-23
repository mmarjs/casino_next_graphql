
import * as yup from 'yup';

const phoneRegExp =  /^\+(?:[0-9] ?){11,14}[0-9]$/

export const AuthForgotPasswordSchema = yup.object({
    email:yup.string().email('Must be a valid email').required('Email is required'),
});

export const AuthResetPasswordSchema = yup.object({
    password: yup.string().min(8, "Must have at least 8 characters").required('Your password is required'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const CtaStartFreeTrialSchema = yup.object({
    phone_number:yup.string().matches(phoneRegExp, 'Must be a valid 10 digit phone number').required('Mobile number is required'),
});
