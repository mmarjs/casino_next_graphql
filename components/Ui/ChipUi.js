import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    
}));

export default function DividerUi(props) {
    const { 
        className,  
    } = props;
    return (
        <Chip {...props} classes={{root:clsx(className && className)}} />
    );
}
