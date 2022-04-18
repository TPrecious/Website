import React from "react";
import { Navigate, useNavigate } from 'react-router';



function Completed() {
    const navigate = useNavigate()
    const SignUpHandler = () => {
        navigate("/Results")
    }

    return (
        <div className="grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-200 to-blue-500	h-screen text-center">
            <h2 className="text-5xl text-white text-bolds font-BebasNeue" >
                Congratulations
            </h2>
            <div>
                <title>Typewriter effect</title>
            </div>

            <div>
                <div className="container">
                    <div className="typedout font-BebasNeue"> You have completed the JHB coding test. </div>
                    <div className="typedout font-BebasNeue"> contact "tayoakinbode10@gmail.com"</div>
                </div>

                <div onClick={SignUpHandler}>
                    <button className=" bg-white hover:bg-gradient-to-r from-cyan-300  to-blue-300 font-bold font-bold py-2 px-4 md: w-1/5 rounded-full place-items-center">
                        <p className='text-cyan-300 text-3xl font-BebasNeue text-xl font-bold'>
                            See Results
                        </p>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Completed