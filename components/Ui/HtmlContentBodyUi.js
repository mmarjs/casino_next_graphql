import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import useWindowDimensions from '@/src/useWindowDimensions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { marked } from 'marked';

const useStyles = makeStyles((theme) => ({
    body:{
        '& img':{
            maxWidth:"100%",
            borderRadius:15,
            height:"auto !important",
            aspectRatio:"auto !important"
        },
        '& iframe':{
            maxWidth:"100%"
        },
        '& table':{
            maxWidth:"100%"
        },
        whiteSpace:"normal",
        flexWrap:"wrap",
        overflowX:"hidden"
    }
}));


export default function HtmlContentBodyUi(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const { contentBody } = props;

    const { height } = useWindowDimensions();
    const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const getMarkdownText = () => {
        var rawMarkup = contentBody?marked.parse(contentBody, {sanitize: false, baseUrl:process.env.NEXT_PUBLIC_STORAGE_BASE_URL}): null;
        return { __html: rawMarkup };
    }


    return (
        <Box flexDirection="column" display="flex">
            <Box display="flex">
                <Box 
                    className={classes.body} 
                    flexDirection="column" 
                    component="div" 
                    display="flex" 
                    dangerouslySetInnerHTML={getMarkdownText()} 
                />
            </Box>
        </Box>
    );
}
