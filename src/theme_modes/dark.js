import { createTheme } from '@mui/material/styles';

let theme = createTheme()

const lightMode = {
  

  palette: {
      primary: {
        snow:"#ffffff",
        angelic:"#3745C5",
        main: '#C3073F',
        light: '#e1f9e0',
        dark:"#6F2132"
      },
      secondary: {
        light:"#131313",
        main: '#17171A',
        dark:"#18181B",
        teal:"#1D7396",
        night:"#131313",
        darkTeal:"#1B212D"
      },
      accent:{
        main: "#FCB703"
      },
      card:{
        shadow:"0px 4px 20px rgba(86, 86, 86, 0.16)",
        radius: 6
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
        mute: '#a8a8a8',
        medium:"#f2f2f2",
        main: '#ffffff',
      },
      border:{
        light:"#eaedef",
        main: '#2D2D2D'
      },
      error:{
        main:"#DF4F5F",
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
        main:"#31BEA6",
        dark:'#3c9b09',
        light:'#e0f7de'
      },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1200,
      xxl: 1400
    },
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
      display: {
          fontSize: '60px',
          lineHeight:"72px",
          letterSpacing:"0.03%",
          fontWeight:700,
          [theme.breakpoints.down('sm')]: {
              fontSize: '42px',
              lineHeight:"48px",
          },
          color:"#ffffff"
      },
      h1: {
        fontSize: '37px',
        lineHeight:"72px",
        letterSpacing:"0.03%",
        fontWeight:700,
        [theme.breakpoints.down('sm')]: {
          fontSize: '42px',
          lineHeight:"48px",
        },
        color:"#ffffff"
      },
      h2: {
        fontSize: '32px',
        lineHeight:"44.2px",
        letterSpacing:"0.03%",
        fontWeight:700,
        [theme.breakpoints.down('sm')]: {
          fontSize: '28px',
          lineHeight:"36.4px",
        },
        color:"#ffffff"
      },
      h3: {
        fontSize: '22px',
        lineHeight:"32.2px",
        letterSpacing:"0.03%",
        fontWeight:600,
        [theme.breakpoints.down('sm')]: {
          fontSize: '22px',
          lineHeight:"34px",
        },
        color:"#ffffff"
      },
      h4: {
        fontSize: '20px',
        lineHeight:"28.2px",
        letterSpacing:"0.03%",
        fontWeight:700,
        [theme.breakpoints.down('md')]: {
          fontSize: '16px',
          lineHeight:"30px",
        },
        color:"#ffffff"
      },
      h5: {
        fontSize: '16px',
        lineHeight:"24.2px",
        letterSpacing:"0.03%",
        fontWeight:500,
        [theme.breakpoints.down('md')]: {
          fontSize: '14px',
          lineHeight:"24.2px",
        },
        color:"#ffffff"
      },
      h6: {
        fontSize: '14px',
        lineHeight:"22.2px",
        letterSpacing:"0.03%",
        fontWeight:500,
        [theme.breakpoints.down('md')]: {
          fontSize: '12px',
          lineHeight:"22.2px",
        },
        color:"#ffffff"
      },
      p: {
        fontSize: '16px',
        lineHeight:"24px",
        letterSpacing:"0.03%",
        [theme.breakpoints.down('sm')]: {
          fontSize: '14px',
          lineHeight:"20px",
        },
        color:"#ffffff"
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
      },
      MuiRating:{
        iconEmpty:{
          color:"#0099cc !important"
        }
      }
  },
}


export default lightMode;
