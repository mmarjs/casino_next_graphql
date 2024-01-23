import React, {useEffect, useState, useRef} from 'react';

import {makeStyles} from '@mui/styles';

import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import {AiOutlineMenu} from 'react-icons/ai';
import TopSearchForm from './TopSearchForm';
import {ListItemIcon, Typography} from "@mui/material";
import ButtonUi from "@/components/Ui/ButtonUi";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        marginBottom: 0,
        background: theme.palette.secondary.light,
        paddingLeft: 0,
        paddingRight: 0,
        transition: theme.transitions.create(['width', 'margin', 'background'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        color: theme.palette.text.main,
        boxShadow: "none",
    },
    appBar: {
        zIndex: theme.zIndex.drawer - 1,
        transition: theme.transitions.create(['width', 'margin', 'background'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: theme.palette.secondary.light,
        boxShadow: "none",
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
        color: theme.palette.text.main,

        justifyContent: "center"
    },
    appBarShrink: {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuIconBtn: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: theme.palette.primary.main,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        '&:hover': {
            backgroundColor: theme.palette.primary.angelic,
        },
        color: theme.palette.primary.snow,
    },
    listItemText:{
        color: theme.palette.text.main,
        fontSize: theme.typography.pxToRem(14),
        textTransform:"uppercase",
        fontWeight:600,
        '&:hover':{
            color: theme.palette.primary.main,
        }
    },
    listItemTextActive:{
        color: theme.palette.primary.main,
    },
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
            } else {
                setGoingUp(true);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            } else {
                setGoingUp(false);
            }

            prevScrollY.current = currentScrollY;
            if (currentScrollY > (60) && cover) {
                setEnableAppBarBg(true)
            } else {
                setEnableAppBarBg(false)
            }
        };

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="sticky"
                    className={clsx(classes.appBar, shrink && classes.appBarShrink, cover && classes.appBarCover, coverTextLight && classes.appBarCoverTextLight, enableAppBarBg && classes.enableAppBarBg)}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link href="/" as="/" passHref>
                            <Box maxHeight={150} width={150} component="a" display="flex">
                                <Logo/>
                            </Box>
                        </Link>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none', marginLeft: 50}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <AiOutlineMenu size={22}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {navbarLinks.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <Link href={item.href} as={item.as} passHref>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{item.title}</Typography>
                                            </MenuItem>
                                        </Link>
                                    </React.Fragment>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}} ml={45}>
                            {navbarLinks.map((item) => (
                                <React.Fragment key={item.id}>
                                    <Link href={item.href} as={item.as} passHref>
                                        <ListItem classes={{root:clsx(classes.listItem, router.pathname===item.href && classes.listItemActive)}} component="a">
                                            <ListItemIcon style={{minWidth:50}}>
                                                <Image
                                                    src={router.pathname === item.href ? item.iconProps.srcActive : item.iconProps.src}
                                                    width={item.iconProps.width}
                                                    height={item.iconProps.height}
                                                />
                                            </ListItemIcon>
                                            <ListItemText classes={{primary:clsx(classes.listItemText, router.pathname===item.href && classes.listItemTextActive)}} primary={item.title} />
                                        </ListItem>
                                    </Link>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};


export default Topbar