import React from 'react';
import { Button as MuiButton } from '@mui/material';

import { makeStyles } from '@mui/styles';

// Style overrides for the Button
const useStyles = {
    root:{
        margin: '4px',
        textTransform: 'none'
    }

}

const Button = (props) => {
    
    // ...other is a placeholder for other props that may need to be passed in (type, for example)
    const {text, size, color, variant, onClick,...other} = props;
    
    

    // {use the prop if provided OR use the default value}
    return (
        <MuiButton
            sx={useStyles.root}
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onclick}
            {...other}>
            {text}
        </MuiButton>
    );
};

export default Button;