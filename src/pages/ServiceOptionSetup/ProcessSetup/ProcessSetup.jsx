import {
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    MenuItem,
    Select,
    InputLabel
} from "@mui/material";
import { useEffect, useState } from "react";
import ProcessListTable from "./ProcessListTable/ProcessListTable";
import { createProcess, getServices } from "../../../Services/AuthService";

const ProcessSetup = () => {

    const [services, setServices] = useState('');
    const [selectedServices, setSelectedServices] = useState('');
    const [isActive, setIsActive] = useState("No")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getServices();
                setServices(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.process_name.value;
        const domain = e.target.domain.value;
        const default_quantity = e.target.default_quantity.value;
        const service_type = "test";
        console.log(name, service_type, domain, isActive, default_quantity);

        try {
            const result = await createProcess({ name, service_type, domain, is_active: isActive, default_quantity });
            console.log(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

        // fetch('http://api.uicommercial.com/api/create_service', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //         'Authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify({ name, caption, service_type, is_active: isActive, remarks })
        // })
        //     .then(result => result.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-5">
                <div className="col-span-3 space-y-5">
                    <div className="flex justify-between">
                        <p className="w-[33%] my-auto font-semibold">Service Name* : </p>
                        <FormControl sx={{ width: "66%" }}>
                            <InputLabel id="demo-simple-select-label">Service Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Service Name"
                                value={selectedServices}
                                onChange={(e) => setSelectedServices(e.target.value)}
                            >
                                {
                                    services.map((service) => <MenuItem key={service.id} value={service.name}>{service.name}</MenuItem>)
                                }
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
            </form>
            <div className="mt-10">
                <ProcessListTable></ProcessListTable>
            </div>
        </div>
    );
};

export default ProcessSetup;