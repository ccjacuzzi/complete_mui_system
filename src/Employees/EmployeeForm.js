import {  Grid, TextField } from '@mui/material';
import { useForm, Form } from '../Components/useForm';
import { Controls } from '../Components/Controls/Controls';
import * as employeeServices from '../services/employeeServices'; //importing everything from employeeServices file
import { useEffect } from 'react';



const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'}

]

// [name]:value
const inititalFieldValues = {
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false
}




const EmployeeForm = (props) => {

    const{ addOrEdit, recordForEdit } = props

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? '': 'This field is required'
        temp.email = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/).test(values.email) ? '': 'Email is not valid'
        temp.mobile = values.mobile.length > 9 ? '': 'Minimum 10 characters requried'
        temp.departmentId = values.departmentId.length != 0 ? '': "You must select a department"
        temp.city = values.city ? '': 'City is required'
        setErrors({
          ...temp  
        })

        // if every value in this object that is returned from the validate function is an empty string, the function will return true    
        return Object.values(temp).every(x => x === '')
        
    }
    
    const{values, setValues,  errors, setErrors, handleInputChange, resetForm} = useForm(inititalFieldValues);
       
    const handleSubmit = (e) => {
        e.preventDefault() //just used to prevent the form from reloading upon submit
        if (validate()){
            addOrEdit(values, resetForm)
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
    

    return (

        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    
                    <Controls.Input
                        label='Full Name'
                        name='fullName'
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />

                    <Controls.Input
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />

                    <Controls.Input
                        label='Mobile'
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />

                    <Controls.Input
                        label='City'
                        name='city'
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </Grid>
                <Grid item xs={6}>

                    <Controls.RadioGroup
                        label='Gender'
                        name='gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}

                    />
                    <Controls.Select 
                        name='departmentId'
                        label='Department'
                        value={values.departmentId}
                        error={errors.departmentId}
                        onChange={handleInputChange}
                        options={employeeServices.getDepartmentCollection()} //This would likely be an api call to db
                    />
                    <Controls.DatePicker
                        name='hireDate'
                        label='Hire Date'
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                
                    
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        value={values.isPermanent}
                        onChange={handleInputChange}/>

                    <div>
                        <Controls.Button
                        color='primary'
                        size='large'
                        text='Submit'
                        type="submit" />

                        <Controls.Button
                        text='Reset'
                        color='secondary'
                        onClick={resetForm} />
                    </div>
                    
                </Grid>
            </Grid>
        </Form>
        
    );
};

export default EmployeeForm;