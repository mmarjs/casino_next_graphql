import React from 'react';
import { makeStyles } from '@mui/styles';
import CardUi from '@/components/Ui/CardUi';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'
import HtmlContentBodyUi from "@/components/Ui/HtmlContentBodyUi";

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:10
    },
    imgBox:{
        backgroundColor: theme.palette.secondary.darkTeal,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
    },
    success:{
        color: theme.palette.success.main
    },
    error:{
        color: theme.palette.error.main
    },
    cardContentClass:{
        background:"url(/flower-bg.png) right top no-repeat",
        backgroundSize: "70%",
    }
}));
export default function ReviewDetailsCard({entityName, pros, cons, summary}) {

    const classes = useStyles();
    const isStringContent = typeof summary === 'string';
    return (
        <CardUi enableBorder disablePadding contentClass={classes.cardContentClass}>
            <Box p={3} display="flex" flexDirection="column">
                <Typography fontWeight={500} component="h3" variant="h3">{entityName} Review</Typography>
                {/*<Typography mt={1.5} component="p" variant="p">{summary}</Typography>*/}
                <HtmlContentBodyUi contentBody={summary} />
                <Typography mt={3} fontWeight={500} component="h4" variant="h4">The pluses and minuses of {entityName}</Typography>
            </Box>

            <Grid mt={2} mb={3} container>
                <Grid pl={3} pr={3} item xs={12} sm={6}>
                    <Grid container>
                        {pros.map((item,index)=>{
                            return <Grid key={`game-detail-info-item-${index}`} item xs={12}>
                                <Box flexWrap="wrap" mb={1} display="flex" alignItems="center">
                                    <Box flex={1} display="flex" alignItems="flex-start">
                                        <IoCheckmarkCircle size={24} className={classes.success} />
                                        <Typography pl={1} lineHeight={1.7} fontSize={14}>{item.text}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                <Grid pl={3} pr={3} item xs={12} sm={6}>
                    <Grid container>
                        {cons.map((item,index)=>{
                            return <Grid key={`game-detail-info-item-${index}`} item xs={12}>
                                <Box flexWrap="wrap" mb={1} display="flex" alignItems="center">
                                    <Box flex={1} display="flex">
                                        <IoCloseCircle size={24} className={classes.error} />
                                        <Typography pl={1} lineHeight={1.7} fontSize={14}>{item.text}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        })}
                    </Grid>
                </Grid>

            </Grid>
        </CardUi>
    );
}
