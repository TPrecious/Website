import React, { useState } from 'react';
import { useFormik } from "formik";
import { LoginvalidationSchema } from "../utils/form-utils";
import { useNavigate } from 'react-router';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { signIn } from '../services/auth';
function Login({ name }) {
  const [email, setEmail] = useState(" ")  //we are coming back here 
  const [password, setPassword] = useState(" ")
  const navigate = useNavigate()
  const [serverError, setServerError] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      password: '',
    },
    onSubmit: (values) => {
      //call firebase to signup 
      signIn(values, onSuccess, onFaliure)

    },
    validationSchema: LoginvalidationSchema,
  })
  const SignUpHandler = () => {
    navigate("/SignUP")
  }
  const ResetPasswordHandler = () => {
    navigate("/ResetPassword")

  }
  const AboutHandler = () => {
    navigate("/About")
  }

  const onSuccess = () => {
    // callback onSuccess 
    navigate("/PreTestPage")
  }
  const onFaliure = (message) => {
    setServerError(message)
  }


  const handleEmail = (e) => { setEmail(e.target.value) }
  const handlePassword = (e) => { setPassword(e.target.value) }
  const handleLogin = () => {
    //this is where you submit to the server/backend

  }

  return (
    <div>
      {/* <div>
        <nav className="text-lg grid grid-cols-3 text-center bg-cyan-200">
        <Link to="about">About</Link>
        <Link to="resetpassword">Forgot Password</Link>
        <Link to="signup">Sign Up</Link>
        </nav>
      </div> */}

      <div className="grid grid-cols-2 col-span-2 w-full mx-auto text-center bg-gradient-to-r from-cyan-300  to-blue-400 bg-cover h-screen">
        <div className="mt-60">
          <div className="text-8xl font-BebasNeue text-white">
            WELCOME
          </div>
          <p className="font-BebasNeue text-2xl text-white">
            If you do not have an account yet click the signup button!
          </p>
          <div onClick={SignUpHandler}>
            <button className=" bg-white hover:bg-gradient-to-r from-cyan-300  to-blue-300 font-bold font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center">
              <p className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold'>
                SignUp
              </p>
            </button>
          </div>
        </div>



        <div className='bg-white mt-20 mb-20 ml-40 mr-10 rounded-md'>
          <div className=" mt-8 text-cyan-300 font-BebasNeue text-8xl">Login</div>
          <form className="mt-10s " onSubmit={formik.handleSubmit}>
            <div className="text-xl text-white">
              <label className='block text-cyan-300 font-BebasNeue text-3xl'>Email</label>
              <input placeholder='Enter Text' id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className=' text-cyan-300 mb-8 border-b-2 border-black bg-zinc-100 md:w-1/2 h-20   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' type="text-lg" />
              {formik.errors.email &&
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>}
            </div>
            <div className="text-xl text-white">
              <label className='block text-cyan-300 font-BebasNeue text-3xl'>Password</label>
              <input placeholder='Enter Text' type="password" onChange={formik.handleChange} className=" text-cyan-300 mb-8 border-b-2 border-black bg-zinc-100 md:w-1/2 h-20   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center" name="password" id="password" />
            </div>
            <div className='text-center'>
              <button type="submit" className=" bg-blue-300 hover:bg-gradient-to-r from-cyan-300  to-blue-300 text-white font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center">
                <p className='text-white text-3xl font-BebasNeue text-xl font-bold'>
                  Login
                </p>
              </button>
            </div>
            <div className='text-red-500'> {serverError} </div>

            <p onClick={ResetPasswordHandler} className='text-cyan-300 text-lg font-bold cursor-pointer'>
              Forgot Password
            </p>
            <p onClick={AboutHandler} className='text-cyan-300 text-lg font-bold cursor-pointer'>
              About
            </p>
          </form>
        </div>
      </div>


    </div>

  );
}

export default Login;
