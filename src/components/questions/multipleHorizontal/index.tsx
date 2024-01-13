"use client"

import { Button, ButtonGroup, Container, Text } from "./styles"

type MultipleHorizontalProps = {
  content: string;
  mandatory: boolean;
  answer?: number;
  itens: {
    value: number;
    description: string;
  }[];
}

export const MultipleHorizontalQuestion = (function ({content, mandatory, itens, answer=0}:MultipleHorizontalProps){
  return(
    <Container>
          
      <Text>{content}</Text>
      <ButtonGroup>
        {itens.map((item, index)=>{
          return(
            <Button key={index} value={item.value}>{item.description}</Button>
          )
        })}
      </ButtonGroup>
      

      

    </Container>
  )
})