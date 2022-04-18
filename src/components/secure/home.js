import { useState } from "@hookstate/core";
import React from "react";
import { useEffect } from "react";
import { getAnswers, getListOfQuestions, showResults } from "../../services/questions";
import store from "../../store";
import AssesmentQuestions from "./assesmentquestions";
import Completed from "./completed";

function Home() {
    const { user, questions, answers, results} = useState(store)
    console.log("aaa",results.length)
    useEffect(() => {
        showResults(user.uid.get())
        getListOfQuestions()
        getAnswers(user.uid.get())
    }, [])
    if(results.length !== 0) {
        return <Completed/>
    }
    return (
        <div>
            <div className="grid grid rows-3 w-full mx-auto text-center bg-gradient-to-r from-cyan-300  to-blue-400 h-screen">
                <div className=" mt-60 bg-gradient-to-r from-cyan-300  to-blue-400">
                    <AssesmentQuestions listOfQuestions={questions.get()}
                        answersDictionary={answers.get()} />
                </div>
            </div>
        </div>

    )
}
export default Home