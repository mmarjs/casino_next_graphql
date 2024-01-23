import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useWindowDimensions from '@/src/useWindowDimensions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CategoryCard from './CategoryCard';
import clsx from 'clsx';
import CircularProgressUi from '@/components/Ui/CircularProgressUi';
import Typography from '@mui/material/Typography';

import Flicking, { FlickingError } from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '@/graphql/Categories';
import { formatCategoriesArray } from '@/formatter/Categories';


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
        height: 50,
        backgroundColor: theme.palette.primary.snow,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        cursor:"pointer"
    },
    arrowBar:{
        pointerEvents:"none"
    }
}));


export default function SlotMachinesCarousel(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const { 
        flexDirection
    } = props;

    const { height, width } = useWindowDimensions();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const flicking = React.useRef(null);
    const [selected, setSelected] = React.useState(0);
    const [items, setItems] = React.useState([]);

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


    //GET_CATEGORIES GRAPHQL 
    const { loading, error, data } = useQuery(GET_CATEGORIES,{
        fetchPolicy: 'no-cache',
        variables:{ pagination:{
            page:1,
            pageSize:50
        }}
    });

    if(!loading && !error){
        //console.log("data",data)
        if(items.length===0){
            let itemsList = formatCategoriesArray(data.categories.data);
            setItems(itemsList) 
        }
    }


    return (
        !loading
            ? items.length > 0 ?
        <Grid item xs={12} md={12}>
            <Grid position="relative" container flexDirection={flexDirection?flexDirection:"column"}>
               
                        <Flicking 
                            useFindDOMNode={true}
                            align="prev"
                            circular={true}
                            panelsPerView={isMobile?2:isTablet?2:4}
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
                                return(
                                    <Grid key={`category-carousel-item-${index}`} item xs={6} sm={6} md={3}>
                                        <CategoryCard
                                            title={item.name}
                                            banner={item.banner}
                                            disablePadding={isMobile}
                                            slug={item.slug}
                                        />
                                    </Grid>
                                )
                            })}
      
                        </Flicking>
                        
                        <Box top="45%" width="100%" zIndex={999} display="flex" position="absolute" justifyContent="space-between">
                            <Box onClick={handlePrevClick} className={clsx(classes.arrow, classes.arrowPrev)} display="flex">
                                <IoArrowBackOutline size={19} color='#333333' />
                            </Box>
                            <Box onClick={handleNextClick} className={clsx(classes.arrow, classes.arrowNext)} display="flex">
                                <IoArrowForwardOutline size={19} color='#333333' />
                            </Box>
                        </Box>
            </Grid>
        </Grid>
            : <Grid item xs={12}>
                <Typography>No categories found</Typography>
            </Grid>
        :<Grid item xs={12}>
            <CircularProgressUi label="Loading..." />
        </Grid>

    );
}
