import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import LinearProgress from '@mui/material/LinearProgress';
import { checkPasswordStrength } from '@/src/helpers';

const useStyles = makeStyles((theme) => ({
  labelRoot:{
    fontSize: theme.typography.pxToRem(16),
  },
  labelFocused:{
    color: theme.palette.text.main
  },
  rootInput:{
    background:"none",
    borderRadius: 6,
    borderWidth:1,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:before':{
      borderBottom: "none"
    },
    '&:hover':{
      background:"none",
      background: theme.palette.primary.snow,
      boxShadow:"0px 10px 32px rgba(132, 112, 164, 0.2)"
    },
    minHeight: 54,
    width:"100%"
  },
  error:{
    borderWidth:1
  },
  focused:{
    borderWidth:1
  },
  helperText:{
    marginLeft:0
  },
  determinate:{
    backgroundColor:"#ffffff"  
  },
  bar20:{
    width:"20%",
    background:"linear-gradient(90deg, rgba(243,122,115,1) 33%, rgba(255,130,0,1) 74%)"
  },
  bar60:{
    width:"60%",
    background:"linear-gradient(90deg, rgba(243,122,115,1) 15%, rgba(221,217,19,1) 71%)"
  },
  bar100:{
    width:"100%",
    background: "linear-gradient(90deg, rgba(243,122,115,1) 4%, rgba(167,221,19,1) 35%, rgba(55,180,74,1) 74%);"
  },
}));



export default function TextInput(props) {

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthLabel, setPasswordStrengthLabel] = useState(null);


  const classes = useStyles();
  const {
    name, 
    value, 
    forceUppercase, 
    handleChange, 
    label, 
    error,
    touched,
    type, 
    variant, 
    placeholder, 
    multiline, 
    rows, 
    maxRows, 
    inputClass,
    size,
    maxLength,
    helperText,
    params,
    enablePwStrengthMeter
  } = props;


  useEffect(()=>{
    if(enablePwStrengthMeter){
      passwordStrengthChecker()
    }
  },[value])

  const passwordStrengthChecker = () => {

    if(value){
      if(checkPasswordStrength(value) === 100) {
        setPasswordStrength(100)
        setPasswordStrengthLabel("Great! Perfect Password.")
      } else if(checkPasswordStrength(value) === 60) {
        setPasswordStrength(60)
        setPasswordStrengthLabel("Can be guessed. You can do better.")
      } else {
        setPasswordStrength(20)
        setPasswordStrengthLabel("Too easy to guess.")
      }
    }else{
      setPasswordStrength(0)
      setPasswordStrengthLabel(null)
    }
    
  }


  return (

    <Box display="flex" flexDirection="column">
      <TextField
        name={name}
        onChange={handleChange}
        value = {forceUppercase?value.toUpperCase():value}
        type = {type}
        placeholder={placeholder}
        size = {size?size:"medium"}
        rows = {rows?rows:2}
        maxRows = {maxRows?maxRows:2}
        helperText={touched && error?error:helperText}
        multiline = {multiline}
        InputProps={{
          classes: {
            root: clsx(classes.rootInput, inputClass),
            error: classes.error,
            focused: classes.focused
          }
        }}
        inputProps={{
          maxLength: maxLength
        }}
        FormHelperTextProps={{
          classes:{root:classes.helperText}
        }}
        {...params}
        variant = {variant?variant:"outlined"}
        label = {label}
        error ={touched && error?true:false}
      />

      {enablePwStrengthMeter && value && value.length > 0 && <Box alignItems="center"  mt={1} display="flex">
          <Box display="flex" flexDirection="column" flex={1}>
            <LinearProgress 
              classes={{
                barColorPrimary: classes[`bar${passwordStrength}`], 
                determinate: classes.determinate
              }} 
              variant="determinate" 
              value={passwordStrength} 
            />
          </Box>
          {passwordStrengthLabel &&
          <Box pl={2} justifyContent="flex-end" display="flex">
            <Typography fontSize={12}>{passwordStrengthLabel}</Typography>
          </Box>}
      </Box>}
    </Box>


  );
}