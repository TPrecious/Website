import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Navigate } from "react-router";
import { submitAnswers } from "../../services/questions";
import { useState as useGlobalState } from "@hookstate/core";
import store from "../../store";

const AssessmentQuestions = ({ listOfQuestions, answersDictionary }) => {
    const { user } = useGlobalState(store)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const [previousAnswers, setPreviousAnswers] = useState({})
    const selectedAnswer = useState()
    const [processing, setProcessing] = useState(false)
    const q = listOfQuestions[currentQuestionIndex]
    const questionId = q?.id
    const selectedAnswers = answersDictionary[questionId]
    console.log(answers, "***")
    useEffect(() => {
        setAnswers(selectedAnswers)
    }, [selectedAnswers])
    const formik = useFormik({


        initialValues: {

        },
        onSubmit: async (values) => {
            setProcessing(true)
            submitAnswers(answers, onSuccess)
        },

    })
    const questionsIndex = currentQuestionIndex
    const next = () => {
        console.log(answers, '+++')
        submitAnswers(answers, onNextSuccess)
    }
    const previous = () => {
        setAnswers(previousAnswers)
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
    const onNextSuccess = (answers) => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setPreviousAnswers(answers)
    }
    const onSuccess = () => {
        //navigate to a another page after submission
    }
    let buttonHtml;
    const nextButton = <button className=" m-3 bg-white hover:bg-blue-700 font-bold text-cyan-300 py-2 px-4 md: w-1/5 rounded-full place-items-center" onClick={next} type="button"> Next</button>
    const previousButton = <button type="button" onClick={previous}> Previous</button>
    if (questionsIndex === 0) {
        buttonHtml = (
            <>
                {nextButton}
            </>
        );
    } else if (questionsIndex === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                {previousButton}
                <button className=" m-3 bg-white hover:bg-blue-700 font-bold text-cyan-300 py-2 px-4 md: w-1/5 rounded-full place-items-center" type="button"> Submit</button>
            </>
        );
    } else {
        buttonHtml = (
            <>
                {previousButton}
                {nextButton}
            </>
        )
    }
    return (
        <div className="grid grid rows-3 w-full mx-auto text-center text-5xl text-white bg-cyan-200 h-screen font-BebasNeue">
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <div key={`questions${questionsIndex}`}>
                        <div >Question {questionsIndex + 1}</div>
                        <div>{q?.question}</div>
                        <div>
                            {q?.type === "multiple-choice" ?
                                <>
                                    {q?.options?.map((o, i) => {
                                        return (
                                            <>

                                                <div key={`option${i}`}>
                                                    <input type="radio"
                                                        id={`option${i}`}
                                                        name={`option${i}`}
                                                        onChange={() => {
                                                            formik.setFieldValue(q.id, o)
                                                            setAnswers({ ...answers, answer: o, questionId: q.id, uid: user.uid.get() })
                                                        }
                                                        }
                                                        checked={formik.values[q.id] === o || selectedAnswers?.answer === o}
                                                        value={selectedAnswer[i].selected.get()}
                                                    />
                                                    {o}
                                                </div>
                                            </>
                                        );


                                    })}</>
                                :

                                <div>
                                    Answer:<input value={answers?.answer} onChange={(e) => {
                                        setAnswers({ ...answers, answer: e.target.value, questionId: q.id, uid: user.uid.get() })
                                        console.log(answers, '---')
                                    }} className="text-cyan-200" id="Answer" name="Answer" placeholder='Enter Text' />
                                </div>
                            }</div>


                    </div>

                    <div>
                        {buttonHtml}
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AssessmentQuestions;