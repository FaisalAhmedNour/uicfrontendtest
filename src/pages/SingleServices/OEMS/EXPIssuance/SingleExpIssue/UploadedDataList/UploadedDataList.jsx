import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';

function createData(
    FileId,
    FileName,
    SCorLCNo,
    ContactLCValue,
    UsedValue,
    RemainValue,
    ShipmentDateCCD,
    InvoiceNo,
    PONo,
    Quantity,
    Value,
    CreateDate,
    Status,
) {
    return {
        FileId,
        FileName,
        SCorLCNo,
        ContactLCValue,
        UsedValue,
        RemainValue,
        ShipmentDateCCD,
        InvoiceNo,
        PONo,
        Quantity,
        Value,
        CreateDate,
        Status,
    };
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const rows = [
    createData('000000001', "reza_21_10_22_01", "Abc/123/009-inv", 1000, 800, 220, "17-Nov-23", "123Abc", "PO-90866", 100, 110, "21-Oct-22", "Complete"),
    createData('000000002', "reza_21_10_22_02", "Abc/123/010-inv", 1001, 801, 300, "18-Nov-23", "123Abcd", "PO-90867", 101, 111, "21-Oct-23", "Incomplete"),
    createData('000000003', "reza_21_10_22_03", "Abc/123/011-inv", 1002, 802, 400, "19-Nov-23", "123Abce", "PO-90868", 102, 112, "21-Oct-24", "Incomplete"),
];

export default function UploadedDataList() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedFiles, setSelectedFiles] = useState([])
    const [allIds, setAllIds] = useState([])
    const [files, setFiles] = useState(rows)

    // console.log(rows);

    useEffect(() => {
        const ids = files.map(obj => obj.FileId);
        console.log(rows, ids);
        setAllIds([...ids]);
    }, [files])

    const handleSelectFile = (fileId) => {
        if (selectedFiles.includes(fileId)) {
            setSelectedFiles(selectedFiles.filter(id => id !== fileId))
        }
        else {
            setSelectedFiles([...selectedFiles, fileId])
        }
    }
    // console.log(selectedFiles);

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        return arr1.every(element => arr2.includes(element));
    }

    const fileSearchField = (e) => {
        e.preventDefault();
        const searchTerm = e.target.item.value;
        if (searchTerm === '') {
            setFiles(rows);
        }
        else {
            setFiles(rows.filter((item) => {
                return Object.values(item).some((value) =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                );
            }))
        }
    }

    const handleAllSelectedFile = () => {
        console.log(allIds, arraysEqual(allIds, selectedFiles));
        if (arraysEqual(allIds, selectedFiles) && selectedFiles.length !== 0) {
            console.log("1");
            setSelectedFiles([])
        }
        else {
            console.log("2");
            setSelectedFiles([...allIds])
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }} >
            <div>
                <form
                    onSubmit={fileSearchField}
                    className="flex justify-between items-center mx-5"
                >
                    <p className='font-semibold text-xl text-center text-[#444141]'>Uploaded data list</p>
                    <div className='flex items-center'>
                        <div className='flex items-center relative'>
                            <TextField
                                sx={{ margin: 1 }}
                                size="small"
                                name="item"
                                type="text"
                                label="Search"
                                onChange={fileSearchField}
                            />
                            <SearchIcon
                                sx={{
                                    position: 'absolute',
                                    right: 10,
                                    color: "#a19090"
                                }}
                            />
                        </div>
                        <div className='text-[#472525]'>
                            Selected&#40;<span>{selectedFiles.length}</span>&#41;
                        </div>
                    </div>
                </form>
            </div >
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
                                <p className='w-24 font-semibold'>Uploaded Id</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>File Name</p>
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
                                <p className='font-semibold'>Contact L/C Value</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Used Value</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Remain Value</p>
                            </TableCell>
                            <TableCell
                                sx={{ backgroundColor: "#a6a6a6" }}
                                align="center"
                            >
                                <p className='font-semibold'>Shipment Date/CCD</p>
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
                                <p className='font-semibold'>PO No</p>
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
                                <p className='font-semibold'>Create Date</p>
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
                                <p className='w-20 font-semibold flex items-center'>
                                    Action
                                    <Checkbox
                                        onClick={handleAllSelectedFile}
                                        checked={arraysEqual(allIds, selectedFiles) && selectedFiles.length !== 0}
                                        {...label}
                                    />
                                </p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.FileId}</TableCell>
                                <TableCell align="center">{row.FileName}</TableCell>
                                <TableCell align="center">{row.SCorLCNo}</TableCell>
                                <TableCell align="center">{row.ContactLCValue}</TableCell>
                                <TableCell align="center">{row.UsedValue}</TableCell>
                                <TableCell align="center">{row.RemainValue}</TableCell>
                                <TableCell align="center">{row.ShipmentDateCCD}</TableCell>
                                <TableCell align="center">{row.InvoiceNo}</TableCell>
                                <TableCell align="center">{row.PONo}</TableCell>
                                <TableCell align="center">{row.Quantity}</TableCell>
                                <TableCell align="center">{row.Value}</TableCell>
                                <TableCell align="center">{row.CreateDate}</TableCell>
                                <TableCell align="center">{row.Status}</TableCell>
                                <TableCell align="center">
                                    <Checkbox
                                        checked={selectedFiles.includes(row.FileId)}
                                        onClick={() => handleSelectFile(row.FileId)}
                                        {...label}
                                    />
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
            <div>
                <form
                    // onSubmit={fileSearchField}
                    className="flex justify-end items-center mr-5"
                >
                    <p className="text-start text-lg font-medium">Insert a File Name : </p>
                    <TextField
                        sx={{ margin: 1 }}
                        size="small"
                        name="insert_a_file_name"
                        type="text"
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        size='small'
                    >Issue EXP</Button>
                </form>
            </div>
        </Paper >
    );
}