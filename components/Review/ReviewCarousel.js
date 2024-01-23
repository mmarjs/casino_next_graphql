import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image'
import clsx from 'clsx';
import Flicking, { FlickingError } from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';



const useStyles = makeStyles((theme) => ({
    section:{
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1,5),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
        },
        paddingTop:0,
        paddingBottom: theme.spacing(6),
    },
    arrow:{
        width:30,
        height: 30,
        backgroundColor: theme.palette.primary.snow,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        cursor:"pointer"
    },
    imgClass:{
        borderRadius:15
    }
}));


export default function BlogCarousel(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const { 
        items, 
        flexDirection
    } = props;

    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const flicking = React.useRef(null);
    const [selected, setSelected] = React.useState(0);
    

    const handlePrevClick = React.useCallback(
        e => {
          if (flicking.current) {
            flicking.current.prev().catch(err => {
                if (err instanceof FlickingError) return;
                throw err;
              });;
          }
        },
        [flicking.current]
    );
    
    const handleNextClick = React.useCallback(
        e => {
            if (flicking.current) {
            flicking.current.next().catch(err => {
                if (err instanceof FlickingError) return;
                throw err;
                });;
            }
        },
        [flicking.current]
    );




    return (

        <Grid item xs={12} md={12}>
            <Grid position="relative" container flexDirection={flexDirection?flexDirection:"column"}>
                <Flicking 
                    useFindDOMNode={true}
                    align="prev"
                    circular={true}
                    panelsPerView={1}
                    noPanelStyleOverride={false}
                    resizeOnContentsReady={true}
                    bound={true}
                    ref={flicking}
                    onMoveEnd={e => {
                        setSelected(e.index)
                    }}
                    adaptive
                >
                    {items && items.map((item,index)=>{
                        console.log("item here", item)
                        return(
                            <Grid key={`blog-main-carousel-item-${index}`} item xs={12}>
                                <Box display="flex" p={1.5}>
                                    <Box width="100%" flexDirection="column" className={classes.cardContent} display="flex">
                                        <Box borderRadius={15} mb={1} flexDirection="column" width="100%" height="100%" flex={1} display="flex">
                                            <Image 
                                                width={item.width} 
                                                height={item.height}
                                                src={item.url}
                                                blurDataURL="/slot-machine/placeholder.jpg"
                                                className={classes.imgClass}
                                                layout='responsive' 
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}

                </Flicking>
                
                <Box top="45%" width="100%" zIndex={999} display="flex" position="absolute" justifyContent="space-between">
                    <Box onClick={handlePrevClick} className={clsx(classes.arrow, classes.arrowPrev)} display="flex">
                        <IoArrowBackOutline size={16} color='#333333' />
                    </Box>
                    <Box onClick={handleNextClick} className={clsx(classes.arrow, classes.arrowNext)} display="flex">
                        <IoArrowForwardOutline size={16} color='#333333' />
                    </Box>
                </Box>
            </Grid>
        </Grid>
        
    );
}
