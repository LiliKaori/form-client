"use client"

import { Poppins } from "next/font/google";
import { Container, Text, TextArea } from "./styles"
import { useForm } from "@/hooks/FormContext";
import { ChangeEvent } from "react";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

type TextQuestionProps = {
  content: string;
  answer?: number | string;
}

export const TextQuestion = (function ({ content, answer }: TextQuestionProps) {
  const { updateQuestion } = useForm()

  function changeAnswerQuestion(event: ChangeEvent<HTMLTextAreaElement>) {
    updateQuestion(content, 3, null, event.target.value)
  }

  return (
    <Container>
      <Text>{content}</Text>

      <TextArea className={poppins.className} defaultValue={answer} placeholder="Digite aqui..." onChange={(event: ChangeEvent<HTMLTextAreaElement>) => changeAnswerQuestion(event)} />

    </Container>
  )
})