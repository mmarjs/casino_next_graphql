import * as React from 'react';
import YupErrorMessage from './FieldError';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




export default function CheckboxInput(props) {
  const {name, label, value, setFieldValue} = props;
  return (
    <>

    <FormControlLabel
        control={<Checkbox checked = {value} onChange={() => setFieldValue(name, !value)} color="primary" />}
        label={label}
        labelPlacement="left"
    />

    <YupErrorMessage name={props.name} />

    </>
  );
}