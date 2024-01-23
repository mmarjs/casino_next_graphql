import React from 'react';
import { makeStyles } from '@mui/styles';
import CardUi from '@/components/Ui/CardUi';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IoCheckmarkCircle, IoCloseCircle, IoLogoBitcoin } from 'react-icons/io5'

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:10
    },
    cardContentClass:{
        background:"#FFD723",
    },
    title:{
        color: theme.palette.secondary.main
    },
    bitcoin:{
        borderRadius:30,
        border:`2px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        alignItems:"center",
        justifyContent:"center"
    }
}));
export default function ReviewCryptoAcceptedCard() {

    const classes = useStyles();

    return (
        <CardUi enableBorder disablePadding contentClass={classes.cardContentClass}>
            <Box p={1.5} display="flex" alignItems="center">
                <Box width={30} height={30} mr={1.5} display="flex" className={classes.bitcoin}>
                    <IoLogoBitcoin size={24} />
                </Box>
                <Box flex={1} display="flex">
                    <Typography fontSize={14} fontWeight={550} lineHeight={1.6} className={classes.title} component="h5" variant="h5">Crypto Currency Accepted</Typography>
                </Box>
            </Box>
        </CardUi>
    );
}
