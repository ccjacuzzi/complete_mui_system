import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import {Controls} from './Controls/Controls';

const ConfirmDialog = (props) => {
    
    // destructure the props aka extract all of these from the props parameter
    const{ confirmDialog, setConfirmDialog } = props;

    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text='No'
                    color='primary'
                    onClick={() => setConfirmDialog({
                        ...confirmDialog,
                        isOpen:false
                    })} />
                <Controls.Button
                    text='Yes'
                    color='secondary'
                    onClick={confirmDialog.onConfirm} />
            </DialogActions>

        </Dialog>
    );
};

export default ConfirmDialog;