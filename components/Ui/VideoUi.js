import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Image from 'next/image'
import {IoPlay} from 'react-icons/io5'
import { IconButton } from '@mui/material';
import clsx from 'clsx';
import ModalUi from './ModalUi';

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


export default function VideoUi(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const {
        thumbProps,
        iconSize,
        iconClass,
        videoProps
    } = props;


    return (
        <Box display="flex" flexDirection="column">
            <Box alignItems="center" justifyContent="center" position="relative" display="flex" flexDirection="column">
                <Image
                    width={thumbProps.width} 
                    height={thumbProps.height}  
                    src={thumbProps.src} 
                />
                <IconButton onClick={()=>setOpen(true)} className={classes.playBtn}>
                    <IoPlay 
                        size={iconSize?iconSize:20} 
                        className={clsx(classes.icon, iconClass && iconClass)} 
                    />
                </IconButton>
            </Box>
            <ModalUi 
                open={open}
                maxWidth="sm"
                titleVariant="h3"
                handleClose={()=>setOpen(false)}
                contentClass={classes.contentClass}
            >
                {open &&
                <Box display="flex">
                    <iframe width={videoProps.width?videoProps.width:"560"} height={videoProps.height?videoProps.height:"315"} src={videoProps.src} title={videoProps.title?videoProps.titlt:null} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </Box>}
            </ModalUi>
        </Box>
    );
}
