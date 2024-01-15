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
  updateQuestion: (content: string, typeQuestion: number, horizontal?:boolean| undefined, newAnswer?: number | string | number[] ) => void;
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
      // console.log(data.itens)
      // console.log(data)
      if (!data.error) {
        setQuestions(data.itens)
      }

    }
    loadQuestions()

  }, [])


  const updateQuestion = (content: string, typeQuestion: number, horizontal: boolean | undefined = undefined, newAnswer?: number | string | number[]) => {
    //Método 1
    questions.filter((question: QuestionProps) => {
      // console.log(typeof newAnswer == "number", newAnswer)
      // console.log("Começar ifs", question.horizontal == horizontal)
      if (question.content === content && question.typeQuestion === typeQuestion && question.horizontal == horizontal) {
        // console.log("primeiro if")
        if (typeof newAnswer == "number" || typeof newAnswer == "string") {
          // console.log("segundo if")
          question.answerValue = newAnswer
        } else {
          // console.log("else")
          question.answerArray = newAnswer
        }
        // console.log("atualizando questions")
        setQuestions([...questions])
      }
      // console.log("não entrou em nenhum if")
    })
    

    //Método 2
    // console.log(typeof newAnswer == "number", newAnswer)
    // const index = questions.findIndex((question: QuestionProps) =>
    //   question.content === content &&
    //   question.typeQuestion === typeQuestion &&
    //   question.horizontal === horizontal
    // );

    // if (index !== -1) {
    //   const updatedQuestions: QuestionProps[] = [...questions];

    //   const updatedQuestion ={
    //     ...updatedQuestions[index],
    //   }

    //   if (typeof newAnswer == "number" || typeof newAnswer == "string") {
    //     updatedQuestion.answerValue = newAnswer;
    //   } else {
    //     updatedQuestion.answerArray = newAnswer;
    //   }

    //   updatedQuestions[index] = updatedQuestion;
      
    //   setQuestions(updatedQuestions);
    // }

    // console.log(questions)
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
