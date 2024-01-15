"use client"

import { useForm } from "@/hooks/FormContext";
import { Container, Option, Select } from "./styles"
import { ChangeEvent, useEffect, useState } from "react";

type SelectQuestionProps = {
  content: string;
  numberQuestion: number;
  mandatory: boolean;
  answer?: number | string | null | undefined;
  itens: {
    value: number;
    description: string;
  }[];
}

export const SelectQuestion = (function ({ content, itens, numberQuestion, mandatory, answer=null }: SelectQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(answer);
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
    updateQuestion(content, 4, undefined, selectedAnswer)
  },[selectedAnswer])

  return (
    <Container>
      <Select defaultValue={selectedAnswer!= null ? selectedAnswer : undefined} onChange={(event: ChangeEvent<HTMLSelectElement>) => changeAnswerQuestion(event)}>
        <Option selected disabled><span>{numberQuestion + ". "}</span>{content} {mandatory ? "" : <span>(opicional)</span>}</Option>
        {itens.map((item, index) => {
          return (
            <Option key={index} value={item.value} style={{ padding: 20 }}>{item.description} </Option>
          )
        })}

      </Select>
    </Container>
  )
})