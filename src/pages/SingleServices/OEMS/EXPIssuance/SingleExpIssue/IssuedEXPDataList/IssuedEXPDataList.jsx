import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

function createData(
    IssuedId,
    UploadId,
    EXPSerial,
    EXPNo,
    EXPYear,
    ADSCode
) {
    return {
        IssuedId,
        UploadId,
        EXPSerial,
        EXPNo,
        EXPYear,
        ADSCode
    };
}

const rows = [
    createData('Iss-000000001', "Upl-000000008", "035277", "000014710352772023", 2023, "00001471"),
    createData('Iss-000000001', "Upl-000000008", "035277", "000014710352772023", 2023, "00001471"),
    createData('Iss-000000001', "Upl-000000008", "035277", "000014710352772023", 2023, "00001471"),
];

export default function IssuedEXPDataList() {

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
                                <p className='font-semibold'>Upload Id</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>EXP Serial</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>EXP No.</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>EXP Year</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>ADS Code</p>
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
                                <TableCell align="center">{row.UploadId}</TableCell>
                                <TableCell align="center">{row.EXPSerial}</TableCell>
                                <TableCell align="center">{row.EXPNo}</TableCell>
                                <TableCell align="center">{row.EXPYear}</TableCell>
                                <TableCell align="center">{row.ADSCode}</TableCell>
                                {/* <TableCell align="center">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell> */}
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