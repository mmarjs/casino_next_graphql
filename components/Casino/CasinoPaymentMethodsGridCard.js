import React from 'react';
import { makeStyles } from '@mui/styles';
import CardUi from '@/components/Ui/CardUi';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {cardClasses} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:1
    },
    logoBox:{
        borderRadius:7,
        backgroundColor: theme.palette.primary.snow,
        alignItems:"center",
        justifyContent:"center"
    },
    cardClass: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    }
}));
export default function CasinoPaymentMethodsGridCard({items}) {

    const classes = useStyles();
    
    return (
        <CardUi enableBorder disablePadding title="Methods of payments" contentClass={classes.cardClass}>
            <Box flexWrap="wrap" display="flex" p={2} pl={0}>
                {items.map((item,index)=>{
                    return item.logo ? <Box key={`CasinoPaymentMethodsGridCard-exclusive-item-${index}`}  pr={2} pb={1} display="flex">
                        <Box className={classes.logoBox} width={60} height={30} display="flex" component="a">
                            <Image 
                                width={item.logo.width} 
                                height={item.logo.height} 
                                src={item.logo.url} 
                                alt={item.name}
                                className={classes.image}
                            />
                        </Box>
                    </Box> : null
                })}
            </Box>
        </CardUi>
    );
}
