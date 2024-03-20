import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SwipeableTextMobileStepper from './SlideShow';

export default function BaitWardDialog(props) {
    const { open, setOpen } = props

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Menu</DialogTitle>
                <DialogContent>
                    <SwipeableTextMobileStepper />
                </DialogContent>
                <DialogActions>
                    <Button sx={{ color: (theme) => theme.palette.text.primary }} onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
