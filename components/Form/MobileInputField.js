import React, {useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import FieldTextInput from '@/components/Form/TextInputField'
import Box from '@mui/material/Box';
import SelectInputField from './SelectInputField';
import dialCodes from '@/src/countryDialCodes';
import {getObjectFromArrayByKeyValue} from '@/src/helpers';

const useStyles = makeStyles((theme) => ({
   

}));



export default function MobileInputField(props) {
  const classes = useStyles();

  const [country, setCountry] = React.useState("+91");
  const [phone, setPhone] = React.useState("");

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
    helperText
  } = props;


  const handleCountry = (name,value) => {
    setCountry(value.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  useEffect(()=>{
    setFieldValue(name,`${country}${phone}`)
  },[country,phone])

  useEffect(()=>{
    //alert(value)
    if(value && value.length > 10){
      let dialCode = value.slice(0, -10);
      setCountry(dialCode)

      var mobileNumber = value.slice(-10);
      setPhone(mobileNumber)
    }
  },[])

  return (

    <Box flex={1} display="flex">
      <Box flex={1} display="flex">
        <SelectInputField 
          options={dialCodes}
          isSearchable
          setFieldValue={(name,value)=>handleCountry(name,value)}
          value={getObjectFromArrayByKeyValue(dialCodes,"value",country)}
          placeholder="Select Code"
          name={`dial-code-${name}`}
        />
      </Box>
      <Box flexDirection="column" flex={2} display="flex">
        <FieldTextInput
          error ={error}
          touched={touched}
          name={name}
          label={null}
          handleChange={handlePhone}
          value = {phone}
          type = {type}
          placeholder={placeholder}
          size = {size}
          helperText={helperText}
          variant={variant}
          maxLength={10}
        />
      </Box>
    
    </Box>


  );
}