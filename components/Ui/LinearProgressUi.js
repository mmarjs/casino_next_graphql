import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:theme.palette.primary.main,
        height:5,
        borderRadius:5
    },
    colorSecondary:{
        backgroundColor:theme.palette.accent.main
    }
}));


export default function LinearProgressUi(props) {
    const classes = useStyles();
    const { 
        value,
        label
    } = props;


    return (
        <Box alignItems="center" width="100%" display="flex">
            <Box width="100%" display="flex" flexDirection="column" flex={1.2}>
                <LinearProgress classes={{root:classes.root,bar1Determinate: classes.colorSecondary}} variant="determinate" value={value} />
            </Box>
            <Box display="flex" flex={1} pl={2}>
                <Typography>{label}</Typography>
            </Box>
        </Box>
    );
}
