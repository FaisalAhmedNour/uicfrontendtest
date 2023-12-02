import {
    TextField,
    Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IssuedEXPFileList from './IssuedEXPFileList/IssuedEXPFileList';
import IssuedEXPDataList from './IssuedEXPDataList/IssuedEXPDataList';
import UploadedDataList from './UploadedDataList/UploadedDataList';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const SingleExpIssue = () => {

    const [isInformationUpdated, SetIsInformationUpdated] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const invNo = e.target.inv_no.value;
        const PoNo = e.target.Po_No.value;
        const SCorLCNo = e.target.SC_or_LC_No.value;
        const fromDate = e.target.from_date.value;
        const toDate = e.target.to_date.value;
        // const invNo = e.target.inv_no.value;
        console.log(invNo, PoNo, SCorLCNo, fromDate, toDate);
    }

    return (
        <div className='-mt-10'>
            <div className='flex-grow text-center'>
                <Button onClick={() => SetIsInformationUpdated(true)} variant="contained">Update Information</Button>
            </div>
            <div className='flex w-full gap-5 mt-12'>
                <div className='w-[30%] space-y-1 border-2 p-3 relative'>
                    <p className='bg-[white] px-1 absolute -top-3 text-sm text-[#3d3b3b]'>Waiting for EXP issuance</p>
                    <div className="flex justify-between items-center">
                        <p className="text-start text-lg font-medium">No of Inv : </p>
                        <TextField disabled={!isInformationUpdated} sx={{ marginLeft: 1 }} size="small" name="no_of_inv" type="number" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-start text-lg font-medium">Total value : </p>
                        <TextField disabled={!isInformationUpdated} sx={{ marginLeft: 1 }} size="small" name="total_value" type="number" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-start text-lg font-medium">Gmt Qty: </p>
                        <TextField disabled={!isInformationUpdated} sx={{ marginLeft: 1 }} size="small" name="gmt_qty" type="number" />
                    </div>
                </div>
                <form onSubmit={handleSearch} className='w-[70%] space-y-1 border-2 p-3 relative flex gap-4'>
                    <p className='bg-[white] px-1 absolute -top-3 text-sm text-[#3d3b3b]'>Search Parameter</p>
                    <div className='space-y-3 w-[40%] flex flex-col justify-evenly'>
                        <div className="flex justify-between items-center">
                            <p className="text-start text-lg font-medium w-28">Inv No : </p>
                            <TextField
                                fullWidth
                                disabled={!isInformationUpdated}
                                sx={{ marginLeft: 1 }}
                                size="small"
                                name="inv_no"
                                type="text"
                                multiline
                                maxRows={2}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-start text-lg font-medium  w-28">Po No : </p>
                            <TextField
                                fullWidth
                                disabled={!isInformationUpdated}
                                sx={{ marginLeft: 1 }}
                                size="small"
                                name="Po_No"
                                type="text"
                                multiline
                                maxRows={2}
                            />
                        </div>
                    </div>
                    <div className='space-y-2 w-[45%]'>
                        <div className="flex items-center">
                            <p className="text-start w-52 text-lg font-medium">S/C or L/C No : </p>
                            <TextField
                            fullWidth
                                disabled={!isInformationUpdated}
                                sx={{ marginLeft: 1 }}
                                size="small"
                                name="SC_or_LC_No"
                                type="text"
                                multiline
                                maxRows={2}
                            />
                        </div>
                        <div className="flex items-center">
                            <p className="text-start w-32 text-lg font-medium">From Date : </p>
                            <TextField disabled={!isInformationUpdated} sx={{ marginLeft: 1 }} size="small" name="from_date" type="date" />
                        </div>
                        <div className="flex items-center">
                            <p className="text-start w-32 text-lg font-medium">To Date : </p>
                            <TextField disabled={!isInformationUpdated} sx={{ marginLeft: 1 }} size="small" name="to_date" type="date" />
                        </div>
                    </div>
                    <div className='relative'>
                        <Button startIcon={<CloseIcon />} variant="contained" color='error' size="small" sx={{ position: "absolute", bottom: 36, left: -5 }}>
                            Error
                        </Button>
                        <Button type='submit' startIcon={<SearchIcon />} variant="contained" color='success' size="small" sx={{ position: "absolute", bottom: 0, left: -8 }}>
                            Search
                        </Button>
                    </div>
                </form>
            </div>
            <div className='mt-10'>
                <UploadedDataList></UploadedDataList>
            </div>
            <div className='flex mt-28 gap-5'>
                <div className='flex-1'>
                    <p className='font-semibold text-md text-[#444141] ms-1'>Issued EXP File List</p>
                    <IssuedEXPFileList></IssuedEXPFileList>
                </div>
                <div className='flex-1'>
                    <p className='font-semibold text-md text-[#444141] ms-1'>Issued EXP Data List</p>
                    <IssuedEXPDataList></IssuedEXPDataList>
                </div>
            </div>
        </div>
    );
};

export default SingleExpIssue;