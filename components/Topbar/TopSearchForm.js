import React from 'react';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import * as actions from '@/store/actions/index';
import Box from '@mui/material/Box';
import { Formik} from 'formik';
import {IoSearchOutline} from 'react-icons/io5';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 12,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(6)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '28ch',
        '&:focus': {
          width: '35ch',
        },
      },
      height:40,
    },
  }));


const TopSearchForm = (props) => {
    
    const _submit = (data, setSubmitting, resetForm) => {
        
        if(data && data.search && data.search.trim()===""){
            return false;
        }
        resetForm();
        window.location.href = `/?search=${data.search}`;
    }

    return(
        <Formik
                initialValues = {{search:""}}
                enableReinitialize
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    _submit(values, setSubmitting, resetForm)
                }}
            >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
                setFieldValue,
                setFieldTouched,
                submitForm
            }) => (

                <Box width="100%" display="flex" alignItems="center" onSubmit={(e)=>{e.preventDefault(); return (submitForm())}} component = "form" noValidate>
                    <Search>
                        <SearchIconWrapper>
                            <IoSearchOutline size={28} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search casinos &amp; games..."
                            name="search"
                            value={values.search}
                            onChange={handleChange}
                            autoComplete='off'
                            
                        />
                    </Search>
                </Box>
            )}
        </Formik>

     
    )
};


const mapStateToProps = state => ({
   
});

const mapDispatchToProps = dispatch => {
  
  return {
    onUpdateToast: (data) => dispatch(actions.updateToast(data)),
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(TopSearchForm))