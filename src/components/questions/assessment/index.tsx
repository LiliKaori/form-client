"use client"

import { MouseEvent } from "react";
import { Container, Label, Radio, RadioGroup, Text, Title } from "./styles"
import { useForm } from "@/hooks/FormContext";

type AssessmentQuestionProps = {  
  content: string;
  answer?: number | string;
}

export const AssessmentQuestion = (function ({ content, answer = 0 }: AssessmentQuestionProps) {  
  const {updateQuestion} = useForm();

  function changeAnswerQuestion(event: MouseEvent<HTMLInputElement>) {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10)    
    updateQuestion(content, 2, null, inputValue)
  }

  const numberGrade = 10;
  const arrayGrade: number[] = Array.from({ length: numberGrade })
  return (
    <Container>
      <Title>Título da pergunta de avaliação deve ficar aqui</Title>
      <Text>{content}</Text>
      <RadioGroup key={Math.random()}>
        {arrayGrade.map((_, index) => {
          const grade: number = index + 1;
          return (
            
              <Label key={index} htmlFor={"option" + grade}>
                <Radio id={"option" + grade} name="grade" value={grade} defaultChecked={grade == answer} onClick={(event: MouseEvent<HTMLInputElement>) => changeAnswerQuestion(event)}></Radio>
                <Text>{grade}</Text>
              </Label>
            
          )
        })}
      </RadioGroup>
    </Container>
  )
})