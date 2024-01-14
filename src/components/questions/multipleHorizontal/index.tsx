"use client"

import { useForm } from "@/hooks/FormContext";
import { Button, ButtonGroup, Container, Text } from "./styles"
import { useEffect, useState } from "react";

type MultipleHorizontalProps = {
  content: string;
  answer?: number[];
  itens: {
    value: number;
    description: string;
  }[];
}

export const MultipleHorizontalQuestion = (function ({content, itens, answer=[]}:MultipleHorizontalProps){
  const [responses, setResponses] = useState<number[]>([...answer]);
  const {updateQuestion} = useForm()

  function changeAnswerQuestion(optionClicked :number) {
    const newResponses = responses.includes(optionClicked)
      ? responses.filter((response) => response !== optionClicked)
      : [...responses, optionClicked]

    setResponses(newResponses)
  }

  useEffect(() => {
    updateQuestion(content, 6, true, responses);
  }, [responses])

  return(
    <Container>
          
      <Text>{content}</Text>
      <ButtonGroup>
        {itens.map((item, index)=>{
          return(
            <Button key={index} value={item.value} $selected={responses.includes(item.value)} onClick={()=>changeAnswerQuestion(item.value)}>{item.description} </Button>
          )
        })}
      </ButtonGroup>

    </Container>
  )
})