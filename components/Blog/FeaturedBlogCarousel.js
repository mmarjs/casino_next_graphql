import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import useWindowDimensions from '@/src/useWindowDimensions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FeaturedBlogCard from './FeaturedBlogCard';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '@/graphql/Articles';
import { formatArticlesArray } from '@/formatter/Articles';
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
}));


export default function CategoryCarousel(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const { 
        items, 
        flexDirection, 
        sectionClass
    } = props;

    const { height, width } = useWindowDimensions();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

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

    const [articlesList, setArticlesList] = React.useState([]);

    //GET_ARTICLES GRAPHQL 
    const { loading, error, data } = useQuery(GET_ARTICLES,{
        fetchPolicy: 'no-cache',
        variables:{ 
            pagination:{
                page:1,
                pageSize:2
            },
            filters:{
                featured:{
                    eq: true
                }
            }
        }
    });

    if(!loading && !error){
        //console.log("data",data)
        if(articlesList.length===0){
            let articles = formatArticlesArray(data.articles.data);
            console.log("articlesarticles",articles)
            setArticlesList(articles) 
        }
    }


    return (

        <Grid item xs={12} md={12}>
            
            <Grid container flexDirection={flexDirection?flexDirection:"column"}>
                <Grid position="relative" item xs={12}>

                    <Flicking 
                        useFindDOMNode={true}
                        align="prev"
                        circular={articlesList.length > 2}
                        panelsPerView={isMobile?1:isTablet?2:2}
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
                                <Grid key={`blog-main-carousel-item-${index}`} item xs={12} sm={6} md={6}>
                                    <FeaturedBlogCard
                                        title={item.title}
                                        banner={item.featured_image}
                                        disablePadding={isMobile}
                                        key={`slot-machine-carousel-item-${index}`}
                                        slug={item.slug}
                                    />
                                </Grid>
                            )
                        })}

                    </Flicking>
                        
                    {articlesList.length > 2 &&
                    <Box top="45%" width="100%" zIndex={999} display="flex" position="absolute" justifyContent="space-between">
                        <Box onClick={handlePrevClick} className={clsx(classes.arrow, classes.arrowPrev)} display="flex">
                            <IoArrowBackOutline size={16} color='#333333' />
                        </Box>
                        <Box onClick={handleNextClick} className={clsx(classes.arrow, classes.arrowNext)} display="flex">
                            <IoArrowForwardOutline size={16} color='#333333' />
                        </Box>
                    </Box>}

                </Grid>
            </Grid>
        </Grid>


    );
}
