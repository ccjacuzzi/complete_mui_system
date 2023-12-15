import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';

// This is a generic form state hook. It takes an JSON object as a parameter.
// It sets the initial state of values to the values in the object.
const useForm = (inititalFieldValues) => {
    
    const[values, setValues] = useState(inititalFieldValues);

    // e is the default event parameter
    // destructure the e.target into name and value
    // call the setValues state function and pass in an object
    // use the spread operator to say we want everything elese from the values state object
    // but, we want to replace the value of the entry with a matching name
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    
    return {
        values, setValues, handleInputChange
    } 
       
    
};

// note theme.spacing(1) is equal to 8px
// root is a parent element
// If there is an element inside of this parent element with .MuiFormControl-root style applied to it
const useStyles = makeStyles({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: '8px'
        }
    }
})

const Form = (props) => {

    const classes = useStyles();

    return (
        <form className={classes.root}>
            {props.children}
        </form>
    );
};



export { useForm, Form};