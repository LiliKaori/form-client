import { ComponentProps } from 'react';
import { Container } from './styles'
import { apiFrontTest, apiPost } from '@/services/api';
import { paths } from '@/services/paths';
import { useForm } from '@/hooks/FormContext';
import Swal from 'sweetalert2';
import { theme } from '@/styles/theme';

type ButtonProps = ComponentProps<'button'> & {
  text: string;
  status?: "success" | "error" | undefined;
}

export const Button = (function ({ text, status }: ButtonProps) {

  const { questions } = useForm();

  async function send(status: "success" | "error" | undefined) {

    const path = (status === "success") ? paths.sendSuccess : (status === "error") ? paths.sendError : "/";
    const { data } = await (status === "success" || status === "error" ? apiFrontTest.get(path) : apiPost.post("/"));

    if (status && data.error) {
      Swal.fire({
        title: 'Erro!',
        text: data.error,
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: theme.colors.error
      })
      
    } else if (status) {
      Swal.fire({
        title: 'Pesquisa enviada com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: theme.colors.success
      })
      
    } else {

      let missingQuestions: number[] = [];
      questions.map((question, index) => {
        console.log(index, question.mandatory, question.answerValue)

        if (question.typeQuestion == 6) {
          if (question.mandatory && (question.answerValue === undefined ||
            (typeof question.answerValue === 'string' && question.answerValue.length === 0) ||
            (Array.isArray(question.answerValue) && question.answerValue.length === 0))) {
            missingQuestions.push(index)
          }
        } else {
          if (question.mandatory && question.answerValue == null) {
            missingQuestions.push(index)            
          }
        }
      })

      
      if (missingQuestions.length != 0) {
        let text = 'As questões '

        missingQuestions.forEach((number, index) => {
          text += index < missingQuestions.length - 1 ? (number + 1) + ', ' : number + 1
        })
        
        text += " precisam ser respondidas."

        Swal.fire({
          title: 'Atenção!',
          text: text,
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: theme.colors.warnig
        })
      } else {
        Swal.fire({
          title: 'Pesquisa enviada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: theme.colors.success
        })
      }
    }
  }


  return (
    <Container $type={status} onClick={() => send(status)}>{text} </Container>
  )
})