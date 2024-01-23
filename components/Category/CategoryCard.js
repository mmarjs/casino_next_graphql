import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
    card:{
        boxShadow:"none",
        borderRadius:25,
        border:"none"
    },
    cardContent:{
        borderRadius:25,
        border:"none"
    },
    imgClass:{
        borderRadius:25,
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
        background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 3.12%, rgba(0, 0, 0, 0.481928) 48.44%, rgba(0,0,0,0.4) 98.92%);",
        borderRadius:25,
        '&:hover':{
            background:"none",
        }
    },
    title:{
        color: theme.palette.primary.snow,
    },
    link:{
        textDecoration:"none",
    }
}));


export default function CategoryCard(props) {
    const classes = useStyles();
    const {
        title,
        slug,
        banner,
    } = props;

    const cardanimate = {
        visible: {scale: 1.04, opacity: 1},
        hidden: {scale: 1},
    }

    

    return (
   <motion.div initial="hidden" whileHover="visible">
      <motion.div variants={cardanimate}> 
        <Box style={{borderRadius:15}} borderRadius={10} display="flex" p={1.5}>
            <Box style={{borderRadius:15}} borderRadius={10}  width="100%" className={classes.card} display="flex">
                <a href={`/blog?category=${slug}`} className={classes.link}>
                    <Box style={{borderRadius:15}} borderRadius={10} width="100%" flexDirection="column" className={classes.cardContent} display="flex">
                
                        <Box style={{borderRadius:15}} borderRadius={10} position="relative" width="100%" flex={1} display="flex">
                            {banner?
                            <Image 
                                width={280}
                                height={370}
                                src={banner.url}
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
                            <Box borderRadius={10} className={classes.overlay} alignItems="flex-end" display="flex">
                                <Box pb={2} pl={2} pr={2} flex={1}>
                                    <Typography textAlign="left" className={classes.title} variant="h3" component="h3">{title}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </a>
            </Box>
        </Box>
      </motion.div>
   </motion.div>
    );
}
