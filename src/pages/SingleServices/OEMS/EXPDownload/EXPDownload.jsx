import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@mui/material';
import { useState } from 'react';
import UiExpDownload from './UiExpDownload/UiExpDownload';

const EXPDownload = () => {

    const [whichExp, setWhichExp] = useState('ui_exp')

    return (
        <div>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="ui_exp"
                    name="which_exp"
                    onClick={(e) => setWhichExp(e.target.value)}
                    row
                >
                    <FormControlLabel value="ui_exp" control={<Radio />} label="Ui Exp(s)" />
                    <FormControlLabel value="other_exp" control={<Radio />} label="Others Exp(s)" />
                </RadioGroup>
            </FormControl>
            <div className={`${whichExp === 'ui_exp' ? '' : 'hidden'}`}>
                <UiExpDownload></UiExpDownload>
            </div>
        </div>
    );
};

export default EXPDownload;