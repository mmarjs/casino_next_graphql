import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { IoHomeOutline, IoChevronForwardSharp } from 'react-icons/io5';
import SectionContainer from '@/components/Ui/SectionContainer';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: {
    minHeight: 70
  },
  breadcrumbsSection:{

    background:theme.palette.secondary.gray
  },
  link:{
    textDecoration:"none",
    color: theme.palette.text.mute,
    fontSize: theme.typography.pxToRem(14)
  },
  separator:{
    color: theme.palette.text.mute,
  }
}));

export default function BreadcrumbsUi(props) {

  const classes = useStyles();
  const { breadcrumbs } = props;

  return (
    <SectionContainer sectionProps={{mt:3}}>
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" separator={<IoChevronForwardSharp className={classes.separator} fontSize="small" />}>
        <Link href="/" as="/" passHref>
          <Box className={classes.link} component="a" display="flex" alignItems="center">
            <Typography pl={0.5} className={classes.link}>Home</Typography>
          </Box>
        </Link>
        {breadcrumbs.map((item, index)=>{
          if(!item.active){
            return <Link key={`breadcrumb-item-${index}`} href={item.href} as={item.as} passHref>
              <Box className={classes.link} component="a" display="flex" alignItems="center">
                <Typography pl={0.5} className={classes.link}>{item.title}</Typography>
              </Box>
            </Link>
          }else{
            return <Typography key={`breadcrumb-item-typ-${index}`} className={classes.link}>
              {item.title}
            </Typography>
          }
        })}
        
      </Breadcrumbs>
    </div>
    </SectionContainer>
  );
}
