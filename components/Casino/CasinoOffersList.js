import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardUi from '@/components/Ui/CardUi';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:10
    },
    imgBox:{
        backgroundColor: theme.palette.secondary.darkTeal,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
    }
}));
export default function CasinoOffersList() {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const items = [
        {
            logo:"https://res.cloudinary.com/dpqnsekyx/image/upload/v1645477072/Stake-500x500_dark_v6yt3p.png",
            title:"Aussie Play",
            href:'https://hycasino.io/AussiePlay',
            rating:5,
            offer:"$50 Free + $2,250 Welcome Bonus"
        },
        {
        logo:"https://res.cloudinary.com/dpqnsekyx/image/upload/v1645475640/Stake-500x500_dark_wddobh.png",
        title:"STAKE",
        href:'https://hycasino.io/Stake',
        rating:5,
        offer:"$7 Free + 10% of rakeback"
    },{
        logo:"https://res.cloudinary.com/dpqnsekyx/image/upload/v1645475976/Stake-500x500_dark_cf8hve.png",
        title:"RED DOG",
        href:'https://hycasino.io/RedDog',
        rating:5,
        offer:"$40 Free + $2,450 Welcome Bonus"
    },{
        logo:"https://res.cloudinary.com/dpqnsekyx/image/upload/v1645476732/Stake-500x500_dark_jqeebp.png",
        title:"LAS ATLANTIS",
        href:'https://hycasino.io/LasAtlantis',
        rating:5,
        offer:"$45 Free + $2,800 Welcome Bonus"
    },{
        logo:"https://res.cloudinary.com/dpqnsekyx/image/upload/v1645476951/Stake-500x500_dark_bs6mca.png",
        title:"N1 CASINO",
        href:'https://hycasino.io/N1Casino',
        rating:5,
        offer:"100 Free Spins + $1,000 Welcome Bonus"
    }]
    
    return (
        <CardUi enableBorder disablePadding>
            <Typography pl={2} pr={2} mt={3} textAlign="center" fontWeight={500} component="h6" variant="h6">Exclusive Casino Offers</Typography>
            <Grid p={1.5} container>
                {items.map((item,index)=>{
                    return <Grid key={`casino-offer-exlusive-item-${index}`} item xs={12}>
                        <Link href={item.href} target="_blank" rel="nofollow noreferrer" ><Box p={1} display="flex">
                            <Box mr={2} display="flex">
                                <Box width={70} height={65} display="flex" className={classes.imgBox}>
                                    <Image className={classes.image} width={70} height={70} src={item.logo} />
                                </Box>
                            </Box>
                            <Box display="flex" flexDirection="column">
                                <Typography mb={0.5} fontWeight={450} fontSize={14}>{item.title}</Typography>
                                <Rating value={item.rating} readOnly size="small" />
                                <Typography mt={1} fontWeight={450} fontSize={12}>{item.offer}</Typography>
                            </Box>
                        </Box></Link>
                    </Grid>
                })}
            </Grid>
        </CardUi>
    );
}
