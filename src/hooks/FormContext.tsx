import React, { createContext, useContext, useState } from "react";

interface IForm {
  id: number;
  question: number;
  answer: string;
}

type FormContextType = {
  forms: IForm[];
  saveForm: (form: IForm) => void;
  updateForm: (id: number) => void;
}

export const FormContext = createContext<FormContextType | null>(null)

interface ReactProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<ReactProps> = ({ children }) => {
  // const form = {question: 1, answer: "responta aqui"}
  const [forms, setForms] = useState<IForm[]>([
    {
      id: 1,
      question: 1, answer: "responta aqui"
    },
    {
      id: 2,
      question: 2, answer: "outra responta"
    }
  ])

  const saveForm = (form: IForm) => {
    const newForm: IForm = {
      id: Math.random(),
      question: form.question,
      answer: form.answer,
    }
    setForms([...forms, newForm])
  }

  const updateForm = (id: number) => {
    forms.filter((form: IForm) => {
      if (form.id === id) {
        form.answer = "resposta alterada"
        setForms([...forms])
      }
    })
  }

  return (
    <FormContext.Provider value={{forms, saveForm, updateForm}}>
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
