import { FormControl, MenuItem, Select } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const SetHeader = ({ headerOfCol, headers }) => {

    const { headerSet, setHeaderSet} = useContext(AuthContext)
    const [header, setHeader] = useState('')
    const handleChange = (head) => {
        setHeader(head);
        if (headerSet[headerOfCol]){
            setHeaderSet((prevState) => ({
                ...prevState,
                [headerOfCol]: head,
            }));
        }
        else{
            setHeaderSet({ ...headerSet, [headerOfCol]: head })
        }
    }

    return (
        <FormControl sx={{width: "200px"}}>
            {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={header}
                // label="select"
                size="small"
                onChange={(e) => handleChange(e.target.value)}
            >
                {
                    headers.map((header, index) => <MenuItem key={index} value={header}>{header}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
};

export default SetHeader;