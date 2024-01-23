import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardUi from '@/components/Ui/CardUi';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_PROVIDERS } from '@/graphql/Providers';
import { formatProvidersArray } from '@/formatter/Providers';

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:10
    },
    sticky:{
        position: 'fixed',
    }
}));
export default function PartnerList() {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [items, setItems] = React.useState([]);


    //GET_PROVIDERS GRAPHQL 
    const { loading, error, data } = useQuery(GET_PROVIDERS,{
        fetchPolicy: 'no-cache',
    });

    if(!loading && !error){
        //console.log("data",data)
        if(items.length===0){
            let partners = formatProvidersArray(data.providers.data);
            //console.log("providers",data.providers.data)
            setItems(partners)
        }
    }
    
    return (
        <CardUi enableBorder disablePadding >
            <Typography pl={2} pr={2} mt={3} textAlign="center" fontWeight={500} component="h6" variant="h6">Play Free Slot Machine</Typography>
            <Grid p={1.5} container>
                {items.map((item,index)=>{
                    return <Grid key={`partner-exclusive-item-${item.id}`} item xs={6}>
                        <Box p={1} display="flex">
                            <Link href={item.web_url?item.web_url:"/"} as={item.web_url?item.web_url:"/"} passHref>
                                <Box display="flex" component="a">
                                    <Image
                                        className={classes.image}
                                        width={800}
                                        height={510}
                                        src={item.logo && item.logo.url ? item.logo.url : "/providers/placeholder.png"} />
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                })}
            </Grid>
        </CardUi>
    );
}
