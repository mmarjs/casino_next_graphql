import { createTheme } from '@mui/material/styles';

let theme = createTheme()

const lightMode = {

  palette: {
      primary: {
        snow:"#ffffff",
        meteor: '#2F3550',
        angelic:"#4A59A9",
        main: '#4CAA4A',
        light: '#e1f9e0'
      },
      secondary: {
        light:"#ffffff",
        main: '#FDCA65',
        moab: '#FFC5AC',
        astra: "#FFEAB1",
        sky:"#DDE7F5",
        gray:"#E6EAF0"
      },
      accent:{
        main: "#FCB703",
        tijuana: "#FFBF3A",
        blush: "#F91671"
      },
      neutral:{
        main: "#E0E0E0"
      },
      translucent:{
        meteor70:"rgba(47, 53, 80, 0.7)",
        meteor50:"rgba(47, 53, 80, 0.5)",
        meteor30:"rgba(47, 53, 80, 0.3)",
        meteor10:"rgba(47, 53, 80, 0.1)",
        meteor5:"rgba(47, 53, 80, 0.05)",
        meteor3:"rgba(47, 53, 80, 0.03)",
        snow40:"rgba(255, 255, 255, 0.4);",
        snow20:"rgba(248, 250, 255, 0.2)",
        snow10:"rgba(248, 250, 255, 0.1)",
        snow5:"rgba(248, 250, 255, 0.05)",
        astra50:"rgba(255, 234, 117, 0.5)",
        twilight50:"rgba(182,217,255,0.5)",
        dusk3:"rgba(68, 100, 163, 0.03)",
        dusk10:"rgba(68, 100, 163, 0.1)"
      },
      card:{
        shadow:"0px 4px 20px rgba(86, 86, 86, 0.16)",
        radius: 6
      },
      brandColors:{
        blue:"#0ea1bf",
        yellow:"#fdc712",
        red:"#e84c10",
        green:"#88b227",
        gray:"#3b4045",
      },
      logo:{
        blue:"#09c7ed",
        yellow:"#F2B900",
        red:"#f95a20",
        green:"#99d313"
      },
      modal:{
        header: "#E7F3FF"
      },
      skeleton:{
        main:"#ced7e0",
        dark:"#384a54"
      },
      pageHeader:{
        main:"#16242B",
        textColor:"#ffffff"
      },
      section:{
        main:"#ccf4ff"
      },
      text:{
        light: '#ffffff',
        mute: '#B1B1B1',
        medium:"#737373",
        main: '#2F3550',
      },
      border:{
        light:"#eaedef",
        main: 'rgba(0,0,0,0.2)'
      },
      error:{
        main:"#ed253d",
        dark:'#e5001a',
        light:"rgba(237,37,61,0.3)"
      },
      warning:{
        main:"#ff9800",
        dark:'#aa6c00',
        light:"#ffe4b7"
      },
      info:{
        main:"#0bdaed",
        dark:'#1F263F'
      },
      success:{
        main:"#37c607",
        dark:'#3c9b09',
        light:'#e0f7de'
      },
      colors:{
        yellow:{
          main:"#ffae00",
          light:"#ffecc4",
          bright:"#ff8c00"
        },
        purple:{
          main:"#B65DEA",
          light:"#F6E2FF",
          bright:"#ee0ef2"
        },
        red:{
          main:"#F31B40",
          light:"#FBD3DB",
          bright:"#ff002a"
        }
      }
  },
  typography: {
      fontFamily: [
          'Poppins',
          '-apple-system',
          'sans-serif',
      ].join(','),
      root:{
        color:"#2F3550",
      },
      h1: {
        fontSize: '60px',
        lineHeight:"72px",
        color:"#2F3550",
        letterSpacing:"0.03%",
        fontWeight:600,
        [theme.breakpoints.down('sm')]: {
          fontSize: '42px',
          lineHeight:"48px",
        },
      },
      h2: {
        fontSize: '34px',
        lineHeight:"44.2px",
        color:"#2F3550",
        letterSpacing:"0.03%",
        fontWeight:600,
        [theme.breakpoints.down('sm')]: {
          fontSize: '28px',
          lineHeight:"36.4px",
        },
      },
      h3: {
        fontSize: '24px',
        lineHeight:"32.2px",
        color:"#2F3550",
        letterSpacing:"0.03%",
        fontWeight:600,
        [theme.breakpoints.down('sm')]: {
          fontSize: '22px',
          lineHeight:"34px",
        },
      },
      h4: {
        fontSize: '20px',
        lineHeight:"28.2px",
        color:"#2F3550",
        letterSpacing:"0.03%",
        fontWeight:500,
        [theme.breakpoints.down('sm')]: {
          fontSize: '18px',
          lineHeight:"30px",
        },
      },
      h5: {
        fontSize: '16px',
        lineHeight:"24.2px",
        color:"#2F3550",
        letterSpacing:"0.03%",
        fontWeight:500,
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px',
          lineHeight:"24.2px",
        },
      },
      p: {
        fontSize: '16px',
        lineHeight:"24px",
        color:"#2F3550",
        letterSpacing:"0.03%",
        [theme.breakpoints.down('sm')]: {
          fontSize: '14px',
          lineHeight:"20px",
        },
      },
  },
  overrides: {
      MuiTypography: {
        root:{
          color:"#2F3550",
          letterSpacing:"3em"
        },
      },
      MuiCollapse:{
        container:{
          width:"100%"
        }
      }  
  },
}


export default lightMode;