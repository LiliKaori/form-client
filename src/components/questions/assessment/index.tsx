"use client"

import { MouseEvent, useEffect, useState } from "react";
import { Container, Label, Radio, RadioGroup, Text, Title } from "./styles"
import { useForm } from "@/hooks/FormContext";

type AssessmentQuestionProps = {  
  content: string;
  answer?: number | string;
}

export const AssessmentQuestion = (function ({ content, answer = 0 }: AssessmentQuestionProps) {  
  const [response, setResponse] = useState<number | string>(answer)
  const {updateQuestion} = useForm();

  function changeAnswerQuestion(event: MouseEvent<HTMLInputElement>) {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10) 
    setResponse(inputValue)       
  }

  useEffect(()=>{
    updateQuestion(content, 2, undefined, response)
  },[response])

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
              <Radio id={"option" + grade} name="grade" value={grade} defaultChecked={grade == parseInt(answer as string, 10)} onClick={(event: MouseEvent<HTMLInputElement>) => changeAnswerQuestion(event)}></Radio>
                <Text>{grade}</Text>
              </Label>
            
          )
        })}
      </RadioGroup>
    </Container>
  )
})