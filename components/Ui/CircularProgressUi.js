import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function CircularProgressUi(props) {

  const { label, size, variant } = props;
  return (
    variant!=="regular"?
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
      style={{width:"100%", minHeight: 200}}
    >
      
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex">
          <CircularProgress size={size?size:20} />
        </Box>
        <Box display="flex" marginTop={1}>
          <Typography>{label}</Typography>
        </Box>
      </Box>
    </Box>
    :<CircularProgress size={size?size:20} />
  );
}


