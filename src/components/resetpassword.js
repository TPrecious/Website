import React, { useState } from "react";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { ResetPasswordvalidationSchema } from "../utils/form-utils";
import { resetPassword } from "../services/auth";


function ResetPassword() {
    const [email, setEmail] = useState(" ")
    const [serverError, setServerError] = useState("")
    const navigate = useNavigate()
    const LoginHandler = () => {
        navigate("/Login")
    }
    const formik = useFormik({
        initialValues: {
            Email: "",
        },
        onSubmit: (values) => {
            //call firebase to signup 
            resetPassword(values, onSuccess, onFaliure)
        },
        validationSchema: ResetPasswordvalidationSchema,
    })
    const onSuccess = () => {
        // callback onSuccess 
    }
    const onFaliure = (message) => {
        setServerError(message)
    }

    return (
        <>
            <div>
                <div className="grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-300 to-blue-400 h-screen">
                    <h2 className="text-2xl grid grid-cols-3 text-center">
                        <div></div>
                        <div className="text-white font-BebasNeue text-8xl">ResetPassword</div>
                        <div className="text-sky-300 cursor-pointer text-3xl font-BebasNeue" onClick={LoginHandler}>Login</div>
                    </h2>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="text-xl text-white">
                            <label className='font-BebasNeue text-3xl'>Email:</label>
                            <input placeholder='Enter Text' id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className='text-cyan-300 mb-8 border-b-2 border-black bg-zinc-100 md:w-1/4 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' type="text-lg" />
                            {formik.errors.email &&
                                <div className="text-red-500 text-xs">
                                    {formik.errors.email}
                                </div>}
                            <br />
                            <button type="submit" className=" bg-white hover:bg-gradient-to-r from-cyan-300 to-blue-400 text-white font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center my-5">
                                <p className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold'>
                                    Submit
                                </p>
                            </button>
                        </div>
                        <div className='text-red-500'> {serverError} </div>
                    </form>
                    <div className="text-xl text-white font-BebasNeue"> Once you have clicked the submit button a message will be sent to you email</div>
                </div>
            </div>


        </>
    )
}
export default ResetPassword;