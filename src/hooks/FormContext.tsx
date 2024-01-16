import { apiFrontTest } from "@/services/api";
import { paths } from "@/services/paths";
import React, { createContext, useContext, useEffect, useState } from "react";


type QuestionProps = {
  typeQuestion: number;
  content: string;
  mandatory: boolean;
  answerValue?: number | string | number[] | null | undefined;
  horizontal?: boolean;
  itens: {
    value: number;
    description: string;
  }[];
}

type FormContextType = {
  questions: QuestionProps[];
  updateQuestion: (content: string, typeQuestion: number, horizontal?: boolean | undefined, newAnswer?: number | string | number[] | undefined | null) => void;
}

export const FormContext = createContext<FormContextType | null>(null)

interface ReactProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<ReactProps> = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionProps[]>([])

  useEffect(() => {

    async function loadQuestions() {
      const { data } = await apiFrontTest.get(paths.list)
      
      if (!data.error) {
        setQuestions(data.itens)
      }

    }
    loadQuestions()

  }, [])


  const updateQuestion = (content: string, typeQuestion: number, horizontal: boolean | undefined = undefined, newAnswer?: number | string | number[] | null) => {
    
    questions.filter((question: QuestionProps) => {
      
      if (question.content === content && question.typeQuestion === typeQuestion && question.horizontal == horizontal) {
        
          question.answerValue = newAnswer
        
        setQuestions([...questions])
      }
      
    })
  }


  return (
    <FormContext.Provider value={{ questions, updateQuestion }}>
      {children}
    </FormContext.Provider>
  )


}

export const useForm = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error("useForm must be use with FormContext")
  }
  return context
}
