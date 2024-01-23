import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import TitleUi from '@/components/Ui/TitleUi';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    
    content:{
        backgroundColor: "#49787B",
        padding: theme.spacing(5),
        margin: theme.spacing(1),
        borderRadius: 15,
        alignItems:"center",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    }
}));
export default function BlogArticleCategoryHeader({title, headerImage}) {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    
    return (
        <Grid  
            flexWrap="wrap" 
            className={classes.content} 
            item 
            xs={12}
            style={{background:`url(${headerImage?headerImage.url:null})`, backgroundSize:"cover"}}
        >
            <TitleUi 
                title={title}
                titleProps={{component:"h1", variant:isMobile?"h3":"h1",textAlign:"left", fontSize:32, fontWeight:600}}
                alignItems="flex-start"
            />
        </Grid>
    );
}
