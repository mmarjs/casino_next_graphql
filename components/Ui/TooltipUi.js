import React from 'react';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';

const useStyles = makeStyles((theme) => ({
   
    arrow: {
        color: theme.palette.primary.meteor
    },
    tooltip: {
        backgroundColor: theme.palette.primary.meteor,
        fontSize:12,
        fontWeight:600
    }
}));

export default function TooltipUi(props) {
    const classes = useStyles();
    const {placement, title, children} = props;  
  
    return (
        <Tooltip arrow title={title} placement={placement} classes={{arrow:classes.arrow,tooltip:classes.tooltip}}>
            {children}
        </Tooltip>
    );
}
