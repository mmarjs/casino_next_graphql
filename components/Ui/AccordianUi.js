import React from 'react';
import { withStyles, makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {IoChevronDownOutline} from 'react-icons/io5'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      //borderBottom: 0,
      borderRadius:80
    },
    '&:last-of-type': {
      //borderBottom: 0,
      borderRadius:80
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
      borderRadius:10
    },
    borderRadius:80
  },
  expanded: {

  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    //backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    margin:0,
    minHeight: 56,
    '&$expanded': {
      minHeight:80,
      
    },
    minHeight:80,
  },
  content: {
    '&$expanded': {
      //margin: '12px 0',
    },
  },
  expanded: {
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor:"none",
  },
  
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  
    expandIcon:{
        color: theme.palette.primary.main,
        transform: 'none !important',
    },
    title:{
      color: theme.palette.text.main
    },
    accordian:{
      backgroundColor:theme.palette.secondary.light,
      marginBottom:theme.spacing(1.5),
      marginTop:theme.spacing(1.5),
      //border:"none",
      marginLeft:0,
      marginRight:0,
      border: `1px solid ${theme.palette.secondary.gray}`,
      borderBottom:`1px solid ${theme.palette.secondary.gray} !important`,
    },
    accordianExpanded:{
      marginLeft:"0px !important",
      marginRight:"0px !important",
      marginBottom:`${theme.spacing(2)} !important`,
      marginTop:`${theme.spacing(2)} !important`,
      borderRadius:10,
    },
    summary:{
      border:"none"
    },
    detail:{
      backgroundColor: theme.palette.secondary.main
    }

}));

export default function AccordianUi(props) {
  const [expanded, setExpanded] = React.useState('0');
  const { items } = props;
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {items.map((item,index)=>{
          return (
            <Accordion 
              key={`accordian-item-${index}`} 
                classes={{expanded:classes.accordianExpanded}} 
                className={classes.accordian} expanded={expanded === item.id} 
                onChange={handleChange(item.id)}
              >
                <AccordionSummary 
                  className={classes.summary} 
                  classes={{expandIconWrapper:classes.expandIcon}}
                  expandIcon={expanded === item.id?<FaMinusCircle size={22} className={classes.expandIcon} />:<FaPlusCircle size={22} className={classes.expandIcon} />} 
                  aria-controls={`${item.id}-content`} 
                  id={`${item.id}-header`}
                >
                    <Typography variant="h4" fontWeight={500} className={classes.title}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.detail} >
                    {item.contentType==="html"?item.summary:<Typography variant="p">{item.summary}</Typography>}
                </AccordionDetails>
            </Accordion>
          )
      })}
    </Box>
  );
}
