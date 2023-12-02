import {
    Button,
    Checkbox,
    FormControlLabel,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import SelectPeriodAndProcess from "./SelectPeriodAndProcess/SelectPeriodAndProcess";

const ServicesPurchase = () => {

    const { setPaymentInfo } = useContext(AuthContext);
    const [selectedServices, setSelectedServices] = useState([]);
    const [isTermAccepted, setIsTermAccepted] = useState(false)
    const [total, setTotal] = useState(0)

    const handleSetTotal = () => {
        setTotal(selectedServices.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0));
    }

    const AllServices = [
        {
            name: "invoicing",
            process: [
                {
                    processName: "Data Preparation",
                    price: 2000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
                {
                    processName: "EXP Issuance",
                    price: 1000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
                {
                    processName: "EXP Download",
                    price: 2000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
                {
                    processName: "EXP Correction",
                    price: 2000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
                {
                    processName: "Duplicate Reporting",
                    price: 2000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
                {
                    processName: "Reports",
                    price: 2000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
            ],
        },
        {
            name: "OEMS",
            process: [
                {
                    processName: "EXP Issuance",
                    price: 1000,
                    useLimit: 500,
                    extendLimit: 100,
                    extendPrice: 100
                },
            ],
        },
    ]

    // useEffect(() => {
    //     async function fetchData() {
    //         const userData = await localStorage.getItem('loginData');
    //         const user = JSON.parse(userData)
    //         // setUser(user);
    //         setLoading(true)
    //         fetch(`http://localhost:3309/webapi/services`, {
    //             method: "GET",
    //             headers: {
    //                 "content-type": "application/json",
    //                 'Authorization': `Bearer ${user.token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setServices(data)
    //                 setLoading(false)
    //             })
    //     }
    //     fetchData()
    // }, [])

    const payInfo = {
        selectedServices,
    }

    return (
        <div className="my-10">
            <h1 className="text-4xl font-bold text-center">Purchase Services</h1>
            <p className="text-center mt-4">To activate your Ui account, please issue/renew subscription from the below available services:</p>
            <form className="max-w-5xl mx-auto gap-y-2 my-5">
                <p className="text-start text-2xl font-semibold">Service available:-</p>
                <div className="grid grid-cols-6 gap-5 ms-5">
                    {
                        AllServices.map((singleService, index) => <SelectPeriodAndProcess
                            key={index}
                            singleService={singleService}
                            selectedServices={selectedServices}
                            setSelectedServices={setSelectedServices}
                            handleSetTotal={handleSetTotal}
                        ></SelectPeriodAndProcess>)
                    }
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Service Name</TableCell>
                                <TableCell>Process</TableCell>
                                <TableCell>Buyers</TableCell>
                                <TableCell align="center">Use-limit</TableCell>
                                <TableCell align="center">Period</TableCell>
                                <TableCell align="center">Rate</TableCell>
                                <TableCell align="center">Total</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selectedServices.map((selectedService, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ textTransform: "capitalize" }}>
                                        {selectedService.serviceName}
                                    </TableCell>
                                    <TableCell>{selectedService.processName}</TableCell>
                                    <TableCell>{selectedService.buyerName}</TableCell>
                                    <TableCell align="center">{selectedService.useLimit}</TableCell>
                                    <TableCell align="center">{selectedService.periodTime}</TableCell>
                                    <TableCell align="center">{selectedService.rate}</TableCell>
                                    <TableCell align="center">{selectedService.total}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="error" size="small">Cancel</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="mt-10">
                    <h3 className="font-semibold">Payment details: </h3>
                    <div className="border-2 py-5">
                        <div className="text-center mb-3">
                            <h2 className="text-xl font-semibold">Total Payable Amount: {total} BDT</h2>
                        </div>
                        <p className="text-center">By clicking on the &quot;PROCEED TO PAYMENT&quot; button below, you acknowledge that you have read and agreed to the
                            {/* <span className="text-[#5d408b] cursor-pointer hover:underline"> */}
                            Terms & Conditions
                            {/* </span> */}
                            .</p>

                        <div className="max-w-3xl mx-auto border-2 py-2 px-5 h-40 overflow-y-scroll bg-[#d6cbcb] mt-5">
                            <p className="text-center font-semibold  mt-2 mb-1">Terms & Conditions</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident dolores temporibus cupiditate, sint architecto aut nemo tempora ex vero harum cum modi expedita, maxime esse! Atque rerum adipisci dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident dolores temporibus cupiditate, sint architecto aut nemo tempora ex vero harum cum modi expedita, maxime esse! Atque rerum adipisci dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident dolores temporibus cupiditate, sint architecto aut nemo tempora ex vero harum cum modi expedita, maxime esse! Atque rerum adipisci dolorum.</p>
                            <div className="text-right">
                                <FormControlLabel
                                    checked={isTermAccepted}
                                    onChange={() => setIsTermAccepted(!isTermAccepted)}
                                    control={<Checkbox size="small" required />}
                                    label="Accept and process to payment"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Link
                onClick={() => setPaymentInfo(payInfo)}
                to={isTermAccepted ? '/payment' : "#"}
                className="flex justify-center w-48 mx-auto"
            >
                <Button
                    fullWidth
                    variant="contained"
                    disabled={!isTermAccepted || total === 0}
                >Make Payment</Button>
                {/* <button
                    className={`border rounded-3xl px-5 py-1 text-white font-bold bg-[#7544c4] hover:bg-[#5d408b] ${selectedServices.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0) !== 0 ? "" : "bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-md pointer-events-none opacity-50"}`}
                >Make Payment</button> */}
            </Link>
        </div>
    );
};

export default ServicesPurchase;