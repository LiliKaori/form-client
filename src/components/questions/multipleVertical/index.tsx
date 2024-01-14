"use client"

import { useForm } from "@/hooks/FormContext";
import { Checkbox, CheckboxGroup, Container, Label, Text } from "./styles"
import { ChangeEvent, useEffect, useState } from "react";

type MultipleVerticalProps = {
  content: string;  
  itens: {
    value: number;
    description: string;
  }[];
  answer?: number[];
}

export const MultipleVerticalQuestion = (function ({ content, itens, answer=[]}: MultipleVerticalProps) {
  const [responses, setResponses] = useState<number[]>([...answer])
  const { updateQuestion } = useForm()

  function changeAnswerQuestion(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target as HTMLInputElement
    const numberValue = parseInt(value, 10)
    
    const newResponses = responses.includes(numberValue)
      ? responses.filter((response)=> response !==numberValue)
      : [...responses,numberValue]
    setResponses(newResponses)
  }

  useEffect(()=>{
    updateQuestion(content, 6, false, responses);
  }, [responses])

  return (
    <Container>

      <Text>{content}</Text>
      <CheckboxGroup>
        {itens.map((item, index) => {
          return (
            <Label key={index} htmlFor={"option_" + item.value}>
              <Checkbox id={"option_" + item.value} value={item.value} onChange={(event: ChangeEvent<HTMLInputElement>) => changeAnswerQuestion(event)} defaultChecked={answer.includes(item.value)}></Checkbox>
              <Text>{item.description}</Text>
            </Label>
          )
        })}

      </CheckboxGroup>

    </Container>
  )
})