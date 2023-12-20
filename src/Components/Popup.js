import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import { Controls } from './Controls/Controls';

const Popup = (props) => {


    const {title, children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup} maxWidth='md'>
            
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.Button color='secondary' text='X' />
                </div>
            </DialogTitle>
            
            
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default Popup;