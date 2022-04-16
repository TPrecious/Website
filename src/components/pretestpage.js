import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router';
import { FaSpinner } from 'react-icons/fa';

function Pretestpage() {
    const navigate = useNavigate()
    
    const homeHandler = () => {
        navigate("/Home")
    }

    return (
        <div className="grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-200 to-blue-500	h-screen">
            <h2 className="text-5xl text-white text-bolds font-BebasNeue" > 
                WELCOME 
                </h2>  
                <div>
                    <title>Typewriter effect</title>
                </div>

                <div>
                    <div className="container">
                        <div className="typedout text-white font-BebasNeue"> Are you ready to begin the test? If so, click start! </div>
                    </div>
                    <div className="text-white font-BebasNeue"> 
                        Good luck!! The answer to number one is period....:)
                    </div>
                </div>
            


            <div className='text-center'>
                <button onClick={homeHandler} type="submit"className=" bg-white hover:bg-blue-700 text-white font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center">
                    <p   className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold flex flex-row justify-around'>
                        Start
                    </p>
                </button>
            </div>
        </div>
    )
}
export default Pretestpage