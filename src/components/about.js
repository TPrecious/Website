import React from "react";
import { useNavigate } from "react-router";

function About() {
    const navigate = useNavigate()
    
    const LoginHandler = () => {
    navigate("/Login")
}

    const SignUpHandler = () => {
        navigate("/SignUp")
    }

    return (
        <div className="grid grid rows-4 w-full mx-auto text-center text-blue font-BebasNeue text-6xl bg-gradient-to-r from-cyan-300  to-blue-400 h-screen ">
            <h2 className="text-2xl grid grid-cols-3 text-center">
                <div className="text-cyan-300 cursor-pointer text-4xl" onClick={LoginHandler}>Login</div>
                <div className="text-white font-BebasNeue text-6xl">About</div>
                <div className="text-cyan-300 cursor-pointer text-4xl" onClick={SignUpHandler}> Sign Up </div>
            </h2>
            <p className="text-white font-BebasNeue text-1xl text-center">
                This website is for people interested in joining JHB's computer programing class,taught by Ayo Alatishe.
                In this website you will be able to take the test to see how well you know programing and for
                you to be able to join JHB's computer programming class! Make sure you answer every question as best as you can,
                and to ask any question you may have.
            </p>
            <p className="text-white font-BebasNeue text-1xl text-center">
                I hope you enjoy this website created by the one and only Precious Akinbode:)
            </p>
            <p className="text-white font-BebasNeue text-1xl text-center">
                **If you are having trouble signing up or logning in please email "tayoakinbode10@gmail.com":)**
            </p>
        </div>



    )


}

export default About; 