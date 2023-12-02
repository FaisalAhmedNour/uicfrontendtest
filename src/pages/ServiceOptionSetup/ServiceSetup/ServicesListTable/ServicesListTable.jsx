import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import useServices from '../../../../Hooks/useServices';

// function createData(
//     buyerName,
//     shortCode,
//     Country,
//     isActive
// ) {
//     return {
//         buyerName,
//         shortCode,
//         Country,
//         isActive,
//     };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ServicesListTable() {

    const { getCookie } = useContext(AuthContext);

    const token = getCookie('auth_token');

    const [services, isLoading, refetch] = useServices(token)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, overflow: "hidden" }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold'>SI</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold'>Service Form Name</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold text-center'>Service Caption</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold text-center'>Buyer Name</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold text-center'>Time Period</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold text-center'>Is Active</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        >
                            <p className='font-semibold text-center'>Action</p>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services && services.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell><p className='text-center'>{row.name}</p></TableCell>
                            <TableCell><p className='text-center'>{row.caption}</p></TableCell>
                            <TableCell><p className='text-center'>{row.isActive}</p></TableCell>
                            <TableCell>
                                <p className='text-center'>delete edit</p>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}