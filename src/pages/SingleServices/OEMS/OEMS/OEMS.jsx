import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DataPreparation from '../DataPreparation/DataPreparation';
import EXPIssuance from '../EXPIssuance/EXPIssuance';
import EXPDownload from '../EXPDownload/EXPDownload';

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

const OEMS = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Data Preparation" {...a11yProps(0)} />
                        <Tab label="EXP Issuance" {...a11yProps(1)} />
                        <Tab label="EXP Download" {...a11yProps(2)} />
                        <Tab label="EXP Correction" {...a11yProps(3)} />
                        <Tab label="Duplicate Reporting" {...a11yProps(4)} />
                        <Tab label="Reports" {...a11yProps(5)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <DataPreparation></DataPreparation>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <EXPIssuance></EXPIssuance>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <EXPDownload></EXPDownload>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    EXP Correction
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    Duplicate Reporting
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    Reports
                </CustomTabPanel>
            </Box>
        </div>
    );
};

export default OEMS;