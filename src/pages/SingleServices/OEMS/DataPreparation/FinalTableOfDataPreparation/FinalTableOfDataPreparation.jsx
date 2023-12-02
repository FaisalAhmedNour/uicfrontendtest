import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination
} from "@mui/material";
import { useState } from "react";

const FinalTableOfDataPreparation = ({ fileData, headers }) => {

    console.log(fileData);
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
        <Paper sx={{ width: '100%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, borderTop: 1 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((header, index) => <TableCell key={index} align="center" >
                                    <p className="font-semibold">{header}</p>
                                </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            fileData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                // console.log(row)
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {
                                        headers.map((header, index) => <TableCell key={index} align="center" component="th" scope="row"><p className={`${headers[index]}`}>{row[headers[index]]}</p></TableCell>)
                                    }
                                </TableRow>
                            ))
                        }
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
};

export default FinalTableOfDataPreparation;