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

export default function ReviewRatingsCard({title, rating}) {

    const classes = useStyles();


    return (
        <CardUi enableBorder disablePadding>
            <Typography mt={3} textAlign="center" fontWeight={500} component="h5" variant="h5">{title}</Typography>
            <Grid p={1.5} container>
                <Grid item xs={12}>
                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Support</Typography>
                        </Box>
                        <Box display="flex">
                            <Rating 
                                name="read-only" 
                                value={rating.support} 
                                readOnly 
                                emptyIcon={<FaStar fontSize={15} />}
                                icon={<FaStar fontSize={15} />}
                                size="small"
                                IconContainerComponent={(props)=><Box width={18} {...props} />}
                            />
                        </Box>
                    </Box>

                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Bonus</Typography>
                        </Box>
                        <Box display="flex">
                            <Rating 
                                name="read-only" 
                                value={rating.bonus} 
                                readOnly 
                                emptyIcon={<FaStar fontSize={15} />}
                                icon={<FaStar fontSize={15} />}
                                size="small"
                                IconContainerComponent={(props)=><Box width={18} {...props} />}
                            />
                        </Box>
                    </Box>

                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Website</Typography>
                        </Box>
                        <Box display="flex">
                            <Rating 
                                name="read-only" 
                                value={rating.website} 
                                readOnly 
                                emptyIcon={<FaStar fontSize={15} />}
                                icon={<FaStar fontSize={15} />}
                                size="small"
                                IconContainerComponent={(props)=><Box width={18} {...props} />}
                            />
                        </Box>
                    </Box>

                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Methods of Payment</Typography>
                        </Box>
                        <Box display="flex">
                            <Rating 
                                name="read-only" 
                                value={rating.methods_of_payments} 
                                readOnly 
                                emptyIcon={<FaStar fontSize={15} />}
                                icon={<FaStar fontSize={15} />}
                                size="small"
                                IconContainerComponent={(props)=><Box width={18} {...props} />}
                            />
                        </Box>
                    </Box>

                    <Box p={1} display="flex" alignItems="center">
                        <Box flex={1} pr={2} display="flex">
                            <Typography fontSize={14} fontWeight={405} color="text.mute">Game Providers</Typography>
                        </Box>
                        <Box display="flex">
                            <Rating 
                                name="read-only" 
                                value={rating.game_provider} 
                                readOnly 
                                emptyIcon={<FaStar fontSize={15} />}
                                icon={<FaStar fontSize={15} />}
                                size="small"
                                IconContainerComponent={(props)=><Box width={18} {...props} />}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </CardUi>
    );
}
