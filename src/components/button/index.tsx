import { ComponentProps } from 'react';
import { Container } from './styles'
import { apiFrontTest, apiPost } from '@/services/api';
import { paths } from '@/services/paths';
import { useForm } from '@/hooks/FormContext';

type ButtonProps = ComponentProps<'button'> & {
  text: string;
  status?: "success" | "error" | undefined;
}

export const Button = (function ({ text, status }: ButtonProps) {
  
  const {questions} = useForm();

  async function send(status: "success" | "error" | undefined) {

    console.log(status)

    const path = (status === "success") ? paths.sendSuccess : (status === "error") ? paths.sendError : "/";
    const { data } = await (status === "success" || status === "error" ? apiFrontTest.get(path) : apiPost.post("/"));

    if (status && data.error) {
      console.log(data.error)
    } else if (status) {
      console.log("sucesso")
    } else {
      console.log(questions)
      questions.map((question, index)=>{
        console.log(question.mandatory, question.answerValue, question.answerArray?.length)
        
        if(question.typeQuestion == 6){
          if (question.mandatory && question.answerArray == undefined || question.mandatory && question.answerArray?.length == 0) {
            console.log("Falta preencher pergunta número " + index)
          }
        }else{
          if (question.mandatory && question.answerValue == null) {
            console.log("Falta preencher pergunta número " + index)
          }
        }
        
      })
      
    }
    // console.log(data)

  }


  return (
    <Container $type={status} onClick={() => send(status)}>{text} </Container>
  )
})