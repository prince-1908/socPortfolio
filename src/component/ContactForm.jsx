import React, { useState, useRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

export default function ContactForm() {
    const [state, setState] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const form = useRef();

    const handleSucessAlert = () => {
        setOpen(true);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    handleSucessAlert();
                    form.current.reset();
                    setState('');
                    setCourse('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const action = (
        <React.Fragment>
            <Button color="primary" size="small" onClick={handleClose}>
                Okay
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const [Course, setCourse] = useState('');

    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };
    return (
        <div className='bg-gradient-to-r from-black to-[#ed0c32cc] flex h-[80vh]'>
            <div className='w-1/2 p-4 flex flex-col justify-evenly'>
                <h2 className='text-5xl text-white font-semibold flex justify-center'>Programs Offered</h2>
                <div className='flex flex-col items-center text-xl'>
                    <p>Bachelor of Computer Application</p>
                    <p>Master of Computer Application</p>
                    <p>Master of Computer Application (Integrated)</p>
                    <p>B.Sc (Computer Science)</p>
                </div>
                <div className='flex flex-col items-center text-xl'>
                    <p>Mandatory Disclosure </p>
                    <p>AICTE Approval EOA till date</p>
                </div>
            </div>

            <div className='border grow text-black bg-white bg-opacity-75 flex flex-col px-16 relative'>
                <div>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Email Sent"
                        action={action}
                    />
                </div>

                <div className='font-semibold text-4xl text-center py-2 mt-8'>
                    Enquire Now
                </div>

                <form
                    action="#"
                    method="post"
                    ref={form}
                    onSubmit={sendEmail}
                    className='grow flex flex-col justify-evenly py-16'
                >
                    <TextField id="enquirerName" name='from_name' label="Enter Name" variant="outlined" required />
                    <TextField id="enquirerEmail" name='from_email' label="Enter Email Address" variant="outlined" required />

                    <FormControl fullWidth>
                        <InputLabel id="enquirerState">Select State*</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state}
                            label="Select State"
                            onChange={handleStateChange}
                            name='from_state'
                            required
                        >
                            {
                                statesAndUTs.map((state) => (
                                    <MenuItem value={state}>{state}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="enquirerCourse">Select Course*</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Course}
                            label="Select Course"
                            onChange={handleCourseChange}
                            name='enquire_course'
                            required
                        >
                            {
                                course.map((course) => (
                                    <MenuItem value={course}>{course}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <textarea name="message" id="message" cols="30" rows="2" placeholder='Your Message...*' className='bg-transparent border rounded p-2 placeholder:text-black'></textarea>

                    <div className='flex justify-around px-16'>
                        <button className='border rounded p-4 w-1/3 cursor-pointer hover:bg-[#ED0C32CC]  hover:border-white hover:text-white transition hover:font-bold' type="reset" onClick={() => {setCourse(''); setState('')}}>reset</button>

                        <input type="submit" value="Send" className='border rounded p-4 w-1/3 cursor-pointer hover:bg-[#ED0C32CC]  hover:border-white hover:text-white transition hover:font-bold' />
                    </div>
                </form>
            </div>
        </div>
    );
}

const statesAndUTs = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh"
];

const course = [
    "Bachelor of Computer Application",
    "Master of Computer Application",
    "Master of Computer Application (Integrated)",
    "B.Sc (Computer Science)"
];