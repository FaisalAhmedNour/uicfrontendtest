import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useContext, useRef, useState } from "react";
import * as XLSX from 'xlsx';
import UploadedFileList from "./UploadedFileList/UploadedFileList";
import SetTableHeading from "./SetTableHeading/SetTableHeading";
import { AuthContext } from "../../../Providers/AuthProvider";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import FinalTableOfDataPreparation from "./FinalTableOfDataPreparation/FinalTableOfDataPreparation";
import { v4 as uuidv4 } from 'uuid';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    maxHeight: '80vh',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const headers = [
    "SL.No",
    "Master LC/Contract No",
    "Commodity Code",
    "Incoterm Used",
    "Country Code",
    "Unit",
    "Quantity",
    "Invoice No",
    "Invoice Date",
    "Invoice Amount",
    "CMT Amount",
    "Frieght",
    "Insurance",
    "Other Charges",
    "Name of Carrier/Vessel",
    "Destination Port",
    "Transport Doc Type",
    "Transport Doc No",
    "Transport Doc Date",
    "Port of Shipment",
    "Sector",
    "Signatory",
    "Remarks"
];

const standardFormatHeaders = [
    {"SL.No": ""},
    {"Master LC/Contract No": ""},
    {"Commodity Code": ""},
    {"Incoterm Used": ""},
    {"Country Code": ""},
    {"Unit": ""},
    {"Quantity": ""},
    {"Invoice No": ""},
    {"Invoice Date": ""},
    {"Invoice Amount": ""},
    {"CMT Amount": ""},
    {"Frieght": ""},
    {"Insurance": ""},
    {"Other Charges": ""},
    {"Name of Carrier/Vessel": ""},
    {"Destination Port": ""},
    {"Transport Doc Type": ""},
    {"Transport Doc No": ""},
    {"Transport Doc Date": ""},
    {"Port of Shipment": ""},
    {"Sector": ""},
    {"Signatory": ""},
    {"Remarks": ""},
];

const DataPreparation = () => {
    const { headerSet } = useContext(AuthContext)

    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileData, setFileData] = useState([]);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [headersOfTheCols, setHeadersOfTheCols] = useState([])
    const [uploadId, setUploadId] = useState('');
    const [allUploadedFiles, setAllUploadedFiles] = useState([]);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const buttonRef = useRef(null);

    const handleDivClick = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    const date = () => {
        const date = String(new Date());
        console.log(date);
        const splitedDate = date?.split(' ');
        const slicedDate = splitedDate.slice(1, 5);
        const currentDateTime = slicedDate.join(' ');
        console.log(currentDateTime);
        setCurrentDateTime(currentDateTime);
    }
    
    // const handleCancel = () => {
    //     setFilePath('');
    //     setFileName('');
    //     setFile(null);
    // }

    const handleFileNameChange = (event) => {
        setFileName(event.target.value);
    };

    const handleFileUpload1 = (e) => {
        const file = e.target.files[0];

        setFilePath(e.target.value);
        setFileName(file.name);
        setFile(file);
        setUploadId(uuidv4());
        date()
        console.log(currentDateTime);
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const dataFromSheet = XLSX.utils.sheet_to_json(sheet);

            setFileData(dataFromSheet);
        };

        reader.readAsBinaryString(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setFile(files[0]);
        setFileName(files[0].name);
        setUploadId(uuidv4());
        date()

        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const dataFromSheet = XLSX.utils.sheet_to_json(sheet);

            setFileData(dataFromSheet);
            setHeadersOfTheCols(Object.keys(dataFromSheet[0]))
            handleOpen1();
        };

        reader.readAsBinaryString(files[0]);
    };

    const handleFileUpload2 = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFile(file);
        setFileName(file.name);
        setUploadId(uuidv4());
        date()
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const dataFromSheet = XLSX.utils.sheet_to_json(sheet);

            setFileData(dataFromSheet);
            setHeadersOfTheCols(Object.keys(dataFromSheet[0]))
            handleOpen1();
        };

        reader.readAsBinaryString(file);
    };

    const changeKeys = (obj) => {
        const newObj = {};
        for (const oldKey in obj) {
            if (headerSet[oldKey]) {
                newObj[headerSet[oldKey]] = obj[oldKey];
            } else {
                newObj[oldKey] = obj[oldKey];
            }
        }
        return newObj;
    };

    const handleOpen1 = () => {
        setOpen1(true)
    };

    const handleClose1 = () => {
        setOpen1(false)
        setFileData(fileData.map(changeKeys))
        setOpen2(true)
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleStoreTemporary = (type = "User Worksheet") => {
        const uploadedFIleData = {
            uploadId: uploadId,
            fileName: fileName,
            uploadType: type,
            dateAndTime: currentDateTime,
            quantity: fileData.length,
            data: fileData,
            isSaved: false
        }
        setAllUploadedFiles([...allUploadedFiles, uploadedFIleData])
        setFilePath('')
        setFileName('')
    }

    const handleClose2 = () => {
        setOpen2(false)
        handleStoreTemporary()
    };

    const handleExport = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(standardFormatHeaders);
        XLSX.utils.book_append_sheet(wb, ws, "sheet1");
        XLSX.writeFile(wb, "File1.xlsx");
    }

    // console.log(allUploadedFiles);
    // const handleFileUpload = () => {
    //     const formData = new FormData();
    //     formData.append('fileInput', file);
    //     console.log(formData);
    //     fetch('http://your-server/upload', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             // Handle the server response
    //         })
    //         .catch(error => console.error('Error:', error));
    // };

    return (
        <div>
            <div className="flex gap-3">
                <div>
                    <p className="font-semibold">Note: </p>
                </div>
                <div>
                    <p>Though system have no records about invoice. UiCommercial offer you to download the standard format of Exp and fill up the required filed data by using copy paste process. Once you have download the format & filled up the data then you are ready for uploading the file in the UiCommercial portal.</p>
                </div>
            </div>
            <div className="flex mt-8">
                {/* standard format upload */}
                <div className="space-y-2 mx-10 flex-1">
                    <p onClick={handleExport} className="flex-1 cursor-pointer hover:underline text-[#0180df] mb-4">Download Format</p>
                    <div className="flex items-center gap-5">
                        <p className="w-20">File path: </p>
                        <TextField
                            id="outlined-basic"
                            value={filePath}
                            size="small"
                            variant="outlined"
                            disabled
                        />
                        <Button component="label" accept=".xlsx" variant="contained" size="small" startIcon={<CloudUploadIcon />}>
                            Select file
                            <VisuallyHiddenInput size="small" type="file" onChange={handleFileUpload1} />
                        </Button>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="w-20">File name: </p>
                        <TextField
                            value={fileName}
                            onChange={handleFileNameChange}
                            size="small"
                            variant="outlined"
                            name="file_name"
                        />
                    </div>
                    <div className="flex gap-7 ms-24 ps-1">
                        <Button onClick={() => handleStoreTemporary("Format upload")} variant="contained" size="small" color="success">Upload</Button>
                        <Button variant="contained" size="small" color="error">Cancel</Button>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="flex-1 font-semibold text-[#584848]">OR</p>
                </div>
                {/* upload as it is */}
                <div className="flex-1">
                    <p className="text-center mb-4 text-[#774141]">Upload Your Worksheet as it is which you are using.</p>
                    <div className=" flex justify-center">
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onClick={handleDivClick}
                            className="space-y-1 cursor-pointer flex flex-col"
                        >
                            <div className="bg-[#ece5e5] w-full h-28 border-2 rounded-lg flex justify-center items-center">
                                <IconButton aria-label="add">
                                    <AddIcon />
                                </IconButton>
                            </div>
                            <Button component="label" accept=".xlsx" variant="contained" size="small" startIcon={<CloudUploadIcon />}>
                                Upload file
                            </Button>
                            <VisuallyHiddenInput size="small" type="file" ref={buttonRef} onChange={handleFileUpload2} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal1 */}
            <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" align="center">
                        Please match your headings with ours to perform the action properly.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <SetTableHeading
                            fileData={fileData}
                            headersOfTheCols={headersOfTheCols}
                            headers={headers}
                        ></SetTableHeading>
                    </Typography>
                    <div className="text-center mt-5">
                        <Button onClick={handleClose1} variant="contained" size="small" color="success" >OK</Button>
                    </div>
                </Box>
            </Modal>
            {/* Modal2 */}
            <Modal
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
            </Modal>
            <div>
                <UploadedFileList
                    allUploadedFiles={allUploadedFiles}
                ></UploadedFileList>
            </div>
        </div>
    );
};

export default DataPreparation;