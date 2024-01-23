import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import ButtonUi from "@/components/Ui/ButtonUi";
import {MdChevronRight} from 'react-icons/md';
import Rating from "@mui/material/Rating";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    card: {
        paddingTop: 6,
        margin: theme.spacing(1.1),
        marginBottom: theme.spacing(4),
        position: "relative",
        borderRadius: 25,
    },
    content: {
        position: "relative",
        borderRadius: 22,
        padding: `${theme.spacing(2)} ${theme.spacing(5)}`,
        [theme.breakpoints.up('md')]: {
            padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
        },
        [theme.breakpoints.up('xxl')]: {
            padding: `${theme.spacing(2)} ${theme.spacing(5)}`,
        },
        border: `1px solid ${theme.palette.border.main}`,
        backgroundColor: theme.palette.secondary.dark,
    },
    btn: {
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(18),
        borderRadius: 24,
        textTransform: 'uppercase',
        [theme.breakpoints.up('md')]: {
            height: 32,
        },
    },
    link: {
        width: '100%',
        maxWidth: 300,
        [theme.breakpoints.up('xl')]: {
            maxWidth: 200,
        },
    },
    rating: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    bonusLabel: {
        color: theme.palette.text.mute,
        lineHeight: 1
    },
    bonusItem: {
        paddingTop: theme.spacing(0.5),
        width: '50%',
        '&:nth-child(2n)': {
            alignItems: 'end'
        }
    },
    specialOffer: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 8,
        padding: `0 ${theme.spacing(3)}`,
        position: 'absolute',
        bottom: -11
    },
    img: {
        marginTop: theme.spacing(1),
        height: 75,
        [theme.breakpoints.down('md')]: {
            height: 110,
        },
        width: '100%',
        position: 'relative'
    }
}));

export default function FeaturedSlotCard({slot}) {
    const classes = useStyles();

    const {
        topBorderColor,
        image,
        buttonLabel,
        link,
        specialOfferLabel,
        specialOfferEnabled,
        bonuses
    } = slot;

    return (
        <Box
            bgcolor={topBorderColor}
            className={classes.card}
            display="flex"
            flexDirection="column"
        >
            <Box
                className={classes.content}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >

                <Box display="flex" alignItems="center" className={classes.img}>
                    {image && <Image
                        // width={image.width}
                        // height={image.height}
                        // width="100%" height="100%"
                        layout="fill" objectFit="contain"
                        src={image.url ? image.url : "/games/placeholder.jpg"}
                        blurDataURL="/games/placeholder.jpg"
                    />}
                </Box>

                <Rating value={5} readOnly size="small" className={classes.rating}/>

                <Box component={'a'} href={link} target='_blank' rel="nofollow noreferrer"
                     className={classes.link}>
                    <ButtonUi
                        title={buttonLabel}
                        endIcon={<MdChevronRight size={24}/>}
                        color="primary"
                        variant="contained"
                        size="small"
                        className={classes.btn}
                        rounded
                        fullWidth
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" flexWrap={'wrap'} p={1} pb={0}>
                    {(bonuses || []).map(({label, value}, ix) =>
                        <Box key={`bonus${ix}`} display="flex" flexDirection="column" className={classes.bonusItem}>
                            <Typography className={classes.bonusLabel}>{label}</Typography>
                            <Typography variant={'h3'} fontWeight={'medium'}>{value}</Typography>
                        </Box>
                    )}
                </Box>

                {(specialOfferLabel && specialOfferEnabled) && <Box className={classes.specialOffer}>
                    <Typography fontSize={14}>{specialOfferLabel}</Typography>
                </Box>}
            </Box>
        </Box>
    );
}
