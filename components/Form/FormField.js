import * as React from 'react';
import { makeStyles } from '@mui/styles';
import FormItem from '@/components/Form/FormItem'
import FormSpacer from '@/components/Form/FormSpacer';
import FormFieldLabel from '@/components/Form/FormFieldLabel';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import {IoInformationCircle} from 'react-icons/io5'
import TooltipUi from '@/components/Ui/TooltipUi';


const useStyles = makeStyles((theme) => ({

    horizontalGutters:{
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },
    leftGutter:{
        paddingLeft: theme.spacing(2),
    },
    rightGutter:{
        paddingRight: theme.spacing(2),
    },
    verticalGutters:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));



export default function FormField(props) {
  const classes = useStyles();

  const { item } = props;
  
  const { formGroupClass, formFieldLabel } = props;

  return (
    <>
    {item.newLine && !item.hidden ? <FormSpacer /> : null}
    <FormItem key={item.name} formGroupClass={clsx(formGroupClass, item.horizontalGutters && classes.horizontalGutters, item.verticalGutters && classes.verticalGutters, item.leftGutter && classes.leftGutter, item.rightGutter && classes.rightGutter)} xs={item.gridItemProps.xs} sm={item.gridItemProps.sm} md = {item.gridItemProps.md}> 

        {formFieldLabel && !item.hidden?
            <Box flexWrap="wrap" display="flex">
                <FormFieldLabel label={item.label} required={item.required} />
                {item.tooltipInfo &&
                <TooltipUi title={item.tooltipInfo} placement="top" arrow>
                    <span>
                        <IoInformationCircle size={18} className={classes.infoIcon} />
                    </span>
                </TooltipUi>}
            </Box>
        :null}  

        {
            !item.hidden?
            React.createElement(item.component,{
                variant: item.variant,
                label: formFieldLabel?null:item.label,
                touched: props.touched?props.touched[item.name]:false, 
                error: props.errors?props.errors[item.name]:false,
                setFieldValue : props.setFieldValue,
                value: props.values?props.values[item.name]:null,
                handleChange: props.handleChange,
                name: item.name,
                type: item.type,
                placeholder: item.placeholder,
                disabled: item.disabled,
                options: item.options,
                key: item.key,
                required: item.required,
                helperText: item.helperText,
                multiple: item.multiple,
                rows: item.rows,
                maxRows: item.maxRows,
                multiline: item.multiline,
                forceCapitalize: item.forceCapitalize,
                forceSlug: item.forceSlug,
                maxLength: item.maxLength,
                inputClass: item.inputClass,
                isMobile: item.isMobile,
                className: item.className,
                //async select options
                endpoint: item.endpoint,
                searchParamName: item.searchParamName,
                mapLabelField: item.mapLabelField,
                mapValueField: item.mapValueField,
                queryParams: item.queryParams,
                enablePwStrengthMeter: item.enablePwStrengthMeter,
                maxDate: item.maxDate,
                disableAutocomplete: item.disableAutocomplete
                
            }):null
        }
    </FormItem>
    </>
    
  );
}