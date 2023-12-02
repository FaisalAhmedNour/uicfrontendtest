import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@mui/material';
import SingleExpIssue from './SingleExpIssue/SingleExpIssue';
import { useState } from 'react';

const EXPIssuance = () => {

    const [IsSingleExp, setIsSingleExp] = useState('single')

    return (
        <div>
            <div>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="single"
                        name="singleCheck"
                        onChange={(e) => setIsSingleExp(e.target.value)}
                        row
                    >
                        <FormControlLabel value="single" control={<Radio />} label="Single Exp issue" />
                        <FormControlLabel value="batch" control={<Radio />} label="Batch Exp issue" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={`${IsSingleExp === 'single' ? '' : 'hidden'}`}>
                <SingleExpIssue></SingleExpIssue>
            </div>
        </div>
    );
};

export default EXPIssuance;