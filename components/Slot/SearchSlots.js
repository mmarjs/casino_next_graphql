import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '@/store/actions/index';
import ButtonUi from "@/components/Ui/ButtonUi";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Formik} from 'formik';
import { useRouter } from 'next/router';
import FormField from '@/components/Form/FormField'
import { SearchSlotsSchema as Schema } from '@/schema/Slots';
import { makeStyles } from '@mui/styles';

//fields
import TextInputField from '@/components/Form/TextInputField'


const useStyles = makeStyles((theme) => ({
    inputClass:{
        background: theme.palette.primary.snow,
        borderRadius:10,
    },
    btn:{
        height:56
    }
}));


const SearchSlots = (props) => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const classes = useStyles();
    const router = useRouter();
    const { isMobile, handleSearch } = props; 

    const _submit = async (data, setSubmitting, resetForm) => {
        
        setIsSubmitting(true)
        if(data.search && data.search!==''){
            router.push({
                pathname:"/slots",
                query:{
                    search:data.search
                }
            },undefined,{
                shallow: true
            });
        }else{
            router.push('/slots')
        }
        
        handleSearch(data.search)
        setIsSubmitting(false)

    }

    const getInitialValues = () => {
 
        let initialValues = {};
        Schema._nodes.forEach(function(value){

            initialValues[value] = '';
            
        });

        return initialValues;
       
    }

    const formFields = [
        {
            variant: "outlined",
            component: TextInputField,
            name: 'search',
            type: 'text',
            placeholder: "Enter the title of an slot...",
            gridItemProps: { xs:12, sm: 8, md:8},
            required:true,
            inputClass: classes.inputClass
        }
    ]

    return(
        <Formik
                initialValues = {getInitialValues()}
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

                <Grid onSubmit={(e)=>{e.preventDefault(); return (submitForm())}} container component = "form" noValidate>
                    
                    <Grid container>
                        {
                            formFields.map((item, index) => {
                                return (
                                    <FormField 
                                        item={item} 
                                        touched = {touched}
                                        errors = {errors}
                                        values = {values}
                                        setFieldValue = {setFieldValue} 
                                        handleChange={handleChange}
                                        verticalGutters
                                        key={item.name}
                                    />
                                )
                            })
                        }
                        <Grid item xs={12} sm={4} md={4} >
                            <Box mb={isMobile?3:0} mt={isMobile?3:0} pl={isMobile?0:2} display="flex" flexDirection="column" flex={1}>
                                <ButtonUi 
                                    isSubmitType 
                                    title = "To look for" 
                                    color = "primary" 
                                    variant = "contained" 
                                    disabled = {isSubmitting} 
                                    loading = {isSubmitting} 
                                    rounded
                                    className={classes.btn}
                                />
                            </Box>
                        </Grid> 
                    </Grid>

                    

                </Grid>
            )}
        </Formik>

     
    )
};


const mapStateToProps = state => ({
   
});

const mapDispatchToProps = dispatch => {
  
  return {
    updateToast: (data) => dispatch(actions.updateToast(data)),
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(SearchSlots))
