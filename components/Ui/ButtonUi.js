import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import Link from 'next/link';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgressUi from './CircularProgressUi';

const useStyles = makeStyles((theme) => ({
  
    btn:{
        fontWeight: 600,
        textTransform:"none",
        minHeight:45,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius:8,
        borderWidth: 2,
        borderStyle:"solid",
        boxShadow:"none",
        backgroundColor:theme.palette.text.main,
        borderColor: theme.palette.text.main,
        color: theme.palette.primary.angelic,
        '&:hover':{
            boxShadow:"none",
            background: "none",
            borderColor: theme.palette.text.main,
            color: theme.palette.text.main,
            borderWidth: 2,
            borderStyle:"solid"
        },
        fontSize: theme.typography.pxToRem(18),
    },
    btnRounded:{
        borderRadius:8
    },
    btn_circle:{
        borderRadius:"50%"
    },
    small:{
        minHeight:35,
        fontSize: theme.typography.pxToRem(16),
    },
    large:{
        minHeight:60,
        fontSize: theme.typography.pxToRem(20),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    //primary
    primary_contained:{
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color:"#ffffff",
        '&:hover':{
            background: "none",
            borderColor: theme.palette.primary.main,
            color:"#ffffff",
        }
    },
    secondary_contained:{
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color:"#ffffff",
        '&:hover':{
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            color:"#ffffff",
        }
    }  
}));



export default function ButtonUi(props) {
  
    const classes = useStyles();
  
    const {
        variant, 
        color, 
        disabled, 
        handleClick, 
        fullWidth, 
        className, 
        loading, 
        component, 
        href, 
        as, 
        isSubmitType, 
        startIcon, 
        endIcon, 
        size, 
        prefetch,
        ref,
        id,
        rounded,
        title,
    } = props;


    const btnProps = {
        variant:variant,
        classes:{root:clsx(classes.btn, className, size && classes[size], rounded && classes.btnRounded, color && classes[`${color}_${variant}`])},
        disabled:disabled,
        fullWidth:fullWidth,
        onClick:handleClick,
        type:isSubmitType?"submit":undefined,
        startIcon:startIcon,
        endIcon:endIcon,
        size:size,
        href:href,
        ref:ref,
        id:id,
    }


    const button = (
        !loading?
        <Button {...btnProps}>
            {title}
        </Button>
        :<LoadingButton loadingIndicator={<CircularProgressUi />} className={classes.loadingBtn} loading loadingPosition="center" {...btnProps}>
            {title}
        </LoadingButton>
    )
  
  
    return (
        <>
            {component!=="a"?
            button
            : 
            <Link prefetch={prefetch} href={href} as = {as} passHref>
                {button}
            </Link>}
        </>
    );
}