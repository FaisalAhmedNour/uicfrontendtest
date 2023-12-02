
import {
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    FormGroup,
    Checkbox,
    MenuItem,
    Select,
    InputLabel
} from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BuyersListTable from "../BuyerSetup/BuyersListTable/BuyersListTable";

const ProcessSetup = () => {

    const { getCookie } = useContext(AuthContext);

    const token = getCookie('auth_token');
    console.log(token);

    const [isActive, setIsActive] = useState("No")

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.service_name.value;
        const caption = e.target.caption.value;
        const remarks = e.target.remarks.value;
        const service_type = "test";
        console.log(name, caption, service_type, isActive);

        fetch('http://api.uicommercial.com/api/create_service', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Authorization': token
            },
            body: JSON.stringify({ name, caption, service_type, is_active: isActive, remarks })
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <from className="grid grid-cols-5 gap-5">
                <div onSubmit={handleSubmit} className="col-span-3 space-y-5">
                    <div className="flex justify-between">
                        <p className="w-[33%] my-auto font-semibold">Service Name* : </p>
                        <FormControl sx={{ width: "66%" }}>
                            <InputLabel id="demo-simple-select-label">Service Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Service Name"
                            // value={selectedCountry}
                            // onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                {/* {
                                countries.map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)
                            } */}
                                <MenuItem>OEMS</MenuItem>
                                <MenuItem>OEMS2</MenuItem>
                                <MenuItem>OEMS3</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] pr-3 my-auto font-semibold">Process Name : </p>
                        <TextField
                            name="process_name"
                            label="Write process name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] pr-3 my-auto font-semibold">3rd party domain : </p>
                        <TextField
                            name="domain"
                            label="paste domain"
                            type="text"
                            variant="outlined"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex gap-2">
                        <p className="w-[33%] pr-3 my-auto font-semibold">Is Active : </p>
                        <div className="w-[66%] grid grid-cols-3 items-center">
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel onChange={(e) => setIsActive(e.target.value)} value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel onChange={(e) => setIsActive(e.target.value)} value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-5">
                        <Button variant="contained" sx={{ backgroundColor: "#546e7a" }}>Clear</Button>
                        <Button type="submit" variant="contained" color="success">Add</Button>
                        <Button variant="contained" color="error">Close</Button>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-3 items-center">
                        <p className="font-semibold">Default Quantity : </p>
                        <div className="col-span-2">
                            <TextField
                                fullWidth
                                name="default_quantity"
                                label="Default Quantity"
                                type="text"
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
            </from>
            <div className="mt-10">
                <BuyersListTable></BuyersListTable>
            </div>
        </div>
    );
};

export default ProcessSetup;