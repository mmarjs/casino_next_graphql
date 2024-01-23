import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import TitleUi from '@/components/Ui/TitleUi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    
    content:{
        backgroundColor: theme.palette.secondary.darkTeal,
        padding: theme.spacing(3)
    }
}));
export default function CategoryHeader({title}) {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    
    return (
        <Grid className={classes.content} item xs={12}>
            <TitleUi 
                title={title}
                titleProps={{component:"h3", variant:"h3",textAlign:"left"}}
                alignItems="flex-start"
            />
        </Grid>
    );
}
