import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getServices } from '../../../../Services/AuthService';

export default function ServicesListTable() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getServices();
                setServices(result.data);
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
                    {/* {services && services.map((row) => (
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
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}