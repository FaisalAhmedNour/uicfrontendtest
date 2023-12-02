import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    UiId,
    UserFileName,
    DocName,
    CreateDate,
    Status,
) {
    return {
        UiId,
        UserFileName,
        DocName,
        CreateDate,
        Status,
    };
}

const rows = [
    createData('1001', "reza_21_10_22_01", "reza_21_10_22_01.xml", "21-Oct-22", "Incomplete"),
    createData('1001', "reza_21_10_22_01", "reza_21_10_22_01.xml", "21-Oct-22", "Incomplete"),
    createData('1001', "reza_21_10_22_01", "reza_21_10_22_01.xml", "21-Oct-22", "Incomplete"),
];

const ExpDownloadTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, borderTop: 2, borderColor: "#a19090", marginTop: 2 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><p className='font-semibold'>File Id</p></TableCell>
                        <TableCell align="left"><p className='font-semibold'>Ui Id</p></TableCell>
                        <TableCell align="left"><p className='font-semibold'>User File Name</p></TableCell>
                        <TableCell align="center"><p className='font-semibold'>Doc Name</p></TableCell>
                        <TableCell align="center"><p className='font-semibold'>Status</p></TableCell>
                        <TableCell align="center"><p className='font-semibold'>Action</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.UiId}</TableCell>
                            <TableCell align="left">{row.UserFileName}</TableCell>
                            <TableCell align="left">{row.DocName}</TableCell>
                            <TableCell align="center">{row.CreateDate}</TableCell>
                            <TableCell align="center">{row.Status}</TableCell>
                            <TableCell align="center">Download</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ExpDownloadTable;