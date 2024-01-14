import { apiFrontTest } from "@/services/api";
import { paths } from "@/services/paths";
import React, { createContext, useContext, useEffect, useState } from "react";


type QuestionProps = {
  typeQuestion: number;
  content: string;
  mandatory: boolean;
  answerValue?: number | string;
  answerArray?: number[];
  horizontal?: boolean;
  itens: {
    value: number;
    description: string;
  }[];
}

type FormContextType = {  
  questions: QuestionProps[];
  updateQuestion: (content: string, typeQuestion: number, horizontal?:boolean| null, newAnswer?: number | string | number[] ) => void;
}

export const FormContext = createContext<FormContextType | null>(null)

interface ReactProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<ReactProps> = ({ children }) => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {

    async function loadQuestions() {
      const { data } = await apiFrontTest.get(paths.list)
      console.log(data.itens)
      // console.log(data)
      if (!data.error) {
        setQuestions(data.itens)
      }

    }
    loadQuestions()

  }, [])


  const updateQuestion = (content: string, typeQuestion: number, horizontal:boolean|null=null, newAnswer?: number | string | number[]) => {
    questions.filter((question: QuestionProps) => {
      console.log(typeof newAnswer == "number", newAnswer)
      if (question.content === content && question.typeQuestion === typeQuestion && question.horizontal === horizontal) {
        if (typeof newAnswer == "number" || typeof newAnswer == "string") {
          question.answerValue = newAnswer
        } else {
          question.answerArray = newAnswer
        }

        setQuestions([...questions])
      }
    })
    console.log(questions)
  }


  return (
    <FormContext.Provider value={{ questions, updateQuestion }}>
      {children}
    </FormContext.Provider>
    // .Provider value= {{form}}></FormContext.Provider>

  )


}

export const useForm = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error("useForm must be use with FormContext")
  }
  return context
}
