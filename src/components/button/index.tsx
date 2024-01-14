import { ComponentProps } from 'react';
import { Container } from './styles'
import { sendError } from 'next/dist/server/api-utils';
import { apiFrontTest, apiPost } from '@/services/api';
import { paths } from '@/services/paths';

type ButtonProps = ComponentProps<'button'>& {
    text: string;
    status?: "success" | "error" | undefined;
    formdata?: string;
}

export const Button = (function ({text, status, formdata}: ButtonProps){
  async function send(status: "success" | "error" | undefined){
    
    console.log(status)

    const path = (status === "success") ? paths.sendSuccess : (status === "error") ? paths.sendError : "/";
    const { data } = await (status === "success" || status === "error" ? apiFrontTest.get(path) : apiPost.post("/"));
    
    if(status && data.error){
      console.log(data.error)
    } else if (status) {
      console.log("sucesso")
    } else {
      console.log(formdata)
    }
    // console.log(data)

  }

  return(
    <Container $type={status} onClick={()=> send(status)}>{text} </Container>
  )
})