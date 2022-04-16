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
            console.log("jjh")
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
                <div className="grid grid rows-3 w-full mx-auto text-center bg-cyan-200 h-screen">
                    <h2 className="text-2xl grid grid-cols-3 text-center">
                        <div></div>
                        <div className="text-white font-BebasNeue text-6xl">ResetPassword</div>
                        <div className="text-sky-300 cursor-pointer" onClick={LoginHandler}>Login</div>
                    </h2>


                    <form onSubmit={formik.handleSubmit}>
                        <div className="text-xl text-white">
                            <label className='font-BebasNeue text-3xl'>Email:</label>
                            <input placeholder='Enter Text' id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className='border-current border-2 text-black rounded shadow-inner border-cyan-300 font-BebasNeue' type="text-lg"/>
                            {formik.errors.email &&
                                <div className="text-red-500 text-xs">
                                    {formik.errors.email}
                                </div>}
                            <br />
                            <button type="submit" className=" bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center my-5">
                                <p className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold'>
                                    Submit
                                </p>
                            </button>
                        </div>
                        <div className='text-red-500'> {serverError} </div>
                    </form>
                </div>
            </div>


        </>
    )
}
export default ResetPassword;