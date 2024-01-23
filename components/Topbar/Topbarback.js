import React, {useEffect, useState, useRef} from 'react';

import { makeStyles } from '@mui/styles';

import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import { AiOutlineMenu } from 'react-icons/ai';
import TopSearchForm from './TopSearchForm';
import {ListItemIcon, Typography} from "@mui/material";
import ButtonUi from "@/components/Ui/ButtonUi";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
      toolbar:{
        marginBottom:0,
        background:theme.palette.secondary.light,
        paddingLeft: 0,
        paddingRight:0,
        transition: theme.transitions.create(['width', 'margin', 'background'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        color:theme.palette.text.main,
        boxShadow:"none",
      },
      appBar: {
        zIndex: theme.zIndex.drawer - 1,
        transition: theme.transitions.create(['width', 'margin', 'background'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        background:theme.palette.secondary.light,
        boxShadow:"none",
        borderBottom: "none",
        //paddingBottom: theme.spacing(2)
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        //on small devices
        [theme.breakpoints.down('md')]: {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
        color:theme.palette.text.main,

        justifyContent:"center"
      },
      appBarShrink: {
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuIconBtn:{
        width:40,
        height: 40,
        borderRadius: 8,
        backgroundColor: theme.palette.primary.main,
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        '&:hover':{
            backgroundColor: theme.palette.primary.angelic,   
        },
        color:theme.palette.primary.snow,  
      }
}));

function Topbar(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const {
    handleDrawer, 
    drawerOpen, 
    cover, 
    coverTextLight,
    shrink,
    open, toggleDrawer, navbarLinks, isNotDesktop
  } = props;




  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [enableAppBarBg, setEnableAppBarBg] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      else{
        setGoingUp(true);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      else{
        setGoingUp(false);
      }

      prevScrollY.current = currentScrollY;
      if(currentScrollY > (60) && cover){
        setEnableAppBarBg(true)
      }
      else{
        setEnableAppBarBg(false)
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);



    return(
        <>
        <AppBar elevation={1} className={clsx(classes.appBar, shrink && classes.appBarShrink, cover && classes.appBarCover, coverTextLight && classes.appBarCoverTextLight, enableAppBarBg && classes.enableAppBarBg)}>
        
          <Toolbar className={clsx(classes.toolbar, cover && classes.toolbarCover, coverTextLight && classes.toolbarCoverTextLight, enableAppBarBg && classes.enableAppBarBg)}>
           
            <Grid container alignItems="center" justifyContent="space-between">
{/*
              <Grid item xs={10} md={10}>
                <Box display="flex" width="100%" flex={1}>
                  {!shrink &&
                  <Box alignItems="center" display="flex">
                    <Link href="/" as="/" passHref>
                      <Box width={isMobile?80:100} component="a" display="flex">
                          <Logo />
                      </Box>
                    </Link>
                  </Box>}
                  <Box ml={shrink?-1:2} flex={1} display="flex" flexDirection="column">
                      <Box width="100%" display="flex" mb={2}>
                        <Typography fontSize={17} textAlign="center" variant="h5" component="h5">Popular Categories</Typography>
                      </Box>
                      <Box display="flex" mb={2}>
                        <ButtonUi
                            href="/"
                            as="/"
                            component="a"
                            variant="contained"
                            color="secondary"
                            title="Casino Reviews"
                            fullWidth
                            className={classes.btn}
                        />
                      </Box>
                      <Box display="flex" mb={2}>
                        <ButtonUi
                            href="/"
                            as="/"
                            component="a"
                            variant="contained"
                            color="secondary"
                            title="Bonuses Casino"
                            fullWidth
                            className={classes.btn}
                        />
                      </Box>
                      <Box display="flex" mb={2}>
                        <ButtonUi
                            href="/"
                            as="/"
                            component="a"
                            variant="contained"
                            color="secondary"
                            title="No Deposit Bonuses"
                            fullWidth
                            className={classes.btn}
                        />
                      </Box>
                      <Box mt={3} width="100%" display="none" mb={2}>
                        <Link href="/" as="/" passHref>
                          <Box className={classes.showMore} component="a" display="flex">
                            <Typography>Show More</Typography>
                          </Box>
                        </Link>
                      </Box>
                      <Box mt={2} width="100%" display="flex" mb={2}>
                        <Image src="/stake.png" width={249} height={338} />
                      </Box>
                  </Box>
                </Box>

              </Grid>
*/}



              <Grid item xs={2} md={2} alignItems="flex-end">
                <Box justifyContent="left" display="flex">
                  <Link href="/" as="/" passHref>
                    <Box maxHeight={70} width={100} component="a" display="flex">
                      <Logo />
                    </Box>
                  </Link>
                </Box>
                <Box display="flex" p={1}>
                  <List className={classes.navbar} component="nav">
                    {navbarLinks.map((item)=>{
                      return(
                          <React.Fragment key={item.id}>
                            <Link href={item.href} as={item.as} passHref>
                              <ListItem classes={{root:clsx(classes.listItem, router.pathname===item.href && classes.listItemActive)}} component="a">
                                <ListItemIcon style={{minWidth:40}}>
                                  <Image
                                      src={router.pathname===item.href?item.iconProps.srcActive:item.iconProps.src}
                                      width={item.iconProps.width}
                                      height={item.iconProps.height}
                                  />
                                </ListItemIcon>
                                <ListItemText classes={{primary:clsx(classes.listItemText, router.pathname===item.href && classes.listItemTextActive)}} primary={item.title} />
                              </ListItem>
                            </Link>
                          </React.Fragment>
                      )
                    })}
                  </List>
                </Box>
                {!shrink &&
                <Box display="flex" flex={1} justifyContent="flex-end">
                  <IconButton
                    onClick = {()=>handleDrawer(!drawerOpen)}
                    color="primary"
                    variant="contained"
                    className={classes.menuIconBtn}
                  >
                    <AiOutlineMenu size={22} />
                  </IconButton>
                </Box>}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    )
};


export default Topbar