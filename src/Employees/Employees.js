import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../Components/PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import { Paper, TableBody, TableRow, TableCell, InputAdornment } from '@mui/material';
import useTable from '../Components/useTable';
import * as employeeService from '../services/employeeServices'
import { useState } from 'react';
import { Controls } from '../Components/Controls/Controls';
import { Search, Add } from '@mui/icons-material';
import Popup from '../Components/Popup';


const styles ={
    pageContent:{
        margin: '40px',
        padding: '24px'
    },
    searchInput:{
        width: '75%',
        marginBottom: '10px'
    },
    tableHeader:{
        backgroundColor: '#cfd8dc'
        
    },
    newButton:{
        position: 'absolute',
        right: '60px'
    }
}

const headCells = [
    {id: 'fullName', label:'Employee Name'},
    {id: 'email', label:'Email'},
    {id: 'mobile', label:'Mobile Number'},
    {id: 'department', label:'Department', disableSorting:'true'}    
]

const Employees = () => {
    
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; }})
    const [openPopup, setOpenPopup] = useState(false);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
    
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if(target.value === '')
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })

    }

    return (
        <>
            <PageHeader icon={<PeopleOutlineTwoTone fontSize='large' />} title="New Employee" subtitle="Form design with validation" />
            <Paper sx={styles.pageContent}>
                
                <Controls.Input
                    label="Employee Search"
                    style={styles.searchInput}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            <Search />
                        </InputAdornment>)
                    }}
                    onChange={handleSearch}
                />
                <Controls.Button
                text='Add New'
                style={styles.newButton}
                variant='outlined'
                startIcon={<Add />}
                onClick={()=> setOpenPopup(true)}
                />
                <TblContainer>
                    <TblHead style={styles.tableHeader} />
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
            <Popup
                title='Employee Form'
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm />
            </Popup>
            
        </>
        
        
    );
};

export default Employees;