"use client"

import { theme } from "@/styles/theme"
import { Container, StarGroup, Text, Title } from "./styles"
import { Star } from '@phosphor-icons/react'


type StarQuestionProps = {
  content: string;
  mandatory: boolean;
  answer?: number;
}

export const StartQuestion = (function ({ content, mandatory, answer = 0 }: StarQuestionProps) {
  const numberStar = 5;
  const arrayStar : number[]= Array.from({ length: numberStar })

  return (
    <Container>
      <Title>Título da pergunta star deve ficar aqui</Title>
      <Text>{content}</Text>
      <StarGroup>
        {arrayStar.map((_, index) => {
          return (            
              <Star key={index} size={40} color={index < answer ? theme.colors.primary : theme.colors.muted} weight="fill" />
          )
        })}
        
      </StarGroup>

    </Container>
  )
})