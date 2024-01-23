import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    spacer: {
        minHeight: theme.spacing(3)
    },
}));



export default function FormSpacer(props) {
  const classes = useStyles();


  return (
    <Grid item xs={12}>
        <Box className={classes.spacer} />
    </Grid>
  );
}