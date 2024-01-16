"use client"

import { Container, Icon, StarGroup, Text, Title } from "./styles"
import { useState } from "react"
import { useForm } from "@/hooks/FormContext"


type StarQuestionProps = {
  content: string;
  numberQuestion: number;
  mandatory: boolean;
  answer?: number | string | number[] | null | undefined;
}

export const StarQuestion = (function ({ content, numberQuestion, mandatory, answer = 0 }: StarQuestionProps) {
  const [response, setResponse] = useState<number>( typeof answer == "number" ? answer : 0 );

  const {updateQuestion}= useForm()

  function changeAnswerQuestion(newStar: number) {    
    setResponse(newStar)
    updateQuestion(content, 1, undefined, newStar)
  }
  
  const totalStar = 5;
  const arrayStar : number[]= Array.from({ length: totalStar })


  return (
    <Container>
      <Title>Título da pergunta star deve ficar aqui</Title>
      <Text><span>{numberQuestion + ". "}</span>{content} {mandatory ? "" : <span>(opicional)</span>}</Text>
      <StarGroup>
        {arrayStar.map((_, index) => {
          const active = index < response
          return (
            <Icon key={index + 1} $active={active}
              onClick={() => changeAnswerQuestion(index+1)}
              />
          )
        })}
        
      </StarGroup>

    </Container>
  )
})