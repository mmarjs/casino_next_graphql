import * as React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
//fields
import TextInputField from '@/components/Form/TextInputField'


export default function DatePickerField(props) {

    const {
        name, 
        value, 
        handleChange, 
        label, 
        touched, 
        error, 
        type, 
        variant, 
        placeholder,
        setFieldValue, 
        size,
        helperText,
        isMobile,
        maxDate
    } = props;

    const catchChange = (value) => {
        setFieldValue(name, value)
    }
  
    return(
        <LocalizationProvider dateAdapter={DateAdapter}>
            {
                 React.createElement(isMobile?MobileDatePicker:DesktopDatePicker,{
                    inputFormat:"yyyy-MM-DD",
                    value: value,
                    mask:"____-__-__",
                    onChange: catchChange,
                    maxDate:maxDate?maxDate:null,
                    renderInput:(params)=> <TextInputField
                        params={params}
                        error ={error}
                        touched={touched}
                        name={name}
                        label={null}
                        //handleChange={handleChange}
                        value = {value}
                        type = {type}
                        placeholder={placeholder}
                        size = {size}
                        helperText={helperText}
                        variant={variant}
                        maxLength={10}
                    />
                 })
            }
        </LocalizationProvider>
    )
}