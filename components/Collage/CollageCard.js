import React from 'react';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import CollageImage from '@/public/collage/hycasino-collage.jpeg';
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    content: {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 15
    },
    logoBox: {
        backgroundColor: theme.palette.primary.snow,
        borderRadius: 15,
        marginTop: theme.spacing(-6)
    },
    ratingIcon: {
        width: 30
    },
    ratingEmpty: {
        color: theme.palette.secondary.main,
    },
    spinAndBonusBar: {
        borderRadius: 15,
    },
    sab: {
        padding: theme.spacing(2)
    },
    sabSpin: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.snow,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    sabBonus: {
        backgroundColor: theme.palette.secondary.teal,
        color: theme.palette.primary.snow,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    card: {
        boxShadow: "none",
        borderRadius: 15,
        border: "none"
    },
    cardContent: {
        borderRadius: 15,
        border: "none"
    },
    imgClass: {
        borderRadius: 15,
        maxWidth: "100%"
    },
    btn: {
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    overlay: {
        maxWidth: "100%",
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 3.12%, rgba(0, 0, 0, 0.081928) 48.44%, rgba(0,0,0,0.4) 78.92%);",
        borderRadius: 15,
        '&:hover': {
            background: "none",
        }
    },
    title: {
        color: theme.palette.primary.snow,
    },
    link: {
        textDecoration: "none",
    },
    chipLink: {
        fontSize: theme.typography.pxToRem(10)
    }
}));


export default function CollageCard(props) {
    const classes = useStyles();
    const {
        contentClass,
        slug,
        cardClass,
        url,
        width,
        height,
        title
    } = props;


    const cardanimate = {
        visible: {scale: 1.02, opacity: 1},
        hidden: {scale: 1},
    }

    const textanimate = {
        visible: {scale: 1.05, opacity: 1, x: 5},
        hidden: {scale: 1, opacity: 1},
    }


    return (
        <motion.div initial="hidden" whileHover="visible">
            <motion.div variants={cardanimate}>

                <Box style={{borderRadius: 15}} borderRadius={10} display="flex" p={1.5}>
                    <Box style={{borderRadius: 15}} borderRadius={10} width="100%" className={classes.card}
                         display="flex">

                        <Box maxHeight={600} position="relative" overflow="hidden" style={{borderRadius: 15}}
                             borderRadius={10} width="100%" flexDirection="column" className={classes.cardContent}
                             display="flex">

                            <Box style={{borderRadius: 15}} borderRadius={10} position="relative" flexDirection="column"
                                 width="100%" flex={1} display="flex">
                                {url ?
                                    <Image
                                        width={width}
                                        height={height}
                                        src={url}
                                        blurDataURL={CollageImage}
                                        className={classes.imgClass}
                                        layout='responsive'
                                    /> :
                                    <Image
                                        width={width}
                                        height={height}
                                        src={CollageImage}
                                        blurDataURL={CollageImage}
                                        className={classes.imgClass}
                                        layout='responsive'
                                    />}
                            </Box>


                            <Box borderRadius={10} className={classes.overlay} flexDirection="column" display="flex">

                                {/*{categories && categories.length > 0 &&
                        <Box flexWrap="wrap" pt={2} pl={2} pr={2} display="flex">
                            {categories.map((category,index)=>{
                                return <Box cursor="pointer" className={classes.link} component="a" href={`/blog?category=${category.slug}`} mb={1} mr={1} key={`article-category-item-${index}`} display="flex" flexDirection="column">
                                    <Chip clickable size="small" className={classes.chipLink} color="primary" label={category.name} />
                                </Box>
                            })}
                        </Box>}*/}

                                <Box component="a" href={`/blog/${slug}`} className={classes.link} pb={2} pl={2} pr={2}
                                     flex={1} display="flex" alignItems="flex-end">
                                    <motion.div variants={textanimate} style={{
                                        color: 'white',
                                    }}>
                                        <Typography display="flex" textAlign="left" fontWeight={550}
                                                    className={classes.title} variant="h4"
                                                    component="h5">{title}</Typography>
                                    </motion.div>

                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </motion.div>
        </motion.div>

        /*<Box
            className={clsx(classes.card, cardClass && cardClass)}
            display="flex"
            flexDirection="column"
            maxWidth="100%"
        >
            <a href={`/blog/${slug}`}>
            <Box
                display="flex"
            >
                <p>{title}</p>
                <Image src={url} className={clsx(classes.content, contentClass && contentClass)}  width={width} height={height} />

            </Box>
            </a>
        </Box>*/
    );
}
