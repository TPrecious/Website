import { useFormik } from "formik"
import { useState } from "react/cjs/react.development"
import { signIn } from "../../services/auth"
import { LoginvalidationSchema } from "../../utils/form-utils"

const AssesmentQuestions = ({ listOfQuestions }) => {
    const [proccesing, setProccesing] = useState(false)
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: async (values) => {
            setProccesing(true)
            console.log("I am here")
        },
        validationSchema: LoginvalidationSchema,
    })
    return (
        <div className="grid grid rows-3 w-full mx-auto text-center text-white bg-cyan-200 h-screen">
            <form onSubmit={formik.handleSubmit}>
                {listOfQuestions.map((q, questionsIndex) => {
                    console.log(q)
                    return (
                        < >
                            <div key={`question${questionsIndex}`}>
                                <div> Question {questionsIndex + 1} </div>
                                <div> {q.question}  </div>
                                <div> {q.type === "multiplechoice" ?
                                    <>{q.options.map((o, i) => {
                                        return (
                                            <div key={`option${i}`}>
                                                <input
                                                    type="radio"
                                                    id={`option${i}`}
                                                    name={`option${i}`}
                                                    value=""
                                                />
                                                {o}
                                            </div>
                                        )

                                    }

                                    )}</> :
                                    <div>
                                        Answer: <input classname="border-current border-2 text-black rounded shadow-inner border-cyan-300 text-lg" type="text" name="answer" id="answer" />
                                    </div>

                                } </div>
                            </div>

                        </>
                    );
                })}
                <input className=" m-3 bg-white hover:bg-blue-700 font-bold text-cyan-300 py-2 px-4 md: w-1/5 rounded-full place-items-center" type="submit" name='submit' value="Submit" />
            </form >
        </div>



    )

}
export default AssesmentQuestions
3