import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonUi from '@/components/Ui/ButtonUi';
import Image from 'next/image';
import { IoPlay } from 'react-icons/io5'
import CardUi from '@/components/Ui/CardUi';

const useStyles = makeStyles((theme) => ({
    cardClass:{
        padding:0
    },
    card:{
        boxShadow:"none",
        borderRadius:15,
        border:"none"
    },
    cardContent:{
        borderRadius:15,
        border:"none"
    },
    imgClass:{
        borderRadius:15,
        maxWidth:"100%"
    },
    btn:{
        '&:hover':{
            color: theme.palette.primary.main,
        }
    },
    overlay:{
        maxWidth:"100%",
        width:"100%",
        height:"100%",
        position:"absolute",
        background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 3.12%, rgba(0, 0, 0, 0.481928) 48.44%, rgba(0,0,0,0.4) 78.92%);",
        borderRadius:15,
    },
    title:{
        color: theme.palette.primary.snow,
    },
    playBtn:{
        transition:"transform .2s",
        '&:hover':{
            transform: "scale(1.1)"
        }
    },
    playBtn2:{
        transition:"transform .2s",
        '&:hover':{
            background:theme.palette.primary.main,
            transform: "scale(1.1)"
        }
    },
    iframe:{
        [theme.breakpoints.down('xs')]: {
            height:300
        },
        [theme.breakpoints.down('sm')]: {
            height:300
        },
        [theme.breakpoints.down('md')]: {
            height:300
        },
        [theme.breakpoints.up('md')]: {
            height:500
        },
        [theme.breakpoints.up('lg')]: {
            height:490
        },
        [theme.breakpoints.up('xl')]: {
            height:550
        },
    }
}));


export default function SlotStartPlayCard(props) {
    const classes = useStyles();
    const [play, setPlay] = useState(false);
    const {
        title,
        logoProps,
        providerName,
        playUrl
    } = props;


    return (
        <Box style={{borderRadius:15}} borderRadius={10} display="flex" p={1.5}>
            {!play || play.trim()===""?
            <Box style={{borderRadius:15}} borderRadius={10}  width="100%" className={classes.card} display="flex">
                <Box style={{borderRadius:15}} borderRadius={10} width="100%" flexDirection="column" className={classes.cardContent} display="flex">

                    <Box style={{borderRadius:15}} borderRadius={10} position="relative" flexDirection="column" width="100%" flex={1} display="flex">
                        {logoProps?
                        <Image 
                            width={logoProps.width} 
                            height={logoProps.height}
                            src={logoProps.url}
                            blurDataURL="/games/placeholder.jpg"
                            className={classes.imgClass}
                            layout='responsive'
                        />:
                        <Image 
                            width={750} 
                            height={379}
                            src={"/games/placeholder.jpg"}
                            blurDataURL="/games/placeholder.jpg"
                            className={classes.imgClass}
                        />}
                        <Box zIndex={1} className={classes.overlay} alignItems="center" display="flex">
                            <Box maxWidth="100%" pl={2} pr={2} flex={1}>
                                <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Box display="flex">
                                        <Typography textAlign="center" className={classes.title} variant="h2" component="h2">{title}</Typography>
                                    </Box>
                                    <Box mt={1} display="flex">
                                        <Typography fontWeight={500} textAlign="center" className={classes.title} variant="h3" component="h3">{providerName}</Typography>
                                    </Box>
                                    <Box mt={2} display="flex">
                                        <ButtonUi 
                                            title="Start and play for free"
                                            rounded
                                            startIcon={<IoPlay />}
                                            className={classes.playBtn}
                                            handleClick={()=>setPlay(playUrl)}
                                        />
                                    </Box>
                                    <Box mt={2} display="flex">
                                        <ButtonUi 
                                            title="Play for real on Stake"
                                            color="primary"
                                            variant="contained"
                                            rounded
                                            className={classes.playBtn2}
                                            component="a"
                                            href="https://hycasino.io/Stake"
                                            as="https://hycasino.io/Stake"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            :<Box display="flex" flexDirection="column" width="100%">
                <CardUi cardClass={classes.cardClass} enableBorder disablePadding>
                    <iframe src={playUrl} width="100%" className={classes.iframe} style={{border:"none", borderRadius:15}} />
                </CardUi>
            </Box>}
        </Box>
    );
}
