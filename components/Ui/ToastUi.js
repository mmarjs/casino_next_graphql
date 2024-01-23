import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastUi(props) {

  const { toast, onDismissToast, duration } = props;



  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={toast.open} autoHideDuration={duration?duration:2000} onClose={()=>props.onDismissToast({...toast, open:false, message: null})}>
        <Alert onClose={()=>props.onDismissToast({...toast, open:false, message: null})}  severity={toast.variant}>{toast.message}</Alert>
      </Snackbar>

    </Stack>
  );
}