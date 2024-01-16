"use client"

import { AssessmentQuestion } from "../questions/assessment";
import { RadioQuestion } from "../questions/radio";
import { MultipleHorizontalQuestion } from "../questions/multipleHorizontal";
import { MultipleVerticalQuestion } from "../questions/multipleVertical";
import { SelectQuestion } from "../questions/select";
import { StarQuestion } from "../questions/star";
import { TextQuestion } from "../questions/text";
import { Box, ButtonGroup, Container, Title} from "./styles";
import { Button } from "../button";
import { useForm } from "@/hooks/FormContext";

export const Form = (function () {
  const { questions } = useForm()
  
  type QuestionProps = {
    typeQuestion: number;
    content: string;
    mandatory: boolean;
    answerValue?: number | string | number[] | null | undefined;
    horizontal?: boolean;
    itens: {
      value: number;
      description : string;
      }[];    
  }

  return (
    <Container>      
      <Box>
        <Title>Pesquisa de Satisfação</Title>
        {questions &&
          questions.map((question: QuestionProps, index) => {
            if (question.typeQuestion == 1) {
              return (<StarQuestion key={index} content={question.content} numberQuestion={index+1} mandatory={question.mandatory} answer={question.answerValue} />)
            } else if (question.typeQuestion == 2) {
              return (<AssessmentQuestion key={index} content={question.content} numberQuestion={index + 1} mandatory={question.mandatory} answer={question.answerValue} />)
            } else if (question.typeQuestion == 3) {
              return (<TextQuestion key={index} content={question.content} numberQuestion={index + 1} mandatory={question.mandatory} answer={question.answerValue}/>)
            } else if (question.typeQuestion == 4) {
              return (<SelectQuestion key={index} content={question.content} numberQuestion={index + 1} mandatory={question.mandatory} itens={question.itens} answer={question.answerValue} />)
            } else if (question.typeQuestion == 5) {
              return (<RadioQuestion key={index} content={question.content} numberQuestion={index + 1} mandatory={question.mandatory} itens={question.itens} answer={question.answerValue} />)
            } else if (question.typeQuestion == 6 && question.horizontal) {
              return (<MultipleHorizontalQuestion key={index} content={question.content} itens={question.itens} numberQuestion={index + 1} mandatory={question.mandatory} answer={question.answerValue} />)
            } else {
              return (<MultipleVerticalQuestion key={index} content={question.content} itens={question.itens} numberQuestion={index + 1} mandatory={question.mandatory} answer={question.answerValue} />)
            }

          })
        }
        <ButtonGroup>
          <Button text="Enviar Fake Post" />
        </ButtonGroup>

        <ButtonGroup>
          <Button text="Enviar Sucesso" status="success" />
          <Button text="Enviar Erro" status="error" />
        </ButtonGroup>
      </Box>
    </Container>
  )
});