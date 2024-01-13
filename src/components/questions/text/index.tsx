"use client"

import { Container, Text, TextArea } from "./styles"

type TextQuestionProps = {
  content: string;
  mandatory: boolean;
}

export const TextQuestion = (function ({ content, mandatory }: TextQuestionProps) {
  return (
    <Container>
      <Text>{content}</Text>

      <TextArea required={mandatory}/>

    </Container>
  )
})