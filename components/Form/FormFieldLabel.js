import * as React from 'react';
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    label:{
        fontSize: theme.typography.pxToRem(14),
        marginBottom: theme.spacing(1),
        fontWeight: 600,
        paddingLeft: 0,
        transform:"none",
        color: theme.palette.text.main,
        whiteSpace:"normal"
    },
    labelFormControl:{
        position:"relative",
        paddingLeft:0
    },
    asterisk:{
      color: theme.palette.error.main
    }
}));



export default function FormFieldLabel(props) {
  const classes = useStyles();

  const { label, required } = props;

  return (
        <InputLabel variant="outlined" classes={{root:classes.label, formControl:classes.labelFormControl}}>
          {label} {required ? <span className={classes.asterisk}>*</span>:null}
        </InputLabel>
  );
}