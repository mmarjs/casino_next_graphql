import * as React from 'react';
import YupErrorMessage from './FieldError';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';




export default function FieldRadio(props) {
  const {name, value, handleChange, options} = props;
  return (
    <>

      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={handleChange}
        style={{flexDirection:"row", marginBottom:0, height:30}}
      >
        {options.map((item)=>{
          return <FormControlLabel key={"radio_"+item.value} style={{flex:1}}  value={item.value} control={<Radio />} label={item.label} />
        })}

      </RadioGroup>

    <YupErrorMessage name={props.name} />

    </>
  );
}