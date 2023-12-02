import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
    Button,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from 'sweetalert2';
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {

    const { setCookie } = useContext(AuthContext);
    const navigate = useNavigate();
    // const [user, setUser] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [isErrorSignIn, setIsErrorSignIn] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (email === '') {
            setEmailError(true)
            return;
        }
        else {
            setEmailError(false)
        }
        if (password === '') {
            setPasswordError(true)
            return;
        }
        else {
            setPasswordError(false)
        }

        fetch('http://api.uicommercial.com/api/login', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(result => result.json())
            .then(data => {
                if (data.access_token) {
                    setCookie('auth_token', data.access_token, 1);
                    setIsErrorSignIn(false)
                    Swal.fire({
                        title: data.message,
                        // text: "Please Login to continue.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
                else {
                    setIsErrorSignIn(true);
                    // Swal.fire({
                    //     title: "Sign in failed",
                    //     text: data.message,
                    //     icon: "error",
                    //     showConfirmButton: false,
                    //     timer: 2000
                    // });
                }
                console.log(data);
                // if (data.code) {
                //     setError(data.message);
                // }
                // else {
                //     localStorage.setItem('loginData', JSON.stringify({ email: data.email, token: data.token }));
                //     setError('');
                //     navigate('/');
                // }
            })
            .catch(error => {
                console.log(error);
                // setError(error.message)
            })
    }

    return (
        <div className="bg-[#b3abd6] py-5">
            <div className="mx-auto max-w-5xl bg-[#0180df] rounded-xl grid grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                    <button className="text-white">
                        <img src="https://i.ibb.co/qrBzkns/58641c06-a125-415c-aac1-bdc5525065fe-removebg-preview.png" alt="logo" />
                    </button>
                    <div className="grid grid-cols-4 text-white font-semibold text-md">
                        <p>Device</p>
                        <p className="col-span-3">: Reza/23AEC51E-2963-4419</p>
                        <p>Date</p>
                        <p className="col-span-3">: 15-Oct-2022</p>
                        <p>Time</p>
                        <p className="col-span-3">: 12:34 PM</p>
                        <p>IP</p>
                        <p className="col-span-3">: 174.134.10.124</p>
                    </div>
                </div>
                <div className="col-span-2 bg-[#ffffff] rounded-xl">
                    <div className="mx-auto text-center p-20">
                        <h2 className="text-4xl font-bold text-[#2e2c2c]">Sign In</h2>
                        <p className="font-medium mt-3">&quot;Sign in to your UiCommercial Account&quot;</p>
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto space-y-5 my-5"
                        >
                            <div className="flex justify-between items-center mb-3 relative">
                                <p className="text-start text-lg font-semibold">Email</p>
                                <div className="w-[70%] flex">
                                    <TextField
                                        fullWidth
                                        id="outlined-search"
                                        label="Enter email"
                                        name="email"
                                        type="email"
                                    />
                                    {emailError && <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to give your email!!!</span>}
                                </div>
                            </div>
                            <div className="flex justify-between items-center relative">
                                <p className="text-start text-lg font-semibold">Password</p>
                                <div className="col-span-2 w-[70%] flex">
                                    <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    {passwordError && <span className="ms-4 absolute text-xs text-[red] font-medium -bottom-4">You have to give your password!!!</span>}
                                </div>
                            </div>
                            <div>
                                {isErrorSignIn && <span className="text-sm text-[red] font-medium"> Invalid username or password!!!</span>}
                                <p className="text-center col-span-3 text-[#3075cf]">Forgot your password? <span className="font-semibold hover:underline cursor-pointer">Reset Password</span></p>
                            </div>
                            <Button
                                type="submit"
                                color="success"
                                variant="contained"
                                size="large"
                                className="w-full"
                            >Sign in</Button>
                        </form>
                        <Divider className="text-[#706262]">OR</Divider>
                        <p className="text-center font-[500]  my-4">Don’t have a UiCommercial account? <Link className="font-semibold underline text-[#0180df]" to="/sign-up">Sign up</Link></p>
                        <Link to="/sign-up">
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                className="w-full"
                            >Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
