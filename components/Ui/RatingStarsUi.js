import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    label:{
        fontSize: theme.typography.pxToRem(14)
    }
}));


export default function ImageUi(props) {
    
    const classes = useStyles();
    const {
        value,
        label
    } = props;


    return (
        <Box display="flex" alignItems="center">
            <Rating name="read-only" value={value} readOnly />
            <Box ml={1} display="flex">
                <Typography className={classes.label} component="p" variant="p">(22 Reviews)</Typography>
            </Box>
        </Box>
    );
}
