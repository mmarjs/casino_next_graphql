import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Image from 'next/image'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    icon:{
        color: theme.palette.primary.main
    },
    playBtn:{
        position:"absolute",
    },
    contentClass:{
        padding:0
    }
}));


export default function ImageUi(props) {
    
    const classes = useStyles();
    const {
        thumbProps,
        url
    } = props;


    return (
        <Box display="flex" flexDirection="column">
            {!url?
            <Image
                width={thumbProps.width} 
                height={thumbProps.height}  
                src={thumbProps.src}
                className={classes.thumbnail, thumbProps.className && thumbProps.className} 
            />:<Link href={url} as={url} passHref>
                <Box component="a" target="_blank" display="flex">
                    <Image
                        width={thumbProps.width} 
                        height={thumbProps.height}  
                        src={thumbProps.src}
                        className={classes.thumbnail, thumbProps.className && thumbProps.className} 
                    />
                </Box>
            </Link>}
        </Box>
    );
}
