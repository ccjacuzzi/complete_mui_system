import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../Components/PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import { Paper, TableBody, TableRow, TableCell } from '@mui/material';
import useTable from '../Components/useTable';
import * as employeeService from '../services/employeeServices'
import { useState } from 'react';


const styles ={
    pageContent:{
        margin: '40px',
        padding: '24px'
    }
}

const headCells = [
    {id: 'fullName', label:'Employee Name'},
    {id: 'email', label:'Email'},
    {id: 'mobile', label:'Mobile Number'},
    {id: 'department', label:'Department'}    
]

const Employees = () => {
    
    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells);
    
    return (
        <>
            <PageHeader icon={<PeopleOutlineTwoTone fontSize='large' />} title="New Employee" subtitle="Form design with validation" />
            <Paper sx={styles.pageContent}>
                <EmployeeForm />
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => 
                                (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.fullName}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.mobile}</TableCell>
                                        <TableCell>{item.department}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            
        </>
        
        
    );
};

export default Employees;