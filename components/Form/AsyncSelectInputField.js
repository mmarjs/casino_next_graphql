import React, {useState, useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import AsyncSelect from 'react-select/async';
import { useTheme } from '@mui/material/styles';
import axios from '@/axios';
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




export default function AsyncSelectInputField(props) {
  const classes = useStyles();
  const muiTheme = useTheme();
  const [defaultOptions, setDefaultOptions] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    name,
    value,
    touched,
    error,
    helperText,
    placeholder,
    setFieldValue,
    endpoint,
    searchParamName,
    mapLabelField,
    mapValueField,
    queryParams,
    multiple,
    className
  } = props;


  const handleChange = (value) => {
    setFieldValue(name,value)
  }

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const getOptions = async (inputValue,callback) => {
    setLoading(true)
    let query = {...queryParams}

    var requestParams = {};
    var params = new URLSearchParams();

    //add all query params
    Object.keys(query).forEach((key, index) => {
      params.append(key, query[key]);
    });
    //add search params and its value
    if(inputValue){
      params.append(searchParamName, inputValue);
    }
    //limit results
    params.append("_limit", 10);
    requestParams.params = params;
    const response = await axios.get(endpoint,requestParams);
    let op = [];
    response.data.map((item) => {
        op.push({
            label: item[mapLabelField]?item[mapLabelField]:"NA",
            value: item[mapValueField]
        })
    });
    setLoading(false);
    if(callback){
      return callback(op)
    }else{
      return op;
    }
  }

  const loadOptions = async (inputValue, callback) => {
    if (!inputValue) {
      return callback([]);
    }
    return getOptions(inputValue,callback);
  }

  const onMenuOpen = async () =>{
    let ops = await getOptions();
    setDefaultOptions(ops)
  }


  return (
    <>
    <AsyncSelect
        instanceId={name} 
        name={name} 
        value = {
          typeof value==="string"?defaultOptions.filter(option => option.value === value) : value
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
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        isMulti={multiple}
        loadingMessage={()=>"Fetching options..."}
        defaultOptions={defaultOptions}
        isLoading={loading}
        onMenuOpen={()=>onMenuOpen()}
    />
    <FormHelperText classes={{root:classes.helperText}} error = {error && touched}>{error && touched ? error : helperText}</FormHelperText>
    </>
  );
}