import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.text.mute,
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerUi(props) {
    const { textAlign, children, className } = props;
    return (
        <Root>
            <Divider className={className} textAlign={textAlign?textAlign:"center"}>{children}</Divider>
        </Root>
    );
}
