import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionContainer from '@/components/Ui/SectionContainer';
import useWindowDimensions from '@/src/useWindowDimensions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '@/components/Logo/Logo';
import IconButton from '@mui/material/IconButton';
import { FaTwitter, FaInstagram, FaEnvelope  } from "react-icons/fa";
import ListVertical from '@/components/List/ListVertical';
import DividerUi from '../Ui/DividerUi';


const useStyles = makeStyles((theme) => ({
    section:{
        backgroundColor: "#0f0f0f",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4),
        marginBottom:0,
        [theme.breakpoints.up('xl')]: {
            maxWidth:"100%"
        },
    },
    title:{
        fontSize: theme.typography.pxToRem(34),
        lineHeight: theme.typography.pxToRem(44),
        fontWeight: 900,
        alignItems:"center",
    },
    copyright:{
        color:theme.palette.text.light
    },
    icon:{
        color: theme.palette.primary.snow
    },
    iconButton:{
        marginRight: theme.spacing(2),
        paddingTop:0,
        paddingBottom:0,
        width:40,
        height: 40,
        borderRadius: 40,
        backgroundColor: theme.palette.primary.main,
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        '&:hover':{
            backgroundColor: theme.palette.primary.angelic,   
        }
    },
    socialIconBox:{
        marginRight: theme.spacing(2),
    }
}));


export default function Footer(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const { height } = useWindowDimensions();
    const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const legalLinks = [
        {
            id:"company_item_1",
            title:"Terms of Service",
            href:"#",
            target:"_self"
        },
        {
            id:"company_item_2",
            title:"Privacy Policy",
            href:"#",
            target:"_blank"
        },
        {
            id:"company_item_3",
            title:"Responsible gambling",
            href:"#",
            target:"_blank"
        }
    ];

    {/*const competitionLinks = [
        {
            id:"competitionLinks_item_1",
            title:"El Royale",
            href:"https://hycasino.com/casinos/el-royale-casino/review"
        },
        {
            id:"competitionLinks_item_1",
            title:"Red Dog",
            href:"https://hycasino.com/casinos/red-dog-casino/review"
        },
        {
            id:"competitionLinks_item_1",
            title:"Slot Hunter",
            href:"https://hycasino.com/casinos/slot-hunter-casino/review"
        },
        {
            id:"competitionLinks_item_1",
            title:"Aussie Play",
            href:"https://hycasino.com/casinos/aussie-play-casino/review"
        },
        {
            id:"competitionLinks_item_1",
            title:"Las Atlantis",
            href:"https://hycasino.com/casinos/las-atlantis-casino/review"
        },
        {
            id:"competitionLinks_item_1",
            title:"Slots Empire",
            href:"https://hycasino.com/casinos/slots-empire-casino/review"
        },
        {
            id:"competitionLinks_item_1",
            title:"Stake",
            href:"https://hycasino.com/casinos/stake/review"
        }
    ];*/}


    const casinoReviewsList = [
        {
            id:"casinoReviewsList_1",
            title:"Pragmatic Play",
            href:"https://hycasino.com/slots/provider/pragmatic-play/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"Play'n Go",
            href:"https://hycasino.com/slots/provider/play-n-go/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"Push Gaming",
            href:"https://hycasino.com/slots/provider/push-gaming/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"QuickSpin",
            href:"https://hycasino.com/slots/provider/quickspin/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"Nolimit City",
            href:"https://hycasino.com/slots/provider/nolimit-city/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"Gamomat",
            href:"https://hycasino.com/slots/provider/gamomat/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"Hacksaw Gaming",
            href:"https://hycasino.com/slots/provider/hacksaw-gaming/",
            target:"_self"
        },
        {
            id:"casinoReviewsList_1",
            title:"Relax Gaming",
            href:"https://hycasino.com/slots/provider/relax-gaming/",
            target:"_self"
        },
        
    ];

    const blogList = [
        {
            id:"blogList_1",
            title:"All articles",
            href:"https://hycasino.com/blog/",
            target:"_self"
        },
        {
            id:"blogList_2",
            title:"Cryptocurrency",
            href:"https://hycasino.com/blog?category=cryptocurrency",
            target:"_self"
        },
        {
            id:"blogList_3",
            title:"Blackjack",
            href:"https://hycasino.com/blog?category=blackjack",
            target:"_self"
        },
        {
            id:"blogList_4",
            title:"NFT",
            href:"https://hycasino.com/blog?category=nft",
            target:"_self"
        },
        {
            id:"blogList_5",
            title:"Poker",
            href:"https://hycasino.com/blog?category=poker",
            target:"_self"
        },
        {
            id:"blogList_6",
            title:"Slot Machine",
            href:"https://hycasino.com/blog?category=slot-machine",
            target:"_self"
        }
    ];

    const socialLinks = [
        {
            name: 'Twitter',
            href:'https://twitter.com/HyCasino',
            icon:<FaTwitter size={20} className={classes.icon}  />
        },
        {
            name: 'Instagram',
            href:'https://www.instagram.com/hycasino/',
            icon:<FaInstagram size={20} className={classes.icon} />
        },
        {
            name: 'Email',
            href:'mailto:support@hycasino.com',
            icon:<FaEnvelope size={20} className={classes.icon}  />
        },
        
        
    ];

    const socialLinksBox = <Box alignItems="center" flexWrap="wrap" display="flex">
        {socialLinks.map((item, index)=>{
            return(
            <Box className={classes.socialIconBox} display="flex" width="20%" key={`socialLink_${index}`}>
                <IconButton href={item.href} component="a" target="_blank" className={classes.iconButton}>
                    {item.icon}
                </IconButton>
            </Box>
            )
        })}
    </Box>
  

    return (
        <>
        <SectionContainer alignItems="center" justify="center" sectionClass={classes.section}>
            <Grid item xs={12} sm={12} md={12}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-between">
                            <Grid item xs={12} sm={3} md={2}>
                                <Box pr={!isMobile?6:0} height="100%" flexDirection="column" display="flex">
                                    <Box width={160} display="flex" flexDirection="column" flex={1}>
                                        <Box width="100%" mb={5} display="flex" flexDirection="column">
                                            <Logo />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={9} md={10}>
                                <Grid container justifyContent="space-between">
                                    <Grid item xs={12} sm={9} md={9}>
                                        <Grid container>
                                            <Grid mb={3} mr={2} item xs={12} sm={6} md>
                                                <ListVertical title="Legal Pages" items={legalLinks} />
                                            </Grid>
                                            {/*<Grid mb={3} mr={2} item xs={12} sm={6} md>
                                                <ListVertical title="Casino Reviews" items={competitionLinks} />
                                            </Grid>*/}
                                            <Grid mb={3} mr={2} item xs={12} sm={6} md>
                                                <ListVertical title="Free Slots" items={casinoReviewsList} />
                                            </Grid>
                                            <Grid mb={3} mr={2} item xs={12} sm={6} md>
                                                <ListVertical title="Blog" items={blogList} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} alignItems="flex-end">
                                        <Box mb={4} display="flex" flexDirection="column" alignItems={isMobile?"center":"flex-end"}>
                                            <Box display="flex" flexDirection="column">
                                                <Typography fontWeight={600}>Need Help?</Typography>
                                                <Box mt={3} display="flex" flexDirection="column">
                                                    {socialLinksBox}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography fontSize={14} lineHeight={1.7} color="text.mute">Responsible play: The player is responsible for the amount he is able to play. Don&apos;t gamble for money you can&apos;t afford to lose. Don&apos;t think of gambling as a way to make money. We recommend that you do not play when you are in a bad mood. Players are required to check the gambling laws in their country or jurisdiction before playing for money at any online gaming site. If you need help or support, visit <a href="https://www.begambleaware.org" target="_blank" rel="noreferrer" >www.begambleaware.org</a> or <a href="tel:08088020133">0808 8020 133</a> (EN).</Typography>
                <Typography mt={3} mb={4} fontSize={14} lineHeight={1.7} color="text.mute">PLEASE NOTE: The offers on our site are liable to change or to be canceled. We always recommend the player to review the conditions and verify the bonus directly on the casino / betting companies website.</Typography>
                <DividerUi className={classes.divider} />
                <Typography mt={3} fontSize={14} lineHeight={1.7}>&copy; HyCasino - All rights reserved</Typography>
            </Grid>
        </SectionContainer>
        </>
    );
}
