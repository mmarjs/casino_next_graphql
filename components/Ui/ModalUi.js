import * as React from 'react';
import ButtonUi from '@/components/Ui/ButtonUi';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    content: {
        paddingTop:0,
        marginTop:0
    },
    titleNbp:{
        paddingBottom: 0
    },
    subtitle:{
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.text.mute,
        paddingTop: theme.spacing(0.5)
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalUi(props) {
    
    const classes = useStyles();
    const { open, 
        handleClose,
        maxWidth,
        title,
        summary,
        titleVariant,
        buttons,
        contentClass
    } = props;

    return (
        <div>
        <Dialog
            open={open}
            maxWidth={maxWidth?maxWidth:"xs"}
            fullWidth
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose?handleClose:()=>false}
            aria-describedby="alert-dialog-slide-description"
        >
            {title &&
            <DialogTitle 
                className={clsx(classes.title, summary && classes.titleNbp)}
                variant={titleVariant?titleVariant:"h6"}
            >
                {title}
            </DialogTitle>}
            
            {summary && <DialogTitle className={classes.subtitle}>{summary}</DialogTitle>}
            
            <DialogContent className={clsx(classes.content, contentClass && contentClass)}>
                {props.children}
            </DialogContent>
            {buttons && buttons.length > 0 &&
            <DialogActions>
                {buttons.map((item,index)=>{
                    return <ButtonUi key={`modal-btn-${index}`} handleClick={item.handleClick} variant={item.variant} title={item.title} {...item} />
                })}
            </DialogActions>}
        </Dialog>
        </div>
    );
}
