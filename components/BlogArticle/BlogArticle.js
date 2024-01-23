import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CardUi from '@/components/Ui/CardUi';
import HtmlContentBodyUi from '@/components/Ui/HtmlContentBodyUi'


export default function BlogArticle({contentBody, title}) {

    const theme = useTheme();
    
    return (
        <CardUi enableBorder>
            <HtmlContentBodyUi contentBody={contentBody} />
        </CardUi>
    );
}
