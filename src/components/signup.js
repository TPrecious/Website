import React, { useState } from "react";
import { useNavigate } from 'react-router';
import { useFormik } from "formik";
import { signUp } from "../services/auth";
import { SignUpvalidationSchema } from "../utils/form-utils";
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';


function SignUp() {
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()
  const SignUpHandler = () => {
    navigate("/Login")
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      Email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      setProcessing(true)

      //call firebase to signup 
      signUp(values)
      setProcessing(false)
    },
    validationSchema: SignUpvalidationSchema,
  })
  return (
    <div className="h-full">
      {/* <div>
        <nav>    
        <Link to="login">Login</Link>     
      </nav>
      </div> */}
      <div className="grid grid-cols-2 col-span-2 w-full mx-auto text-center bg-gradient-to-r from-cyan-300 to-blue-400 ">
        <div className="mt-60">
            <div className="text-8xl font-BebasNeue text-white">
              WELCOME
            </div>
            <p className="font-BebasNeue text-2xl text-white">
              Once you have created your account click the login button!
            </p>
            <div onClick={SignUpHandler}>
              <button className=" bg-white hover:bg-gradient-to-r from-cyan-300  to-blue-300 font-bold font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center">
                <p className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold'>
                  Login
                </p>
              </button>
            </div>
        </div>


        <div className='bg-white mt-5 mb-40 ml-10 mr-10 rounded-md'>
          <div className="text-cyan-300 font-BebasNeue text-8xl">Create Account</div>
          <form onSubmit={formik.handleSubmit}>
            
            <div className="text-xl text-white">
              <label className='block font-BebasNeue text-6xl text-cyan-300'>Full Name </label>
              <input placeholder='Enter Text' id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} className=' text-cyan-300 mb-5 border-b-2 border-black bg-zinc-100 md:w-1/4 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' />
              {formik.errors.firstName &&
                <div className="text-red-500 text-xs">
                  {formik.errors.firstName}
                </div>}
            </div>

            <div className="text-xl text-white">
              <label className='block font-BebasNeue text-6xl text-cyan-300'>Email</label>
              <input placeholder='Enter Text' id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className=' text-cyan-300 mb-5 border-b-2 border-black bg-zinc-100 md:w-1/4 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' />
              {formik.errors.email &&
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>}
            </div>

            <div className="text-xl text-white">
              <label className='block font-BebasNeue text-6xl text-cyan-300'>Password</label>
              <input placeholder='Enter Text' type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} className=' text-cyan-300 mb-5 border-b-2 border-black bg-zinc-100 md:w-1/4 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' />
              {formik.errors.password &&
                <div className="text-red-500 text-xs">
                  {formik.errors.password}
                </div>}
            </div>
            <div className="text-xl text-white">
              <label className='block font-BebasNeue text-6xl text-cyan-300'>Confirm Password</label>
              <input placeholder='Enter Text' type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPAssword} className=' text-cyan-300 mb-5 border-b-2 border-black bg-zinc-100 md:w-1/4 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' />
              {formik.errors.confirmPassword &&
                <div className="text-red-500 text-xs">
                  {formik.errors.confirmPassword}
                </div>}
            </div>
            <div className="text-xl text-white">
              <label className='block font-BebasNeue text-6xl text-cyan-300'>Email</label>
              <input placeholder='Enter Text' id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className=' text-cyan-300 mb-5 border-b-2 border-black bg-zinc-100 md:w-1/4 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' />
              {formik.errors.email &&
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>}
            </div>

            <div className='text-center'>
              <button type="submit" className="  m-3 bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center">
                <p className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold flex flex-row justify-around'>
                  SignUp
                  {processing && <FaSpinner icon="spinner" className="spinner animate-spin " size={35} />}
                </p>
              </button>
            </div>
          </form>

          <div className=" font-BebasNeue text-xl text-cyan-300">
            Once you have signup up go back to the login page and Login!
          </div>
        </div>
      </div>
    </div>


  );

}

export default SignUp