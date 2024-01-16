"use client"

import { useForm } from "@/hooks/FormContext";
import { Container, Option, Select } from "./styles"
import { ChangeEvent, useEffect, useState } from "react";

type SelectQuestionProps = {
  content: string;
  numberQuestion: number;
  mandatory: boolean;
  answer?: number | string | number[] | null | undefined;
  itens: {
    value: number;
    description: string;
  }[];
}

export const SelectQuestion = (function ({ content, itens, numberQuestion, mandatory, answer=undefined }: SelectQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(typeof answer == "number" ? answer : undefined);
  const { updateQuestion } = useForm();

  function changeAnswerQuestion(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target as HTMLSelectElement
    let response: number | undefined = undefined;
    
    if (value != undefined){
      response = parseInt(value, 10)
    }
    
    setSelectedAnswer(response)
    
  }

  useEffect(()=>{
    updateQuestion(content, 4, undefined, selectedAnswer)
  },[selectedAnswer])

  return (
    <Container>
      <Select defaultValue={selectedAnswer} onChange={(event: ChangeEvent<HTMLSelectElement>) => changeAnswerQuestion(event)}>
        <Option>`${numberQuestion}. ${content} ${mandatory ? "" : "(opcional)"}`</Option>
        {itens.map((item, index) => {
          return (
            <Option key={index} value={item.value}>{item.description} </Option>
          )
        })}

      </Select>
    </Container>
  )
})