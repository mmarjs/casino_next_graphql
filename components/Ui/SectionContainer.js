import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    innerContainer:{
        padding:0
    },
    sectionContainer:{
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        color:theme.palette.text.main,
        letterSpacing:"0.03em",
        imageRendering:"optimizeSpeed",
        imageRendering:"-moz-crisp-edges",
        imageRendering:"-o-crisp-edges",
        imageRendering:"-webkit-optimize-contrast",
        imageRendering:"pixelated",
        imageRendering:"optimize-contrast",
        [theme.breakpoints.down('md')]: {
            paddingRight: theme.spacing(3),
            paddingLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth:"87%"
        },
    },
    sectionContainerCard:{
        paddingLeft: theme.spacing(3.5),
        paddingRight: theme.spacing(3.5),
        [theme.breakpoints.down('md')]: {
            paddingRight: theme.spacing(1.5),
            paddingLeft: theme.spacing(1.5),
        },
    },
    container:{
        paddingTop:3,
        paddingLeft:0,
        paddingRight:0
    },
    title:{
        fontSize: '44px',
        lineHeight:"56px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
            lineHeight:"38px",
        },
    },
    colorPrimary:{
        color: theme.palette.primary.main
    },
      
}));


export default function SectionContainer(props) {
    const classes = useStyles();
    const {
        children,
        sectionClass,
        title,
        titlePrimary,
        summary,
        titleClass,
        summaryClass,
        sectionProps,
        innerSectionProps,
        enableCardGutter,
        disableCardGutterBottom,
        disableCardGutterTop
    } = props;


    return (
        <Grid 
            className={clsx(
                classes.sectionContainer, 
                sectionClass && sectionClass,
                enableCardGutter && classes.sectionContainerCard
            )} 
            container 
            mb={enableCardGutter && !disableCardGutterBottom?2:5}
            mt={enableCardGutter && !disableCardGutterTop?2:5}
            {...sectionProps}
        >
            <Grid item xs={12}>
                <Container className={clsx(classes.container)} disableGutters maxWidth="xl">
                    <Grid
                        container
                        {...innerSectionProps}
                    >
                        {title &&
                        <Grid mb={2}item xs={12}>
                            <Typography className={clsx(classes.title, titleClass && titleClass)} component="h1" variant="h1">{title} {titlePrimary && <span className={classes.colorPrimary}>{titlePrimary}</span>}</Typography>
                        </Grid>}

                        {summary &&
                        <Grid mb={6} item xs={12} sm={10} md={8}>
                            <Typography className={clsx(classes.summary, summaryClass && summaryClass)} component="p" variant="p">{summary}</Typography>
                        </Grid>}

                        {children}
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
}
