"use client"

import { Poppins } from "next/font/google";
import { Container, Text, TextArea } from "./styles"

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

type TextQuestionProps = {
  content: string;
  mandatory: boolean;
}

export const TextQuestion = (function ({ content, mandatory }: TextQuestionProps) {
  return (
    <Container>
      <Text>{content}</Text>

      <TextArea className={poppins.className} required={mandatory} placeholder="Digite aqui..."/>

    </Container>
  )
})