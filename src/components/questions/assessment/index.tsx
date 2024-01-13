"use client"

import { Container, Label, Radio, RadioGroup, Text, Title } from "./styles"

type AssessmentQuestionProps = {
  content: string;
  mandatory: boolean;
  answer?: number;
}

export const AssessmentQuestion = (function ({ content, mandatory, answer = 0 }: AssessmentQuestionProps) {
  const numberGrade = 10;
  const arrayGrade: number[] = Array.from({ length: numberGrade })
  return (
    <Container>
      <Title>Título da pergunta radio deve ficar aqui</Title>
      <Text>{content}</Text>
      <RadioGroup>
        {arrayGrade.map((_, index) => {
          const grade = index + 1;
          return (
            <>
              <Label htmlFor={"option" + grade}>
                <Radio key={grade} id={"option" + grade} name="grade" value={grade} checked={grade == answer} required={mandatory}></Radio>
                <Text>{grade}</Text>
              </Label>
            </>    
          )
        })}
      </RadioGroup>
    </Container>
  )
})