import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FeaturedBlogCard from './FeaturedBlogCard';
import clsx from 'clsx';
import CircularProgressUi from '@/components/Ui/CircularProgressUi';

import Flicking, { FlickingError } from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import { GET_ARTICLES } from '@/graphql/Articles';
import { formatArticlesArray } from '@/formatter/Articles';



const useStyles = makeStyles((theme) => ({
    arrow:{
        width:30,
        height: 30,
        backgroundColor: theme.palette.primary.snow,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        cursor:"pointer"
    },
}));


export default function BlogCarousel(props) {

    const classes = useStyles();
    const theme = useTheme();
    const { 
        items, 
        flexDirection,
    } = props;

    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const flicking = React.useRef(null);
    const [selected, setSelected] = React.useState(0);
    const [articlesList, setArticlesList] = React.useState([]);
    

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


    //GET_ARTICLES GRAPHQL 
    const { loading, error, data } = useQuery(GET_ARTICLES,{
        fetchPolicy: 'no-cache',
        variables:{ pagination:{
            page:1,
            pageSize:9
        }}
    });

    if(!loading && !error){
        //console.log("data",data)
        if(articlesList.length===0){
            let articles = formatArticlesArray(data.articles.data);
            setArticlesList(articles) 
        }
    }




    return (
        !loading
            ? articlesList.length > 0 ?
                <Grid item xs={12} md={12}>
                    <Grid position="relative" container flexDirection={flexDirection?flexDirection:"column"}>
                        <Flicking 
                            useFindDOMNode={true}
                            align="prev"
                            circular={true}
                            panelsPerView={isMobile?1:isTablet?2:3}
                            noPanelStyleOverride={false}
                            resizeOnContentsReady={true}
                            bound={true}
                            ref={flicking}
                            onMoveEnd={e => {
                                setSelected(e.index)
                            }}
                            adaptive
                        >
                            {articlesList && articlesList.map((item,index)=>{
                                return(
                                    <Grid key={`blog-main-carousel-item-${index}`} item xs={12} sm={6} md={4}>
                                        <FeaturedBlogCard
                                            banner={item.featured_image}
                                            title={item.title}
                                            summary={item.summary}
                                            slug={item.slug}
                                            categories={item.categories}
                                        />
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
            : <Grid item xs={12}>
                <Typography>No articles found</Typography>
            </Grid>
        :<Grid item xs={12}>
            <CircularProgressUi label="Loading..." />
        </Grid>
    );
}
