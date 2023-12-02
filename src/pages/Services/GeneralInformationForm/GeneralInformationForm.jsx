import { Button, TextField } from "@mui/material";

const GeneralInformationForm = () => {
    return (
        <div className="border-2 p-5 mb-10 relative">
            <p className="absolute -top-3 bg-white px-2 font-bold">General Information*</p>
            <form className="grid grid-cols-5 gap-5">
                <div className="col-span-3 space-y-2">
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">* Company Name : </p>
                        <TextField
                            label="Write your company name"
                            type="text"
                            variant="filled"
                            size="small"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">* VAT : </p>
                        <div className="w-[66%]">
                            <TextField
                                label=""
                                type="text"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">* Signatory ID : </p>
                        <TextField
                            label="Write authorized person's ID"
                            type="text"
                            variant="filled"
                            size="small"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">* Signatory Name : </p>
                        <TextField
                            label="Write authorized person's name"
                            type="text"
                            variant="filled"
                            size="small"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">BD Bank Site : </p>
                        <TextField
                            label="Paste BD Bank website link"
                            type="text"
                            variant="filled"
                            size="small"
                            sx={{ width: "66%" }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">BD Bank User ID : </p>
                        <div className="w-[66%]">
                            <TextField
                                label="BD Bank User ID"
                                type="text"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="w-[33%] text-right pr-3 my-auto font-semibold">BD Bank Password : </p>
                        <div className="w-[66%]">
                            <TextField
                                label="BD Bank Password"
                                type="password"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col justify-between">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <p className="w-[33%] text-right pr-3 my-auto font-semibold">* Zone : </p>
                            <TextField
                                label=""
                                type="text"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className="w-[33%] text-right pr-3 my-auto font-semibold">* BIN : </p>
                            <TextField
                                label=""
                                type="text"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className="w-[33%] text-right pr-3 my-auto font-semibold">* ERC : </p>
                            <TextField
                                label=""
                                type="text"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                        <div className="flex justify-between">
                            <p className="w-[33%] text-right pr-3 my-auto font-semibold">* IRC : </p>
                            <TextField
                                label="Password"
                                type="password"
                                variant="filled"
                                size="small"
                                sx={{ width: "66%" }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3">
                        <Button variant="contained" color="error">Clear</Button>
                        <Button type="submit" variant="contained" color="success">Save</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default GeneralInformationForm;