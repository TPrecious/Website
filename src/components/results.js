import React from "react";
import store from "./../store";
import { useState } from "@hookstate/core";
import { getResults, showResults } from "./../services/questions";
import {useEffect} from 'react'

function Results() {
    const { user, results } = useState(store)
    const uid = user.uid.get()
    useEffect(() => {
        showResults(user.isAuthenticated);
    }, []);
    return (
        <div>
            <div className=" text-center text-white font-BebasNeue text-8xl grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-200 to-blue-500	h-screen">
                Number of Correct: {results.numberOfCorrect}
                <br />
                Number of Incorrect: {results.numberOfIncorrect}
            </div>
        </div>

    )
}

export default Results 