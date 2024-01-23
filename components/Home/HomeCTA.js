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
import jin from '@/public//home/compare.png'
import {motion} from 'framer-motion'
import { IoFlash } from 'react-icons/io5';

const useStyles = makeStyles((theme) => ({
    cardClass: {
        padding: 0,
        marginBottom: 0,
        width: "100%"
    },
    cardContentClass: {
        background:"url(https://res.cloudinary.com/dpqnsekyx/image/upload/v1644928498/compare-bg_brr9ph.webp) 0% 0% repeat",
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
        background: '#ffffff',
        color: '#131313',
        borderColor: '#ffffff',
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
                            <Grid item xs={12} md={6}>
                            <Box mb={2} display="flex">
                                        <Typography component="h5" variant="h5">BONUS OF THE MONTH</Typography>
                                    </Box>
                                <Box flexDirection="column" display="flex">
                                    <Box className={classes.info} flexDirection="column" display="flex">
                                        <Box mb={4} display="flex">
                                            <Typography component="display" variant="display" className={classes.textshadow}>7$ Bitcoin Free + 10% Of Rakeback</Typography>
                                        </Box>
                                        <Box mb={4} display="flex" alignItems="center">
                                            <Typography fontWeight={600} fontSize={16} component="p" variant="p">Stake <IoFlash /> Welcome Bonus</Typography>
                                        </Box>
                                        <Box display={isDesktop ? "flex" : ""}>
                                            <Box >
                                                <ButtonUi
                                                    component="a"
                                                    href="https://hycasino.io/Stake"
                                                    className={classes.buttons}
                                                    title="Claim Bonus"
                                                    size="medium"
                                                    radius="rounded"
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}  display={{ xs: "none", lg: "block" }}>
                            <Box zIndex={9999} mt={isDesktop?-15:5} display="flex">
                                <motion.div
                                    animate={{ y: [0, 40, 0]}}
                                    transition={{ duration: 7, repeat: Infinity }}

                                >
                                    <Image src={'https://res.cloudinary.com/dpqnsekyx/image/upload/v1644928519/compare_if2jia.webp'} width={570} height={452} />
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
