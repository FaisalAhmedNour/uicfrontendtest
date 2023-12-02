import { 
    Box, 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Modal, 
    Typography 
} from "@mui/material";
import { useState } from "react";
import SingleProcess from "../SingleProcess/SingleProcess";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '80vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SelectPeriodAndProcess = ({ singleService, selectedServices, setSelectedServices, handleSetTotal }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        handleSetTotal();
    };

    const handleServiceSelect = (e) => {
        const selectedService = e.target.value;
        if (selectedServices.some(service => service.serviceName === selectedService)) {
            setSelectedServices(selectedServices.filter((service) => service.serviceName !== selectedService))
        }
    }

    return (
        <div>
            <FormControlLabel
                checked={selectedServices.some((selectedService) => selectedService.serviceName == singleService.name)}
                onClick={handleOpen}
                onChange={handleServiceSelect}
                value={`${singleService.name}`}
                control={<Checkbox />}
                label={singleService.name}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Processes fo {singleService.name}:
                    </Typography>
                    {
                        singleService.process.map((process, index) => <SingleProcess
                            key={index}
                            no={index}
                            process={process}
                            singleService={singleService}
                            selectedServices={selectedServices}
                            setSelectedServices={setSelectedServices}
                        ></SingleProcess>
                        )}
                    <div className="mt-5">
                        <Button fullWidth onClick={handleClose} variant="contained" color="success">Confirm</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default SelectPeriodAndProcess;