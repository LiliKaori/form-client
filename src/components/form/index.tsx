"use client"

import { AssessmentQuestion } from "../questions/assessment";
import { BinaryQuestion } from "../questions/binary";
import { MultipleHorizontalQuestion } from "../questions/multipleHorizontal";
import { MultipleVerticalQuestion } from "../questions/multipleVertical";
import { SelectQuestion } from "../questions/select";
import { StartQuestion } from "../questions/star";
import { TextQuestion } from "../questions/text";
import { Container } from "./styles";

export const Form = (function (){
  return (
    <Container>
      <StartQuestion />
      <AssessmentQuestion />
      <TextQuestion />
      <SelectQuestion />
      <BinaryQuestion />
      <MultipleVerticalQuestion />
      <MultipleHorizontalQuestion />
    </Container>
  )
});