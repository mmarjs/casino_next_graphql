import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { Chip } from '@mui/material';
import {motion} from "framer-motion";

const useStyles = makeStyles((theme) => ({
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
        '&:hover':{
            background:"none",
        }
    },
    title:{
        color: theme.palette.primary.snow,
    },
    link:{
        textDecoration:"none",
    },
    chipLink:{
        fontSize: theme.typography.pxToRem(10) 
    }
}));


export default function FeaturedBlogCard(props) {
    const classes = useStyles();
    const {
        title,
        slug,
        banner,
        categories
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
               
                <Box maxHeight={300} position="relative" overflow="hidden" style={{borderRadius:15}} borderRadius={10} width="100%" flexDirection="column" className={classes.cardContent} display="flex">
                    
                    <Box style={{borderRadius:15}} borderRadius={10} position="relative" flexDirection="column" width="100%" flex={1} display="flex">
                        {banner?
                        <Image 
                            width={banner.width} 
                            height={banner.height}
                            src={banner.url}
                            blurDataURL="/slot-machine/placeholder.jpg"
                            className={classes.imgClass}
                            layout='responsive'
                        />:
                        <Image 
                            width={750} 
                            height={379}
                            src={"/slot-machine/placeholder.jpg"}
                            blurDataURL="/slot-machine/placeholder.jpg"
                            className={classes.imgClass}
                            layout='responsive'
                        />}
                    </Box>
                    
                    
                    <Box borderRadius={10} className={classes.overlay} flexDirection="column" display="flex">
                        
                        {categories && categories.length > 0 &&
                        <Box flexWrap="wrap" pt={2} pl={2} pr={2} display="flex">
                            {categories.map((category,index)=>{
                                return <Box cursor="pointer" className={classes.link} component="a" href={`/blog?category=${category.slug}`} mb={1} mr={1} key={`article-category-item-${index}`} display="flex" flexDirection="column">
                                    <Chip clickable size="small" className={classes.chipLink} color="primary" label={category.name} />
                                </Box>
                            })}
                        </Box>}
                        <Box component="a" href={`/blog/${slug}`} className={classes.link} pb={2} pl={2} pr={2} flex={1} display="flex" alignItems="flex-end">
                            <Typography display="flex" textAlign="left" fontWeight={600} className={classes.title} variant="h5" component="h5">{title}</Typography>
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
        </motion.div>
   </motion.div>
    );
}
