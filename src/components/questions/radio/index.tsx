"use client"

import { MouseEvent } from "react";
import { Container, Label, Radio, RadioGroup, Text } from "./styles"
import { useForm } from "@/hooks/FormContext";

type RadioQuestionProps = {
  content: string;
  answer?: number | string;
  itens: {
    value: number;
    description: string;
  }[];
}

export const RadioQuestion = (function ({ content, itens, answer = 0 }: RadioQuestionProps) {  
  const { updateQuestion } = useForm()

  function changeAnswerQuestion(event: MouseEvent<HTMLInputElement>) {    
    const inputValue = (event.target as HTMLInputElement).value    
    updateQuestion(content, 5, null, inputValue)
  }

  return (
    <Container>

      <Text>{content}</Text>
      <RadioGroup>
        {itens.map((item, index)=>{
          return (
            <Label  htmlFor={item.description}>
              <Radio key={index} id={item.description} name="radio" value={item.value} defaultChecked={item.value == answer} onClick={(event: MouseEvent<HTMLInputElement>)=>changeAnswerQuestion(event)}></Radio>
              <Text>{item.description}</Text>
            </Label>
          )
        })}

      </RadioGroup>
    </Container>
  )
})