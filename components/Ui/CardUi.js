import React from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor:"none",
        padding: theme.spacing(1.1)
    },
    content:{
        backgroundColor: theme.palette.secondary.dark,
        borderRadius:15
    },   
    contentBorder:{
        border: `1px solid ${theme.palette.border.main}`
    },

}));


export default function CardUi(props) {
    const classes = useStyles();
    const {
        contentClass,
        disablePadding,
        children,
        cardClass,
        enableBorder,
        title
    } = props;


    return (
        <Box 
            className={clsx(classes.card, cardClass && cardClass)}
            display="flex"
            flexDirection="column"
        >
            
            <Box 
                className={clsx(
                    classes.content, 
                    contentClass && contentClass,
                    enableBorder && classes.contentBorder
                )} 
                display="flex" 
                flexDirection="column"
                p={disablePadding?0:3}
            >
                {title &&
                <Box display="flex" flexDirection="column" className={classes.header}>
                    <Typography>{title}</Typography>
                </Box>}
                {children}
            </Box>
        </Box>
    );
}
