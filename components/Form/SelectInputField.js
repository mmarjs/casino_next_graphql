import * as React from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Select from 'react-select'
import { useTheme } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';

const useStyles = makeStyles((theme) => ({
    root:{
        width:"100%",
        '& .react-select__control':{
            height: 54,
            borderColor: "rgba(0,0,0,0.25)",
        },
        '& .react-select__control--is-focused':{
            borderColor: theme.palette.primary.main,
            borderWidth:2,
            boxShadow:`none`
        },
        '& .react-select__menu':{
            zIndex: 2
        },
        '& .react-select__option':{
            cursor:"pointer",
            '&:hover':{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.text.main,
            }
        }
    },
    helperText:{
      marginLeft:0
    },
}));




export default function SelectInputField(props) {
  const classes = useStyles();
  const muiTheme = useTheme()

  const {
    name,
    value,
    touched,
    error,
    helperText,
    placeholder,
    options,
    isSearchable,
    setFieldValue,
    className
  } = props;

  const handleChange = (value) => {
    setFieldValue(name,value)
  }

  return (
    <>
    <Select
        instanceId={name} 
        options={options}
        name={name} 
        //value={value}
        value = {
          typeof value==="string"?options.filter(option => option.value === value) : value
        }
        onChange={handleChange}
        placeholder={placeholder}
        className={clsx(classes.root, className && className)}
        classNamePrefix="react-select"
        theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: muiTheme.palette.primary.main,
            },
        })}
        isSearchable={isSearchable?isSearchable:false}
    />
    <FormHelperText classes={{root:classes.helperText}} error = {error && touched}>{error && touched ? error : helperText}</FormHelperText>
    </>
  );
}