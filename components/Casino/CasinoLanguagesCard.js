import React from 'react';
import { makeStyles } from '@mui/styles';
import CardUi from '@/components/Ui/CardUi';
import Box from '@mui/material/Box';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:7
    },
    cardClass: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    }
}));
export default function CasinoLanguagesCard({items}) {

    const classes = useStyles();

    
    return (
        <CardUi enableBorder disablePadding title="Languages" contentClass={classes.cardClass}>
            <Box flexWrap="wrap" display="flex" p={2} pl={0}>
                {items.map((item,index)=>{
                    return item.logo ? <Box key={`languages-exclusive-item-${index}`} pr={2} pb={1} display="flex">
                        <Box target="_blank" display="flex" component="a">
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
