import {
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    FormGroup,
    Checkbox
} from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ServicesListTable from "./ServicesListTable/ServicesListTable";

const ServiceSetup = () => {

    const { getCookie } = useContext(AuthContext);

    const token = getCookie('auth_token');

    const [isActive, setIsActive] = useState("No")

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.service_name.value;
        const caption = e.target.caption.value;
        const remarks = e.target.remarks.value;
        const service_type = "test";
        // console.log(name, caption, service_type,isActive);

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
            <div className="grid grid-cols-3">
                <form onSubmit={handleSubmit} className="col-span-2 space-y-5">
                    <div className="flex justify-between">
                        <p className="w-[33%] pr-3 my-auto font-semibold">Service Form Name* : </p>
                        <TextField
                            name="service_name"
                            label="Write service name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] pr-3 my-auto font-semibold">Service Caption* : </p>
                        <TextField
                            name="caption"
                            label="Write service caption"
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
                            <div className=" col-span-2">
                                <TextField
                                    fullWidth
                                    name="remarks"
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-5">
                        <Button variant="contained" sx={{ backgroundColor: "#546e7a" }}>Clear</Button>
                        <Button type="submit" variant="contained" color="success">Add</Button>
                        <Button variant="contained" color="error">Close</Button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <div className="mt-5">
                        <p className="font-semibold">Service Type:</p>
                        <div className="rounded border px-5 py-2">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Buyer Name" />
                                <FormControlLabel control={<Checkbox />} label="Process Name" />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <ServicesListTable></ServicesListTable>
            </div>
        </div>
    );
};

export default ServiceSetup;