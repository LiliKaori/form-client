"use client"

import { Container, Option, Select } from "./styles"

type SelectQuestionProps = {
  content: string;
  mandatory: boolean;
  answer?: number;
  itens: {
    value: number;
    description: string;
  }[];
}

export const SelectQuestion = (function ({content,mandatory, itens, answer}: SelectQuestionProps) {
  return (
    <Container>
      <Select defaultValue={answer}>
        <Option disabled>{content}</Option>
        {itens.map((item, index) => {
          return (
            <Option key={index} value={item.value}>{item.description}</Option>
          )
        })}
        
      </Select>
    </Container>
  )
})