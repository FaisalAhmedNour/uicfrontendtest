import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';

function createData(
    IssuedId,
    SCorLCNo,
    InvoiceNo,
    Quantity,
    Value,
    Status
) {
    return {
        IssuedId,
        SCorLCNo,
        InvoiceNo,
        Quantity,
        Value,
        Status
    };
}

const rows = [
    createData('Iss-000000001', "Abc/123/009-inv", "123Abc", 100, 110, "Issued"),
    createData('Iss-000000002', "Abc/123/009-inv", "123Abc", 100, 110, "Issued"),
    createData('Iss-000000003', "Abc/123/009-inv", "123Abc", 100, 110, "Issued"),
];

export default function IssuedEXPFileList() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }} >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                    stickyHeader
                    aria-label="sticky table"
                    size="small"
                    sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, overflow: "hidden" }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                            >
                                <p className='font-semibold'>Issued Id</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>S/C or L/C No</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Invoice No</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Quantity</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Value</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Status</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Action</p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.IssuedId}</TableCell>
                                <TableCell align="center">{row.SCorLCNo}</TableCell>
                                <TableCell align="center">{row.InvoiceNo}</TableCell>
                                <TableCell align="center">{row.Quantity}</TableCell>
                                <TableCell align="center">{row.Value}</TableCell>
                                <TableCell align="center">{row.Status}</TableCell>
                                <TableCell align="center">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{ backgroundColor: "#e4e4e4" }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}