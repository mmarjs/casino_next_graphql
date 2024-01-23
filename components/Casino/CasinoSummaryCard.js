import React from 'react';
import CardUi from '@/components/Ui/CardUi';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { FaStar } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    success:{
        color: theme.palette.success.main
    },
    error:{
        color: theme.palette.error.main
    },
}));

export default function CasinoSummaryCard({title, rating, minDeposit, owner, licenses, creationDate}) {

    const classes = useStyles();


    return (
        <CardUi enableBorder disablePadding>
            <Typography pl={1} pr={1} mt={3} textAlign="center" fontWeight={500} component="h5" variant="h5">{title}</Typography>
            <Grid p={1.5} container>
                <Grid item xs={12}>
                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Casino rating</Typography>
                        </Box>
                        <Box display="flex" justifyContent="flex-end">
                            <Rating 
                                name="read-only" 
                                value={rating} 
                                readOnly 
                                emptyIcon={<FaStar fontSize={15} />}
                                icon={<FaStar fontSize={15} />}
                                size="small"
                                IconContainerComponent={(props)=><Box pl={0.5} {...props} />}
                            />
                        </Box>
                    </Box>
                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Date of Creation</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography textAlign="right" fontSize={14} fontWeight={405} color="text.main">{creationDate}</Typography>
                        </Box>
                    </Box>
                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Minimum Deposit</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography textAlign="right" fontSize={14} fontWeight={405} color="text.main">{minDeposit}</Typography>
                        </Box>
                    </Box>
                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Licenses</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography textAlign="right" fontSize={14} fontWeight={405} color="text.main">{licenses}</Typography>
                        </Box>
                    </Box>
                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Owner</Typography>
                        </Box>
                        <Box display="flex">
                            <Typography textAlign="right" fontSize={14} fontWeight={405} color="text.main">{owner}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </CardUi>
    );
}
