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
  numberQuestion: number;
  mandatory: boolean;
  answer?: number | string | number[] | null | undefined;
}

export const TextQuestion = (function ({ content, numberQuestion, mandatory, answer }: TextQuestionProps) {
  const { updateQuestion } = useForm()

  function changeAnswerQuestion(event: ChangeEvent<HTMLTextAreaElement>) {
    updateQuestion(content, 3, undefined, event.target.value)
  }

  return (
    <Container>
      <Text><span>{numberQuestion + ". "}</span>{content} {mandatory ? "" : <span>(opicional)</span>}</Text>

      <TextArea className={poppins.className} defaultValue={typeof answer != "object" ? answer : undefined} placeholder="Digite aqui..." onChange={(event: ChangeEvent<HTMLTextAreaElement>) => changeAnswerQuestion(event)} />

    </Container>
  )
})