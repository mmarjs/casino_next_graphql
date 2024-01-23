import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    formControl: {
        paddingLeft:0,
        borderColor:"#0099cc",
        width:"100%"
    },
    formGroup: {

    }
}));



export default function FormItem(props) {
  const classes = useStyles();

  const { formGroupClass, button } = props;

  const xs = props.xs!==undefined?props.xs:12;
  const sm = props.sm!==undefined?props.sm:xs;
  const md = props.md!==undefined?props.md:sm;
  const lg = props.lg!==undefined?props.lg:md;

  return (
    
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
        {button?
        props.children:
        <FormGroup classes={{root:clsx(classes.formGroup, formGroupClass)}}>
            <FormControl classes={{root:classes.formControl}}>
                {props.children}
            </FormControl>
        </FormGroup>
        }
    </Grid>
  );
}