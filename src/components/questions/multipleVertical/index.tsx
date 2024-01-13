"use client"

import { Checkbox, CheckboxGroup, Container, Label, Text, Title } from "./styles"

type MultipleVerticalProps = {
  content: string;
  mandatory: boolean;
  itens: {
    value: number;
    description: string;
  }[];
}

export const MultipleVerticalQuestion = (function ({content, mandatory, itens}: MultipleVerticalProps){
  return(
    <Container>
            
      <Text>{content}</Text>
      <CheckboxGroup>
        {itens.map((item, index)=>{
          return(
            <Label key={index} htmlFor="1">
              <Checkbox id="1" name="nota" value={item.value} required={mandatory}></Checkbox>
              <Text>{item.description}</Text>
            </Label>
          )
        })}
        
      </CheckboxGroup>
      

      

    </Container>
  )
})