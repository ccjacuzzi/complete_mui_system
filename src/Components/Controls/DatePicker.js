import React from 'react';
import { TextField } from '@mui/material';

const DatePicker = (props) => {
    
    const {name, label, value, onChange} = props;

    return (
        <TextField
            type="date"
            variant='outlined'
            color='secondary'
            name={name}
            label={label}
            value={value}
            onChange={onChange} />
    );
};

export default DatePicker;