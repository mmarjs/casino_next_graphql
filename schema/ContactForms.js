import * as yup from 'yup';


export const ContactUsFormSchema = yup.object({
    fullname:yup.string().required('Your name is required'),
    email:yup.string().email('Must be a valid email').required('Email is required'),
    phone_number:yup.string().required('Mobile number is required')
});

export const NewsletterFormSchema = yup.object({
    email:yup.string().email('Must be a valid email').required('Email is required')
});

export const DownloadAppFormSchema = yup.object({
    phone_number:yup.string().required('Mobile number is required')
});