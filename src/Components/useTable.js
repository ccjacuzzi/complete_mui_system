import { Table, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from '@mui/material';
import React, {useState} from 'react';

const useTable = (records, headCells) => {

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()
    
    const TblContainer = props => (
        <Table>
            {props.children}
        </Table>
    )

    const TblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order ==="asc";
            setOrder(isAsc?'dec':'asc')
            setOrderBy(cellId)
        }

        return (
        <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id}>
                                <TableSortLabel
                                direction = {orderBy === headCell.id ? order : 'asc'}
                                onClick = { () => {handleSortRequest(headCell.id)}}>
                                    {headCell.label}
                                </TableSortLabel>
                            </TableCell>))
                    }
                </TableRow>
        </TableHead>)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleRowsPerPage = event =>{
        setRowsPerPerPage(parseInt(event.target.value,10))
        setPage(0);
    }

    const TblPagination = () => (<TablePagination
        component='div'
        page = {page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={records.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange = {handleRowsPerPage}
    />)

    
    // Page has values 0,1,2,3,etc...
    // Rows per page can be 5, 10, 25
    // slice() takes starting array index and ending index
    // see "React Material UI Table with Paging Sorting and Filtering min 24:00"
    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage,(page+1)*rowsPerPage)
    }



    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
};

export default useTable;