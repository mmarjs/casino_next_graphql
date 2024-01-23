import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import ButtonUi from "@/components/Ui/ButtonUi";
import Logo from '@/components/Logo/Logo';
import { ListItemIcon, Typography } from '@mui/material';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    drawerPaper:{
        borderRightColor:theme.palette.secondary.light,
        filter:"drop-shadow(11px 0px 13px rgba(0, 0, 0, 0.25))",
        width:250
    },
    content: {
        backgroundColor: theme.palette.secondary.light,
        width:250
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
    showMore:{
        borderBottom: `1px solid ${theme.palette.text.mute}`,
        color:theme.palette.text.mute,
        textDecoration:"none",
        textTransform:"uppercase",
        paddingBottom: theme.spacing(0.5),
        '&:hover':{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
        }
    },
    btn:{
        fontSize: theme.typography.pxToRem(14), 
    }
}));

export default function DrawerNav(props) {
    
    const classes = useStyles();
    const router = useRouter();  

    const { open, toggleDrawer, navbarLinks, isNotDesktop } = props;

    return (
    <div>
    <React.Fragment>
        <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={()=>toggleDrawer()}
            onOpen={()=>toggleDrawer()}
            variant={open ? isNotDesktop ? "temporary" : "permanent" : "temporary"}
            classes={{paper:classes.drawerPaper}}
        >
            <Box width={300} display="flex" flexDirection="column" flex={1} className={classes.content}>
                <Box p={2} justifyContent="center" display="flex">
                    <Link href="/" as="/" passHref>
                        <Box maxHeight={90} width={140} component="a" display="flex">              
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
                <Box display="flex" flexDirection="column" pl={3} pr={3}>
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
        </SwipeableDrawer>
    </React.Fragment>
    </div>
  );
}
