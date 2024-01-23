import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonUi from '@/components/Ui/ButtonUi';
import Image from 'next/image'
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    card:{
        boxShadow:"none",
        borderRadius:10,
        border:"none"
    },
    cardContent:{
        borderRadius:10,
        border:"none"
    },
    title:{
        color: theme.palette.secondary.main,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(16),
    },
    imgClass:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        maxWidth:"100%"
    },
    info:{
        backgroundColor: theme.palette.primary.snow,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
    },
    btn:{
        fontSize: theme.typography.pxToRem(12),
        '&:hover':{
            color: theme.palette.primary.main,
        }
    }
}));


export default function SlotMachineCard(props) {
    const classes = useStyles();
    const {
        title,
        logoProps,
        totalFreeSlots,
        slug
    } = props;

    const cardanimate = {
        visible: {scale: 1.03, opacity: 1},
        hidden: {scale: 1},
    }

    return (
     <motion.div initial="hidden" whileHover="visible">
      <motion.div variants={cardanimate}>
        <Box display="flex" p={1.5}>
            <Box  className={classes.card} display="flex">
                <Box flexDirection="column" className={classes.cardContent} display="flex">

                    <Box flexDirection="column"  width="100%" flex={1} display="flex">
                        {logoProps?
                        <Image 
                            width={logoProps.width} 
                            height={logoProps.height}
                            src={logoProps.url}
                            blurDataURL="/slot-machine/placeholder.jpg"
                            className={classes.imgClass}
                        />:
                        <Image 
                            width={750} 
                            height={379}
                            src={"/slot-machine/placeholder.jpg"}
                            blurDataURL="/slot-machine/placeholder.jpg"
                            className={classes.imgClass}
                        />}
                    </Box>


                    <Box pt={1} className={classes.info} alignItems="center" display="flex">
                        <Box pb={1} pl={1} flex={1}>
                            <Typography textAlign="left" className={classes.title} fontWeight={500} fontSize={16} variant="h4" component="h4">{title}</Typography>
                        </Box>
                        <Box pb={1} pl={1} pr={1}>
                            <ButtonUi 
                                className={classes.btn} 
                                title={`${totalFreeSlots} Slots`} 
                                color="primary" 
                                variant="contained" 
                                size="small" 
                                rounded 
                                component="a"
                                href={`/slots/provider/${slug}`}
                                as={`/slots/provider/${slug}`}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
      </motion.div>
    </motion.div>
    );
}
