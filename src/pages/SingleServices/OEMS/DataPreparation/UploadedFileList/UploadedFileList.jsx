import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Button from '@mui/material/Button';
// import { Box, Button, Modal, TextField, Typography } from "@mui/material";


export default function UploadedFileList({ allUploadedFiles }) {

    return (
        <div>
            <h3 className='text-center text-xl mt-10 mb-5 font-semibold text-[#3a3737]'>Uploaded File List</h3>
            <TableContainer component={Paper} sx={{ borderTop: 1 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="">Uploaded Id</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">File Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">Upload Type</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">Upload Date & Time</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">Quantity of EXP</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">Action</TableCell>
                            <TableCell sx={{ fontWeight: 600, width: 5 }} align="center">Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUploadedFiles.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.uploadId}
                                </TableCell>
                                <TableCell align="center">{row.fileName}</TableCell>
                                <TableCell align="center">{row.uploadType}</TableCell>
                                <TableCell align="center">{row.dateAndTime}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="center">{row.isSaved ? 'Saved' : "Unsaved"}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleEdit(row)} aria-label="edit">
                                        <BorderColorIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    {/* {row.isSaved ? 'Saved' : "Unsaved"} */}
                                    <Button disabled={row.isSaved} variant="contained">Save</Button>
                                </TableCell>
                                {/* <Modal
                                    open={open2}
                                    onClose={handleClose2}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center" }}>
                                            Validate your uploaded data for next level
                                        </Typography>
                                        <div className="flex justify-between mx-20">
                                            <div className="flex justify-between items-center mb-3 relative">
                                                <p className="text-start text-lg font-semibold">ID : </p>
                                                <TextField sx={{ marginLeft: 1 }} size="small" id="outlined-search" name="number" value={uploadId} type="text" />
                                            </div>
                                            <div className="flex justify-between items-center mb-3 relative">
                                                <p className="text-start text-lg font-semibold">Date : </p>
                                                <TextField sx={{ marginLeft: 1 }} size="small" id="outlined-search" name="text" value={currentDateTime} type="text" />
                                            </div>
                                        </div>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <FinalTableOfDataPreparation
                                                fileData={fileData}
                                                headers={headers}
                                            ></FinalTableOfDataPreparation>
                                        </Typography>
                                        <div className="text-center mt-5">
                                            <Button onClick={handleClose2} variant="contained" size="small" color="success" >Upload</Button>
                                        </div>
                                    </Box>
                                </Modal> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}