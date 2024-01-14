"use client"

import { theme } from "@/styles/theme"
import { Container, StarGroup, Text, Title } from "./styles"
import { Star } from '@phosphor-icons/react'
import { useState } from "react"
import { useForm } from "@/hooks/FormContext"


type StarQuestionProps = {
  content: string;
  answer?: number | string;
}

export const StartQuestion = (function ({ content, answer = 0 }: StarQuestionProps) {
  const [response, setResponse] = useState(answer);

  const {updateQuestion}= useForm()

  function changeAnswerQuestion(newStar: number) {    
    setResponse(newStar)
    updateQuestion(content, 1, null, newStar)
  }
  
  const totalStar = 5;
  const arrayStar : number[]= Array.from({ length: totalStar })


  return (
    <Container>
      <Title>Título da pergunta star deve ficar aqui</Title>
      <Text>{content}</Text>
      <StarGroup>
        {arrayStar.map((_, index) => {
          return (            
            <Star key={index + 1} size={40} color={index < parseInt(response as string, 10) ? theme.colors.primary : theme.colors.muted} weight="fill" 
              onClick={() => changeAnswerQuestion(index+1)} name="star"
              />
          )
        })}
        
      </StarGroup>

    </Container>
  )
})