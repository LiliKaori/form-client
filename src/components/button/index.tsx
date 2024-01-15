import { ComponentProps } from 'react';
import { Container } from './styles'
import { apiFrontTest, apiPost } from '@/services/api';
import { paths } from '@/services/paths';
import { useForm } from '@/hooks/FormContext';
import Swal from 'sweetalert2';
import { title } from 'process';
import { theme } from '@/styles/theme';

type ButtonProps = ComponentProps<'button'> & {
  text: string;
  status?: "success" | "error" | undefined;
}

export const Button = (function ({ text, status }: ButtonProps) {

  const { questions } = useForm();

  async function send(status: "success" | "error" | undefined) {

    console.log(status)

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
      console.log(data.error)
    } else if (status) {
      Swal.fire({
        title: 'Pesquisa enviada com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: theme.colors.success
      })
      console.log("sucesso")
    } else {
      console.log(questions)

      let missingQuestions: number[]= [];
      questions.map((question, index) => {
        console.log(question.mandatory, question.answerValue, question.answerArray?.length)
        
        if (question.typeQuestion == 6) {
          if (question.mandatory && question.answerArray == undefined || question.mandatory && question.answerArray?.length == 0) {
            missingQuestions.push(index)
            console.log("Falta preencher pergunta número " + index)
          }
        } else {
          if (question.mandatory && question.answerValue == null) {
            missingQuestions.push(index)
            console.log("Falta preencher pergunta número " + index)
          }
        }
      })

      console.log(missingQuestions)
      if (missingQuestions.length != 0) {
        let text = 'As questões '

        missingQuestions.forEach((number, index) => {
          text += index < missingQuestions.length - 1 ? number + ', ' : number
        })
        // missingQuestions.map((number)=> text += number,)
        text += " são obrigatórias."

        Swal.fire({
          title: 'Atenção!',
          text: text,
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: theme.colors.warnig
        })
      }

    }
    // console.log(data)

  }


  return (
    <Container $type={status} onClick={() => send(status)}>{text} </Container>
  )
})