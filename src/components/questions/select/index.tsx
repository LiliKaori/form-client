"use client"

import { useForm } from "@/hooks/FormContext";
import { Container, Option, Select } from "./styles"
import { ChangeEvent } from "react";

type SelectQuestionProps = {
  content: string;
  answer?: number | string;
  itens: {
    value: number;
    description: string;
  }[];
}

export const SelectQuestion = (function ({content, itens, answer}: SelectQuestionProps) {
  const { updateQuestion } = useForm();

  function changeAnswerQuestion(event: ChangeEvent<HTMLSelectElement>) {
    updateQuestion(content, 4, null, event.target.value)
  }
  
  return (
    <Container>
      <Select defaultValue={answer} onChange={(event: ChangeEvent<HTMLSelectElement>)=> changeAnswerQuestion(event)}>
        <Option disabled>{content}</Option>
        {itens.map((item, index) => {
          return (
            <Option key={index} value={item.value} style={{padding:20}}>{item.description} </Option>
          )
        })}
        
      </Select>
    </Container>
  )
})