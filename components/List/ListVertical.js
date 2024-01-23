import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    listTitle:{
        fontWeight: 600,
        fontSize: theme.typography.pxToRem(20),
        textTransform:"uppercase",
        height:30
    },
    listItem:{
        color: theme.palette.text.main,
        textDecoration:"none",
        '&:hover':{
            textDecoration:"underline",
            color: theme.palette.primary.main,
        }
    },
    listText:{
        color:"inherit",
        fontWeight:"inherit"
    },
    titleBase:{
        width:40,
        height:3,
        borderRadius:2,
        backgroundColor:theme.palette.primary.snow
    },
}));
const ListVertical = (props) => {

    const classes = useStyles();
    const { items, title } = props;

    return(
        <Box flexDirection="column" display="flex">
            
            {title &&
            <>
                <Typography fontWeight={600}>{title}</Typography>
                <Box mt={1} mb={1} display="flex" className={classes.titleBase} />
            </>}

            <List dense>
            {
                items.map((item, index) => {
                    return (
                    <Link key={item.id} href={item.href} passHref>
                        <ListItem target={item.target} key={item.id} className={classes.listItem} component="a" disableGutters>
                            <ListItemText
                                classes={{primary:classes.listText}}
                                primary={item.title}
                            />
                        </ListItem>
                    </Link>)
                })
            }
            </List>
        </Box>  
    )
};



export default ListVertical