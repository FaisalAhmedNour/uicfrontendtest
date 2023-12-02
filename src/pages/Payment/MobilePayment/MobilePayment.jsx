import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const digitClasses = "h-[30px] w-[21px] text-center bg-[white] mr-[1.8px]"

const MobilePayment = ({ paymentInfo }) => {

    // const [user, setUser] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState('bkash');
    const accountNumber = '01749822723';
    const first = accountNumber.slice(0, 3).split('');
    const middle = accountNumber.slice(3, 7).split('');
    const last = accountNumber.slice(7, 11).split('');
    const [totalPayment, setTotalPayment] = useState(0);

    console.log(paymentInfo);

    useEffect(() => {
        setTotalPayment(paymentInfo?.selectedServices.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0))
    }, [setTotalPayment, paymentInfo])

    const handleSubmit = (event) => {
        event.preventDefault();
        const transId = event.target.transId.value;
        console.log(transId);
        // fetch('http://localhost:3309/webapi/payment-request/manual', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //         'Authorization': `Bearer ${user.token}`
        //     },
        //     body: JSON.stringify({ User: user, services: paymentInfo?.selectedServices, transId, totalPayment })
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //     })
        //     .catch(error => console.log(error))

        // event.target.reset();
    }

    return (
        <div className="max-w-7xl mx-auto my-5">
            <div className="max-w-5xl mx-auto grid grid-cols-2 px-10">
                <div>
                    <p className="font-semibold">Please Select a method for Payment: </p>
                    <RadioGroup
                        defaultValue="female"
                        sx={{
                            ml: 5
                        }}
                    >
                        <FormControlLabel
                            control={
                                <>
                                    <Radio
                                        checked={selectedMethod === 'bkash'}
                                        onChange={(e) => setSelectedMethod(e.target.value)}
                                        value="bkash"
                                        name="method"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <img onClick={() => setSelectedMethod('bkash')} className="w-[200px]" src="https://i.ibb.co/jLbpb9z/images.png" alt="Bkash" />
                                </>
                            } />
                        <FormControlLabel
                            control={
                                <>
                                    <Radio
                                        checked={selectedMethod === 'nagad'}
                                        onChange={(e) => setSelectedMethod(e.target.value)}
                                        value="nagad"
                                        name="method"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <img onClick={() => setSelectedMethod('nagad')} className="w-[200px]" src="https://i.ibb.co/0mmVnyV/images-1.png" alt="Nagad" />
                                </>
                            } />
                    </RadioGroup>
                </div>
                <div className="flex justify-center items-center h-80">
                    {selectedMethod === "bkash" && <div className="mx-auto w-96 relative">
                        <img className="w-full mt-2" src="https://i.ibb.co/pQDdHfK/images-2.png" />
                        <p className="absolute top-[37px] right-[58px] flex bg-[#c13757]">
                            <span className="font-semibold bg-[#c13757] ps-2 flex">
                                {
                                    first.map((number) => <div
                                        className={digitClasses}
                                        key={number}
                                    >
                                        <span className="text-2xl">{number}</span>
                                    </div>)
                                }
                            </span>
                            <span className="font-semibold ps-2 flex">
                                {
                                    middle.map((number) => <div
                                        className={digitClasses}
                                        key={number}
                                    >
                                        <span className="text-2xl">{number}</span>
                                    </div>)
                                }
                            </span>
                            <span className="font-semibold ps-2 flex">
                                {
                                    last.map((number) => <div
                                        className={digitClasses}
                                        key={number}
                                    >
                                        <span className="text-2xl">{number}</span>
                                    </div>)
                                }
                            </span>
                        </p>
                    </div>}
                    {selectedMethod === "nagad" && <div className="mx-auto w-72 relative">
                        <img className="w-full" src="https://i.ibb.co/f97xC9d/images-l3.png" />
                        <p className="absolute bottom-[25px] right-[13px] flex bg-[#ee1c25]">
                            <span className="font-semibold flex pe-1">
                                {
                                    first.map((number) => <div
                                        className={digitClasses}
                                        key={number}
                                    >
                                        <span className="text-2xl">{number}</span>
                                    </div>)
                                }
                            </span>
                            <span className="font-semibold flex pe-1">
                                {
                                    middle.map((number) => <div
                                        className={digitClasses}
                                        key={number}
                                    >
                                        <span className="text-2xl">{number}</span>
                                    </div>)
                                }
                            </span>
                            <span className="font-semibold flex">
                                {
                                    last.map((number) => <div
                                        className={digitClasses}
                                        key={number}
                                    >
                                        <span className="text-2xl">{number}</span>
                                    </div>)
                                }
                            </span>
                        </p>
                    </div>}
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-20">
                <p className="w-[500px] mx-auto flex justify-between mt-5 font-bold text-2xl">
                    <span>Total Payable Amount</span>
                    <span>= {totalPayment} BDT</span>
                </p>
                <form className="w-[800px] mx-auto mt-5 flex items-center gap-2" onSubmit={handleSubmit} >
                    <p className="w-[20%] text-lg font-semibold">Transaction Id:</p>
                    <TextField id="outlined-search" label="" name="transId" type="text" className="w-[60%]" />
                    <Button variant="contained" color="success" type="submit" className="w-[20%] ms-2">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default MobilePayment;