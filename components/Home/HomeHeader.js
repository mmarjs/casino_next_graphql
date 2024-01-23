import React from 'react';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import Image from 'next/image'
import CardUi from '@/components/Ui/CardUi';
import ButtonUi from '@/components/Ui/ButtonUi';
import dragon from '@/public/drago.webp'
import {motion} from 'framer-motion'

const useStyles = makeStyles((theme) => ({
    cardClass: {
        padding: 0,
        marginBottom: 0,
        width: "100%"
    },
    cardContentClass: {
        background:"url(https://res.cloudinary.com/dpqnsekyx/image/upload/v1644928272/dragotexture_bzrugu.jpg) 0% 0% repeat",
        backgroundSize: "cover",
        paddingLeft: 30,
        paddingRight: 0
    },
    info: {
        paddingRight: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            paddingRight: 0,
        },
    },
    buttons: {
        background: '#131313',
        color: '#ffffff',
        borderColor: '#131313',
        boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.3)',
    },
    textshadow: {
        textShadow: '2px 3px 4px rgba(0, 0, 0, 0.5)',
    }
}));


export default function CoursesHeader(props) {

    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <CardUi contentClass={classes.cardContentClass} cardClass={classes.cardClass}>
            <Grid item xs={12} md={12}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Grid className={classes.header} container alignItems="center" justifyContent="space-between">
                            <Grid item xs={11} md={8}>
                                <Box flexDirection="column" display="flex">
                                    <Box className={classes.info} flexDirection="column" display="flex">
                                        <Box mb={4} display="flex">
                                            <Typography component="h1" variant="display" className={classes.textshadow}>Choosing
                                                The Best Online Casinos</Typography>
                                        </Box>
                                        <Box mb={4} display="flex" alignItems="center">
                                            <Typography component="p" variant="p">The best bonuses and slots just for you and thanks to HyCasino&#8217;s expertise</Typography>
                                        </Box>
                                        <Box display={isDesktop ? "flex" : ""}>
                                            <Box >
                                                <ButtonUi
                                                    component="a"
                                                    href="/casinos"
                                                    className={classes.buttons}
                                                    title="Compare Casinos"
                                                    size="medium"
                                                    radius="rounded"
                                                />
                                            </Box>
                                            <Box ml={isDesktop ? 3 : 0} mt={isDesktop ? 0 : 2}>
                                                <ButtonUi
                                                    component="a"
                                                    href="/slots"
                                                    className={classes.buttons}
                                                    title="Play Free Slots"
                                                    size="medium"
                                                    radius="rounded"
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}  display={{ xs: "none", lg: "block" }}>
                                <Box zIndex={9999} mt={isDesktop ? -15 : -5} display="flex">
                                    <motion.div
                                        animate={{y: [20, 60, 30, 40, 30, 20]}}
                                        transition={{duration: 20, repeat: Infinity}}

                                    >
                                        <Image draggable={false} src={'https://res.cloudinary.com/dpqnsekyx/image/upload/v1644871149/drago.webp'} width={761} height={837}/>
                                    </motion.div>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardUi>

    );
}
