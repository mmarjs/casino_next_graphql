import { Field, getIn } from 'formik';
import React from "react";
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  error: {
    fontSize:12,
    fontWeight:500,
    color:"#ea155f",
    paddingTop:"5px"
  },
}));

export default function YupErrorMessage({name}) {
  const classes = useStyles();
  return (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? <Typography classes={{root:classes.error}}>{error}</Typography> : null;
    }}
  />
  );
}

