import {
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const SignUp = () => {

    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isMatch, setIsMatch] = useState(false);
    const [isShowPass, setIsShowPass] = useState(false)
    const [isShowCPass, setIsShowCPass] = useState(false)
    const [isAlreadyExist, setIsAlreadyExist] = useState(false);
    const [typeError, setTypeError] = useState(false)
    const [companyError, setCompanyError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordLengthError, setPasswordLengthError] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [isError, setIsError] = useState('')

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleIsAlreadyExist = (email) => {
        console.log(email);
        // fetch('http://api.uicommercial.com/api/get_user', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify({ email })
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //         setIsAlreadyExist(result)
        //     })
    }

    const handlePasswordMatch = (cPassword) => {
        setConfirmPassword(cPassword);
        if (newPassword === cPassword) {
            setIsMatch(true);
        }
        else {
            setIsMatch(false);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const company_name = form.company_name.value;
        const mobile_no = form.number.value;
        const email = form.email.value;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const password = form.password.value;
        const gender = selectedGender;
        const account_type = selectedType;
        if (selectedType === '') {
            setTypeError(true)
            return;
        }
        else {
            setTypeError(false);
        }
        if (company_name === '') {
            setCompanyError(true)
            return;
        }
        else {
            setCompanyError(false)
        }
        if (mobile_no === '') {
            setPhoneError(true)
            return;
        }
        else {
            setPhoneError(false)
        }
        if (email === '') {
            setEmailError(true)
            return;
        }
        else {
            setEmailError(false)
        }
        if (first_name === '') {
            setFirstNameError(true)
            return;
        }
        else {
            setFirstNameError(false)
        }
        if (newPassword !== confirmPassword) {
            setPasswordError(true)
            return;
        }
        else {
            setPasswordError(false)
        }
        if (newPassword?.length < 6) {
            setPasswordLengthError(true);
            return;
        } else {
            setPasswordLengthError(false);

        }

        fetch('http://api.uicommercial.com/api/registration', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ first_name, last_name, account_type, company_name, mobile_no, email, gender, password })
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    if (data.validationErrors) {
                        setIsError(data.validationErrors[0].message);
                    }
                    else {
                        setIsError(data.message);
                    }
                }
                else {
                    setIsError('');
                    Swal.fire({
                        title: "Sign Up successful!",
                        text: "Please Login to continue.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/sign-in');
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="bg-[#b3abd6] py-5">
            <div className="mx-auto max-w-5xl bg-white rounded-lg p-20">
                <h2 className="text-4xl font-bold text-[#2e2c2c]">Sign Up</h2>
                <p className="font-medium mt-3">Create a account to access all our services</p>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 mt-5"
                >
                    <div className="grid grid-cols-2">
                        <div className="space-y-5">
                            {/* Account Type */}
                            <div className="relative flex">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Account Type"
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                        >
                                            <MenuItem value='Individual'>Individual</MenuItem>
                                            <MenuItem value='Company'>Company</MenuItem>
                                            <MenuItem value='Business'>Business</MenuItem>
                                            <MenuItem value='Virtual_Assistant'>Virtual Assistant</MenuItem>
                                        </Select>
                                </FormControl>
                                {
                                    typeError &&
                                    <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to select Account type field!!!</span>
                                }
                            </div>
                            {/* company name */}
                            <div className="relative flex">
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Company Name"
                                    variant="outlined"
                                    name='company_name'
                                />
                                {
                                    companyError &&
                                    <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to fill Company field!!!</span>
                                }
                            </div>
                            <div className="relative flex">
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Mobile Number"
                                    variant="outlined"
                                    name='number'
                                />
                                {
                                    phoneError &&
                                    <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to give phone number!!!</span>
                                }
                            </div>
                        </div>
                        <div>
                            <div className="w-32 mx-auto text-center space-y-1">
                                <img src={selectedImage ? selectedImage : "https://i.ibb.co/qg572Zv/Screenshot-2023-11-08-001424.png"} className="rounded" alt="selected" />
                                <form>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                    />
                                    <Button
                                        onClick={handleButtonClick}
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        className="w-full"
                                    >Select Photo</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        {/* email */}
                        <div className="w-1/2 relative flex">
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                variant="outlined"
                                name='email'
                                onBlur={handleIsAlreadyExist}
                            />
                            {
                                emailError &&
                                <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to give your email!!!</span>
                            }
                        </div>
                        <p className="col-span-2 ml-5 flex items-center">
                            <img src="https://i.ibb.co/jMyWX3Y/images.png" className={`w-7 ${isAlreadyExist ? '' : "hidden"}`} alt="" />
                            <span className={`px-1 text-[#27a53a] rounded font-medium ${isAlreadyExist ? '' : "hidden"}`}>Already have an account.</span>
                        </p>
                    </div>
                    <div className="flex">
                        {/* first name */}
                        <div className="w-1/2 relative flex">
                            <TextField
                                fullWidth
                                type="text"
                                label="Enter First Name"
                                variant="outlined"
                                name='first_name'
                            />
                            {firstNameError && <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to fill your name!!!</span>}
                        </div>
                        {/* last name */}
                        <div className="w-1/2 pl-5">
                            <TextField
                                fullWidth
                                type="text"
                                label="Enter Last Name"
                                variant="outlined"
                                name='last_name'
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 justify-between">
                        {/* Gender */}
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel onChange={(e) => setSelectedGender(e.target.value)} value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel onChange={(e) => setSelectedGender(e.target.value)} value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel onChange={(e) => setSelectedGender(e.target.value)} value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 relative">
                            <div className="relative flex">
                                <TextField
                                    fullWidth
                                    type={isShowPass ? "text" : "password"}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    label="Create Password"
                                    variant="outlined"
                                    name='password'
                                />
                                {
                                    passwordError &&
                                    <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4"> Password didn&apos;t match with Confirm Password!!!</span>
                                }
                                {
                                    passwordLengthError &&
                                    <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4"> Password need to be at least 6 digits!!!</span>
                                }
                            </div>
                            <span
                                onClick={() => setIsShowPass(!isShowPass)}
                                className="hover:cursor-pointer absolute right-3 top-[35%]"
                            >
                                {
                                    isShowPass ?
                                        <img src="https://i.ibb.co/47RqZCR/eye-3926043.png" className="w-[20px]" alt="" /> :
                                        <img src="https://i.ibb.co/LksZQg2/hide-2767146.png" className="w-[20px]" alt="" />
                                }
                            </span>
                        </div>
                        <div className="flex justify-between w-1/2 relative ps-5">
                            <div className="relative flex w-full">
                                <TextField
                                    fullWidth
                                    onChange={(e) => handlePasswordMatch(e.target.value)}
                                    type={isShowCPass ? "text" : "password"}
                                    label="Confirm Password"
                                    variant="outlined"
                                    name='confirm password'
                                />
                                {passwordError && <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4"> Confirm Password didn&apos;t match with Password!!!</span>}
                                {passwordLengthError && <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4"> Password need to be at least 6 digits!!!</span>}
                            </div>
                            <span onClick={() => setIsShowCPass(!isShowCPass)} className="hover:cursor-pointer absolute right-2 top-[35%]">
                                {
                                    isShowCPass ?
                                        <img src="https://i.ibb.co/47RqZCR/eye-3926043.png" className="w-[20px]" alt="" /> :
                                        <img src="https://i.ibb.co/LksZQg2/hide-2767146.png" className="w-[20px]" alt="" />
                                }
                            </span>
                        </div>
                    </div>
                    <div>
                        {
                            <p className="text-center text-xs text-[red] font-medium">{isError}</p>
                        }
                        <p className="text-center font-light mt-3">People who use our service may have uploaded your contact information to Social media.<Link className="text-[#0180df] hover:underline" to='#'> Learn more.</Link></p>
                    </div>
                    <div className="text-center flex flex-col items-center">
                        {
                            isMatch ?
                                <Button type="submit" color="success" variant="contained" size="large" className="w-full">Sign Up</Button> :
                                <Button variant="contained" size="large" disabled className="w-full">Sign Up</Button>
                        }
                    </div>
                    <Divider className="text-[#706262]">OR</Divider>
                    <p className="font-[500] flex justify-center gap-1">
                        <span>Already have an account?</span>
                        <Link
                            className="font-semibold underline text-[#0180df]"
                            to="/sign-in"
                        >Sign in</Link>
                    </p>
                    <Button
                        href="/sign-in"
                        type="submit"
                        variant="contained"
                        size="large"
                        className="w-full"
                    >Sign In</Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;