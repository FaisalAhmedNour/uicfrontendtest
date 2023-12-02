import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SetHeader from './SetHeader/SetHeader';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

export default function SetTableHeading({ fileData, headers, headersOfTheCols }) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ maxHeight: 220 }} stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {
                                headersOfTheCols.map((headerOfCol, index) => <TableCell key={index} align="center">
                                    <SetHeader headerOfCol={headerOfCol} headers={headers} index={index}></SetHeader>
                                </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                headersOfTheCols.map((header, index) => <TableCell key={index} align="center">{header}</TableCell>)
                            }
                        </TableRow>
                        {fileData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    headersOfTheCols.map((header, index) => <TableCell key={index} align="center" component="th" scope="row">{row[header]}</TableCell>)
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={fileData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}