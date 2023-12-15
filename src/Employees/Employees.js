import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../Components/PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import { Paper } from '@mui/material';


const styles ={
    pageContent:{
        margin: '40px',
        padding: '24px'
    }
}

const Employees = () => {
    return (
        <>
            <PageHeader icon={<PeopleOutlineTwoTone fontSize='large' />} title="New Employee" subtitle="Form design with validation" />
            <Paper sx={styles.pageContent}>
                <EmployeeForm />
            </Paper>
            
        </>
        
        
    );
};

export default Employees;