import React from 'react';
import Box from '@mui/material/Box';
import getConfig from 'next/config'
import Image from 'next/image';

const Logo = (props) => {
    
    const { publicRuntimeConfig } = getConfig()
    const { height } = props;

    return(
        <Box width="100%" display="flex" flexDirection="column">
            <Image priority={true} alt="Logo" height={96} width={221} src = {publicRuntimeConfig.logo} />
        </Box>
    )
};



export default Logo