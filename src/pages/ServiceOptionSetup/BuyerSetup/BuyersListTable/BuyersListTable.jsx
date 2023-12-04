import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getBuyers } from '../../../../Services/AuthService';   

export default function BuyersListTable() {

    const [buyers, setBuyers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getBuyers();
                setBuyers(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

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
                    {/* {buyers && buyers.map((row) => (
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
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}