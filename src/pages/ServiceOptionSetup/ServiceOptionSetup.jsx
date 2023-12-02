import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServiceSetup from './ServiceSetup/ServiceSetup';
import BuyerSetup from './BuyerSetup/BuyerSetup';
import ProcessSetup from './ProcessSetup/ProcessSetup';
import ServiceRateSetup from './ServiceRateSetup/ServiceRateSetup';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ServiceOptionSetup = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='mt-5 mb-10 mx-5 overflow-y-scroll'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Service Setup" {...a11yProps(0)} />
                    <Tab label="Buyer Setup" {...a11yProps(1)} />
                    <Tab label="Process Setup" {...a11yProps(2)} />
                    <Tab label="Service Rate Setup" {...a11yProps(3)} />
                    <Tab label="Service Rate History" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ServiceSetup></ServiceSetup>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <BuyerSetup></BuyerSetup>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ProcessSetup></ProcessSetup>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <ServiceRateSetup></ServiceRateSetup>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Service Rate History
            </CustomTabPanel>
        </div>
    );
};

export default ServiceOptionSetup;