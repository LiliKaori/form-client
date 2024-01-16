"use client"

import { MouseEvent } from "react";
import { Container, Label, Radio, RadioGroup, Text } from "./styles"
import { useForm } from "@/hooks/FormContext";

type RadioQuestionProps = {
  content: string;
  numberQuestion: number;
  mandatory: boolean;
  answer?: number | string | number[] | null | undefined;
  itens: {
    value: number;
    description: string;
  }[];
}

export const RadioQuestion = (function ({ content, itens, numberQuestion, mandatory, answer = 0 }: RadioQuestionProps) {  
  const { updateQuestion } = useForm()

  function changeAnswerQuestion(event: MouseEvent<HTMLInputElement>) {    
    const inputValue = (event.target as HTMLInputElement).value    
    updateQuestion(content, 5, undefined, inputValue)
  }

  return (
    <Container>

      <Text><span>{numberQuestion + ". "}</span>{content} {mandatory ? "" : <span>(opicional)</span>}</Text>
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