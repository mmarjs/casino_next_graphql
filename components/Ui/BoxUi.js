import React from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor:"none",
        padding: theme.spacing(3)
    },
    content:{
        backgroundColor:theme.palette.primary.snow,
        borderRadius:8
    },   
}));


export default function BoxUi(props) {
    const classes = useStyles();
    const {
        contentClass,
        disablePadding,
        children
    } = props;


    return (
        <Box 
            className={classes.card} 
            display="flex"
            flexDirection="column"
        >
            <Box 
                className={clsx(classes.content, contentClass && contentClass)} 
                display="flex" 
                flexDirection="column"
            >
                {children}
            </Box>
        </Box>
    );
}