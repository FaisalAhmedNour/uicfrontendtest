import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MobilePayment from './MobilePayment/MobilePayment';
import { AuthContext } from '../Providers/AuthProvider';

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

export default function BasicTabs() {
    const { paymentInfo } = React.useContext(AuthContext);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='bg-[#dad2d2] py-10'>
            <div className='max-w-5xl mx-auto pt-10 bg-white rounded-3xl px-10'>
                <h1 className="text-4xl font-bold text-center">Payment</h1>
                <p className="text-center my-4">To activate your selected services please payment</p>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Mobile Pay" {...a11yProps(0)} />
                            <Tab label="Card Pay" disabled {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <MobilePayment
                            paymentInfo={paymentInfo}
                        ></MobilePayment>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                </Box>
            </div>
        </div>
    );
}