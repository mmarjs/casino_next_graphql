import React from 'react';
import CardUi from '@/components/Ui/CardUi';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { GET_PAYMENT_METHODS } from '@/graphql/PaymentMethods';
import { formatPaymentMethodsArray } from '@/formatter/PaymentMethods';
import { getObjectFromArrayByKeyValue} from '@/src/helpers';
import Image from 'next/image'
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';



const useStyles = makeStyles((theme) => ({
    success:{
        color: theme.palette.success.main
    },
    error:{
        color: theme.palette.error.main
    },
}));

export default function CasinoPaymentMethodsCard({title, availablePaymentMethods}) {

    const classes = useStyles();
    const [items, setItems] = React.useState([]);


    //GET_PROVIDERS GRAPHQL 
    const { loading, error, data } = useQuery(GET_PAYMENT_METHODS,{
        fetchPolicy: 'no-cache',
    });

    if(!loading && !error){
        //console.log("data",data)
        if(items.length===0){
            let paymentMethods = formatPaymentMethodsArray(data.paymentMethods.data);
            //console.log("providers",data.providers.data)
            console.log("paymentMethods data",paymentMethods)
            setItems(paymentMethods) 
        }
    }

    return (
        <CardUi enableBorder disablePadding>
            <Typography mt={3} textAlign="center" fontWeight={500} component="h5" variant="h5">{title}</Typography>
            <Grid p={1.5} container>
                {items.map((item,index)=>{
                    return <Grid key={`review-CasinoPaymentMethodsCard-item-${index}`} item xs={12}>
                        <Box p={1} display="flex" alignItems="center">
                            {item.logo &&
                            <Box display="flex" mr={2.5}>

                            </Box>}
                            <Box flex={1} pr={2} display="flex">
                                <Typography fontSize={14} fontWeight={400} color="text.mute">{item.name}</Typography>
                                
                            </Box>
                            <Box display="flex" mr={2.5}>
                                {getObjectFromArrayByKeyValue(availablePaymentMethods,"name",item.name) ? <IoCheckmarkCircle  fontSize={18} className={classes.success} /> : <IoCloseCircle className={classes.error} />}
                            </Box>
                        </Box>
                    </Grid>
                })}
            </Grid>
        </CardUi>
    );
}
