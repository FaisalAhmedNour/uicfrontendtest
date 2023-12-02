import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    Checkbox, 
    FormControl, 
    FormControlLabel, 
    InputLabel, 
    MenuItem, 
    Select, 
    Typography 
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const buyers = ["H&M", "M&S", "Mark", "Komar", "D&G"];

const SingleProcess = ({ no, process, singleService, selectedServices, setSelectedServices }) => {

    const [selectedBuyers, setSelectedBuyers] = useState([])

    const handleBuyerChange = (process, buyer) => {
        if (selectedBuyers.includes(buyer)) {
            setSelectedBuyers(selectedBuyers.filter((g) => g !== buyer));
            setSelectedServices(selectedServices.filter((g) => g.buyerName !== buyer && g.process !== process))
        }
        else {
            setSelectedBuyers([...selectedBuyers, buyer]);
        }
    };

    const handleSetPeriod = (buyerName, periodTime, useLimit) => {
        if (selectedBuyers.includes(buyerName)) {
            if (selectedServices.some(service => service.buyerName === buyerName && service.processName === process.processName)) {
                const restBuyers = selectedServices.filter(service => service.buyerName !== buyerName && service.processName === process.processName)
                setSelectedServices([...restBuyers, { serviceName: singleService.name, processName: process.processName, buyerName, useLimit, periodTime, rate: process.price, total: periodTime * process.price, extended: false }])
            }
            else {
                setSelectedServices([...selectedServices, { serviceName: singleService.name, processName: process.processName, buyerName, useLimit, periodTime, rate: process.price, total: periodTime * process.price, extended: false }])
            }
        }
    }
 
    return (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        display: 'flex',
                        alignContent: 'center',

                    }}
                >
                    <Typography variant="h6">{no + 1}. {process.processName}</Typography>
                    <Typography sx={{ color: 'text.secondary', ml: 5 }}>*{process.price} BDT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {buyers.map((buyer, index) => <div
                        key={index}
                        className="flex justify-between mt-2"
                    >
                        <div className="flex-1">
                            <FormControlLabel
                                checked={selectedBuyers.includes(`${buyer}`)}
                                onChange={(e) => handleBuyerChange(process.processName, e.target.value)}
                                control={<Checkbox />}
                                value={`${buyer}`}
                                label={buyer}
                            />
                        </div>
                        <div className="flex-1">
                            <Typography variant="h6">{process.useLimit} <span className="text-sm">times</span></Typography>
                        </div>
                        <div className="flex-1">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Period</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="release_month"
                                    onChange={(e) => handleSetPeriod(buyer, e.target.value, process.useLimit)}
                                    label="Period"
                                    size="small"
                                >
                                    <MenuItem value='1'>1 Month</MenuItem>
                                    <MenuItem value='4'>4 Month</MenuItem>
                                    <MenuItem value='12'>12 Month</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>)}
                </AccordionDetails>
            </Accordion>

        </Typography>
    );
};

export default SingleProcess;