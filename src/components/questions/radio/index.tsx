"use client"

import { Container, Label, Radio, RadioGroup, Text } from "./styles"

type RadioQuestionProps = {
  content: string;
  mandatory: boolean;
  answer?: number;
  itens: {
    value: number;
    description: string;
  }[];
}

export const RadioQuestion = (function ({ content, mandatory, itens, answer = 0 }: RadioQuestionProps) {
  return (
    <Container>

      <Text>{content}</Text>
      <RadioGroup>
        {itens.map((item, index)=>{
          return (
            <Label  htmlFor={item.description}>
              <Radio key={index} id={item.description} name="radio" value={item.value} required={mandatory} checked={item.value == answer}></Radio>
              <Text>{item.description}</Text>
            </Label>
          )
        })}

      </RadioGroup>
    </Container>
  )
})