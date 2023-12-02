import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import useBuyers from '../../../../Hooks/useBuyers';

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

export default function BuyersListTable() {

    const { getCookie } = useContext(AuthContext);

    const token = getCookie('auth_token');

    const [buyers] = useBuyers(token)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, overflow: "hidden" }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        ><p className='font-semibold'>Buyer Name</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        ><p className='font-semibold text-center'>Short Code</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        ><p className='font-semibold text-center'>Country</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        ><p className='font-semibold text-center'>Is Active</p>
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#a6a6a6" }}
                        ><p className='font-semibold text-center'>Action</p>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {buyers && buyers.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell><p className='text-center'>{row.short_code}</p></TableCell>
                            <TableCell><p className='text-center'>{row.country}</p></TableCell>
                            <TableCell><p className='text-center'>{row.is_active}</p></TableCell>
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