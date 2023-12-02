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
import BuyersListTable from "./BuyersListTable/BuyersListTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const countries = ["USA", "UK", "SA", "UAE", "MEX"];

const BuyerSetup = () => {

    const { getCookie } = useContext(AuthContext);

    const token = getCookie('auth_token');
    // console.log(token);

    const [selectedCountry, setSelectedCountry] = useState('')
    const [isActive, setIsActive] = useState("No")

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.buyer_name.value;
        const short_code = e.target.short_code.value;
        console.log(token);
        
        fetch('http://api.uicommercial.com/api/create_buyer', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Authorization': `${token}`
            },
            body: JSON.stringify({ name, short_code, country: selectedCountry, is_active: isActive })
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
            <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-5">
                <div className="col-span-3 space-y-5">
                    <div className="flex justify-between">
                        <p className="w-[33%] pr-3 my-auto font-semibold">Buyer Name* : </p>
                        <TextField
                            name="buyer_name"
                            label="Write service name"
                            type="text"
                            variant="outlined"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] my-auto font-semibold">Country* : </p>
                        <FormControl sx={{ width: "66%" }}>
                            <InputLabel id="demo-simple-select-label">Select country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select country"
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                {
                                    countries.map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

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
                        <p className="font-semibold">Short Code : </p>
                        <div className="col-span-2">
                            <TextField
                                fullWidth
                                name="short_code"
                                label="Short code"
                                type="text"
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className="mt-10">
                <BuyersListTable></BuyersListTable>
            </div>
        </div>
    );
};

export default BuyerSetup;