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
    <div>
      {/* <div>
        <nav>    
        <Link to="login">Login</Link>     
      </nav>
      </div> */}
      <div className="grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-300  to-blue-400	h-screen">
        <h2 className="text-2xl grid grid-cols-3 text-center">
          <div></div>
          <div className="text-white font-BebasNeue text-8xl">Sign Up</div>
          <div className="text-sky-300 cursor-pointer" onClick={SignUpHandler}>Login</div>
        </h2>
        
        <div className='bg-gradient-to-r from-green-400 to-blue-500 mt-10 mb-20 ml-40 mr-10 rounded-md'>
        <form onSubmit={formik.handleSubmit}>
          <div className="text-xl text-white">
            <label className='block font-BebasNeue text-3xl text-cyan-300'>First Name</label>
            <input  placeholder='Enter Text'id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} className=' border-cyan-300 font-BebasNeue border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg' />
            {formik.errors.firstName &&
              <div className="text-red-500 text-xs">
                {formik.errors.firstName}
              </div>}
          </div>
          <div className="text-xl text-white">
            <label className='block font-BebasNeue text-3xl text-cyan-300'>Last Name</label>
            <input placeholder='Enter Text' id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} className=" border-cyan-300 font-BebasNeue border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg" />
            {formik.errors.lastName &&
              <div className="text-red-500 text-xs">
                {formik.errors.lastName}
              </div>}
          </div>
          <div className="text-xl text-white">
            <label className='block font-BebasNeue text-3xl text-cyan-300'>Password</label>
            <input placeholder='Enter Text'type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} className=" border-cyan-300 font-BebasNeue border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg" />
            {formik.errors.password &&
              <div className="text-red-500 text-xs">
                {formik.errors.password}
              </div>}
          </div>
          <div className="text-xl text-white">
            <label className='block font-BebasNeue text-3xl text-cyan-300'>Confirm Password</label>
            <input placeholder='Enter Text' type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPAssword} className=' border-cyan-300 font-BebasNeue border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg' />
            {formik.errors.confirmPassword &&
              <div className="text-red-500 text-xs">
                {formik.errors.confirmPassword}
              </div>}
          </div>
          <div className="text-xl text-white">
            <label className='block font-BebasNeue text-3xl text-cyan-300'>Email</label>
            <input placeholder='Enter Text' id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className=' border-cyan-300 font-BebasNeue border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg' />
            {formik.errors.email &&
              <div className="text-red-500 text-xs">
                {formik.errors.email}
              </div>}
          </div>
          <div className="text-xl text-white">
            <label className='block font-BebasNeue text-3xl text-cyan-300'>Phone Number</label>
            <input placeholder='Enter Text' id="phoneNumber" name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber} className=' border-cyan-300 font-BebasNeue border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg' />
            {formik.errors.phoneNumber &&
              <div className="text-red-500 text-xs">
                {formik.errors.phoneNumber}
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
       
        <div className=" font-BebasNeue text-xl text-white"> 
          Once you have signup up go back to the login page and Login!
        </div> 
        </div>
      </div>
    </div>


  );

}

export default SignUp