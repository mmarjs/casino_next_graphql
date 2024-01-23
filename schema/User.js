import moment from 'moment';
import * as yup from 'yup';

const phoneRegExp =  /^\+(?:[0-9] ?){11,14}[0-9]$/

export const UserPhoneSchema = yup.object({
    phone_number:yup.string().matches(phoneRegExp, 'Must be a valid 10 digit phone number').required('Mobile number is required'),
});

export const UserLoginSchema = yup.object({
    phone_number:yup.string().matches(phoneRegExp, 'Must be a valid 10 digit phone number').required('Mobile number is required'),
    password: yup.string().required('Your password is required'),
});


export const UserPersonalDetailsSchema = yup.object({
    gender:yup.object().required('Gender is required'),
    date_of_birth:yup.object()
    .test(
        'date_of_birth',
        'You must be at least 13 years old',
        value => {
          if(value){
              if(moment().diff(value, 'year') >= 13){
                  return true
              }else{
                  return false;
              }
          }
        }
    )
    .required('DOB is required'),
    native_language:yup.object().required('Native language is required'),
    spoken_languages:yup.array().required('Please select at least one language your speak'),
    hobbies:yup.string().required('Hobbies are required'),
    interests:yup.array().required('Please tell us the things that interests you'),
    improvement_reasons:yup.array().required('Why do want to improve your english?'),
});

export const UserContactDetailsSchema = yup.object({
    email:yup.string().email('Must be a valid email').required('Email is required'),
    address_line1:yup.string().required('Address is required'),
    country_id:yup.object().required('Native language is required'),
    city_id:yup.object().required('Native language is required'),
});