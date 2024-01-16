"use client"

import { MouseEvent, useEffect, useState } from "react";
import { Container, Label, Radio, RadioGroup, Text, Title } from "./styles"
import { useForm } from "@/hooks/FormContext";

type AssessmentQuestionProps = {  
  content: string;
  numberQuestion: number;
  mandatory: boolean;
  answer?: number | string | number[] | null | undefined;
}

export const AssessmentQuestion = (function ({ content, numberQuestion, mandatory, answer = 0 }: AssessmentQuestionProps) {  
  const [response, setResponse] = useState<number | string | null | undefined>(typeof answer != "object" ? answer : 0)
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
      <Text><span>{numberQuestion + ". "}</span>{content} {mandatory ? "" : <span>(opicional)</span>}</Text>
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