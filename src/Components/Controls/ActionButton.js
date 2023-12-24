import React from 'react';
import { Button, makeStyles } from '@mui/material';



const ActionButton = (props) => {

    const { color, children, onClick } = props;

    return (
        <Button
            onClick={onClick}
            color={color}>
            {children}
        </Button>
    );
};

export default ActionButton;