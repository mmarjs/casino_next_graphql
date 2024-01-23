import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonUi from '@/components/Ui/ButtonUi';
import Image from 'next/image'
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: "none",
        borderRadius: 10
    },
    cardContent: {
        borderRadius: 10
    },
    title: {},
    imgClass: {
        borderRadius: 10,
        maxWidth: "100%",
        lineHeight: '20px'
    },
    chip: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.snow,
    },
    machineText: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: '90px'
    }
}));


export default function SlotMachineCard(props) {
    const classes = useStyles();
    const {
        title,
        provider,
        logoProps,
        slug
    } = props;

    const image = {
        visible: { y: 20 },
        hidden: { y: 0 },
    }

    const cardanimate = {
        visible: { scale: 1.05, opacity: 1, backgroundColor: "#C3083F" },
        hidden: { scale: 1 },
    }

    const imageanimate = {
        visible: { scale: 1, opacity: 0.4 },
        hidden: { scale: 1 },
    }

    const textanimate = {
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0.8, opacity: 0 },
    }

    console.log('logoProps', logoProps)

    return (
        <motion.div initial="hidden" whileHover="visible">
            <Box display="flex" p={1.5}>
                <Box width="100%" className={classes.card} display="flex">

                    <Box width="100%" flexDirection="column" className={classes.cardContent} display="flex">

                        <a href={`/slots/provider/${provider.slug}/${slug}`} className={classes.link}>
                            <Box mb={1} flexDirection="column" width="100%" height="100%" flex={1} display="flex">
                                <motion.div variants={cardanimate} className={classes.imgClass}>
                                    <motion.div variants={textanimate} style={{
                                        position: 'absolute',
                                        color: 'white',
                                        left: 10,
                                        right: 10,
                                        top: 10,
                                        zIndex: 100,
                                    }} ><Typography className={classes.title} lineHeight={1.5} style={{ textAlign: 'center' }} fontWeight={500} fontSize={16} variant="h3" component="h3">{title}</Typography>
                                        {provider && <Typography className={classes.machineText} style={{ position: 'absolute', textAlign: 'center', top: 164, left: 10, right: 10 }}>{provider.name}</Typography>}
                                        <div style={{ position: 'absolute', top: 80, left: 52 }}>
                                            <svg width="60" height="60" viewBox="0 0 71 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.499999 5.31089C0.499999 1.46189 4.66666 -0.943739 8 0.980761L68 35.6218C71.3333 37.5463 71.3333 42.3575 68 44.282L8 78.923C4.66667 80.8475 0.5 78.4419 0.5 74.5929L0.499999 5.31089Z" fill="white" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={imageanimate}>
                                        {logoProps ?
                                            <Image
                                                width={logoProps.width}
                                                height={logoProps.height}
                                                src={logoProps.url}
                                                draggable={false}
                                                blurDataURL="/slot-machine/placeholder.jpg"
                                                className={classes.imgClass}
                                                layout="responsive"
                                            /> :
                                            <Image
                                                width={750}
                                                height={379}
                                                draggable={false}
                                                src={"/slot-machine/placeholder.jpg"}
                                                blurDataURL="/slot-machine/placeholder.jpg"
                                                className={classes.imgClass}
                                            />}
                                    </motion.div>
                                </motion.div>
                            </Box>
                        </a>
                    </Box>
                </Box>
            </Box >
        </motion.div >
    );
}

