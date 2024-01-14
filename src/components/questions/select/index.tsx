"use client"

import { useForm } from "@/hooks/FormContext";
import { Container, Option, Select } from "./styles"
import { ChangeEvent, useEffect, useState } from "react";

type SelectQuestionProps = {
  content: string;
  answer?: number | string;
  itens: {
    value: number;
    description: string;
  }[];
}

export const SelectQuestion = (function ({ content, itens, answer='' }: SelectQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | string>(answer);
  const { updateQuestion } = useForm();

  function changeAnswerQuestion(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target as HTMLSelectElement
    let response: number | string='';
    
    if(value!=''){
      response = parseInt(value, 10)
    }
    
    setSelectedAnswer(response)
    
  }

  useEffect(()=>{
    updateQuestion(content, 4, null, selectedAnswer)
  },[selectedAnswer])

  return (
    <Container>
      <Select defaultValue={selectedAnswer} onChange={(event: ChangeEvent<HTMLSelectElement>) => changeAnswerQuestion(event)}>
        <Option disabled value=''>{content}</Option>
        {itens.map((item, index) => {
          return (
            <Option key={index} value={item.value} style={{ padding: 20 }}>{item.description} </Option>
          )
        })}

      </Select>
    </Container>
  )
})