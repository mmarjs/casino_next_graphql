import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function TitleUi(props) {
    const { title, summary, containerProps, titleProps, summaryProps, alignItems } = props;
    return (
        <Box flexWrap="wrap" flexDirection="column" display="flex" alignItems={alignItems?alignItems:"center"} {...containerProps}>
            <Box flexWrap="wrap"  mb={1} display="flex">
                <Typography flexWrap="wrap" textAlign="center" component="h1" variant="h1"  {...titleProps}>{title}</Typography>
            </Box>
            {summary &&
            <Box flexWrap="wrap" display="flex">
                <Typography fontWeight={500} textAlign="center" component="h3" variant="h3" {...summaryProps}>{summary}</Typography>
            </Box>}
        </Box>
    );
}



