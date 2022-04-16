import { useState } from "@hookstate/core";
import React from "react";
import { useEffect } from "react";
import { getAnswers, getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssesmentQuestions from "./assesmentquestions";

function Home() {
    const { user, questions, answers } = useState(store)
    console.log(questions.get())
    useEffect(() => {
        getListOfQuestions()
        getAnswers(user.uid.get())
    }, [])
    return (
        <div>
            <div className="grid grid rows-3 w-full mx-auto text-center bg-cyan-200 h-screen">
                <div className=" mt-60">
                    <AssesmentQuestions listOfQuestions={questions.get()}
                        answersDictionary={answers.get()} />
                </div>
            </div>
        </div>

    )
}
export default Home