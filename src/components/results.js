import store from "./../store";
import { useState } from "@hookstate/core";
import { useEffect } from 'react'
import "../index.css"


function Post() {
    const { user, results } = useState(store)
    const uid = user.uid.get()
    return (
        <div className="text-center text-center text-white font-BebasNeue text-4xl grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-200 to-blue-500 h-screen ">
            <h1 className=" text-8xl">
                Results
            </h1>
            <br />
            Number of Correct: {results[0]?.numberOfCorrect?.get()}
            <br />
            Number of Incorrect: {results[0]?.numberOfIncorrect?.get()}
            <br />
            Have a good day :)
        </div>

    )
};

export default Post;

