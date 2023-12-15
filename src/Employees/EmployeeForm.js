import {  Grid, TextField } from '@mui/material';
import { useForm, Form } from '../Components/useForm';
import { Controls } from '../Components/Controls/Controls';
import * as employeeServices from '../services/employeeServices'; //importing everything from employeeServices file



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
    isPermanent:false,
}




const EmployeeForm = () => {

    const{values, setValues, handleInputChange} = useForm(inititalFieldValues);    

    return (

        <Form>
            <Grid container>
                <Grid item xs={6}>
                    
                    <Controls.Input label='Full Name' name='fullName' value={values.fullName} onChange={handleInputChange} />

                    <Controls.Input
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
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
                    
                </Grid>
            </Grid>
        </Form>
        
    );
};

export default EmployeeForm;