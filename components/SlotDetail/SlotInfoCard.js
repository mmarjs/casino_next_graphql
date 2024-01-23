import React from 'react';
import CardUi from '@/components/Ui/CardUi';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function SlotInfoCard({title, items}) {

    return (
        <CardUi enableBorder disablePadding>
            <Typography mt={3} textAlign="center" fontWeight={500} component="h5" variant="h5">{title}</Typography>
            <Grid p={1.5} container>
                {items.map((item,index)=>{
                    return <Grid key={`game-detail-info-item-${index}`} item xs={12}>
                        <Box p={1} display="flex" alignItems="center">
                            <Box flex={1} pr={2} display="flex">
                                <Typography fontSize={14} fontWeight={405} color="text.mute">{item.label}</Typography>
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="flex-end">
                                <Typography fontSize={14} fontWeight={405} textAlign="right">{item.value}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                })}
            </Grid>
        </CardUi>
    );
}
