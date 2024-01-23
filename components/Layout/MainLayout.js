import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import modes from '@/src/modes';
import Topbar from "@/components/Topbar/Topbar";
import Footer from '@/components/Footer/Footer'
import ToastUi from '@/components/Ui/ToastUi';
import * as actions from '@/store/actions/index';
import { connect } from 'react-redux';
import DrawerNav from "@/components/Sidebar/DrawerNav";
import BreadcrumbsUi from '@/components/Ui/BreadcrumbsUi';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '@/src/theme';

const useStyles = makeStyles(() => ({
  container:{
    background:"#131313",
    // background:"url(/main-bg.webp) 0% 0% repeat",
    backgroundSize: "100%",
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    paddingBottom:0,
    marginBottom:0,
  }
}));

function MainLayout(props) {

  const classes = useStyles();
  const theme = createTheme(modes.dark);
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  const isNotDesktop = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
  const [drawerOpen, setDrawerOpen] = React.useState(true);
    
  //redux store props
  const { toast } = props;

  //props from page
  const { 
      seo, 
      cover,
      containerClass,
      hideTopbar,
      hideFooter,
      breadcrumbs
  } = props;

    //navigation links for topbar & sidebar drawer
  const navbarLinks = [
    {
      title:"Bonuses",
      href:"/",
      as:"/",
      id:"nav1",
      iconProps:{
        src:"/icons/chip.svg",
        srcActive:"/icons/chip.svg",
        width:32,
        height:32
      }
    },
    {
      title:"Casinos",
      href:"/casinos",
      as:"/casinos",
      id:"nav1.1",
      iconProps:{
        src:"/icons/casino.svg",
        srcActive:"/icons/casino.svg",
        width:32,
        height:32
      }
    },
        {
      title:"Games",
      href:"/slots",
      as:"/slots",
      id:"nav2",
      iconProps:{
        src:"/icons/games.svg",
        srcActive:"/icons/games.svg",
        width:34,
        height:34
      }
    },
    {
      title:"Blog",
      href:"/blog",
      as:"/blog",
      id:"nav3",
      iconProps:{
        src:"/icons/blog.svg",
        srcActive:"/icons/blog-active.svg",
        width:32,
        height:32
      }
    },
  ];

  useEffect(()=>{
    if(isNotDesktop){
      setDrawerOpen(false)
    }
  },[isNotDesktop])


  return (<ThemeProvider theme={theme}>

      {!hideTopbar && <Topbar
          navbarLinks={navbarLinks}
          drawerOpen = {drawerOpen}
          handleDrawer = {()=>setDrawerOpen(!drawerOpen)}
          cover={cover}
          handleCart={(open)=>setOpenCartModal(open)}
          shrink={isDesktop && drawerOpen}
      />}

{/*      <DrawerNav
        open={drawerOpen}
        toggleDrawer = {()=>setDrawerOpen(!drawerOpen)}
        navbarLinks={navbarLinks}
        isNotDesktop={isNotDesktop}
      />*/}

      {!cover && <div className={classes.appBarSpacer} />}
      <Container
        maxWidth={true}
        disableGutters
        className={clsx(
          classes.container, 
          containerClass,
          isDesktop && drawerOpen && classes.containerShrink
        )}
      >

          {seo &&
          <NextSeo
              title = {seo.title}
              description = {seo.description}
              canonical = {seo.canonical}
              openGraph = {{...seo.open_graph}}
          />}

          {breadcrumbs && <BreadcrumbsUi breadcrumbs={breadcrumbs} />}

          {props.children}
          
          <ToastUi toast = {toast} onDismissToast = {(obj)=>props.onDismissToast(obj)} />
          
          {!hideFooter && <Footer />}
      </Container>
  </ThemeProvider>)
}


const mapStateToProps = state => ({
  toast: state.app.toast,
  browserHistory: state.app.browserHistory
});

const mapDispatchToProps = dispatch => {
  
  return {
    onDismissToast: (obj) => dispatch(actions.updateToast(obj)),
    onUpdateBrowserHistory: (asPath) => dispatch(actions.updateBrowserHistory(asPath))
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
