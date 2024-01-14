import { ComponentProps, FormEvent, useState } from 'react';
import { Container } from './styles'
import { apiFrontTest, apiPost } from '@/services/api';
import { paths } from '@/services/paths';
import { useForm } from '@/hooks/FormContext';

interface IForm {
  id: number;
  question: number;
  answer: string;
}

type FormContextType = {
  forms: IForm[];
  saveForm: (form: IForm) => void;
  updateForm: (id: number) => void;
}

type ButtonProps = ComponentProps<'button'> & {
  text: string;
  status?: "success" | "error" | undefined;
  formdata?: string;
}

export const Button = (function ({ text, status, formdata }: ButtonProps) {
  const { forms, saveForm } = useForm() as FormContextType;
  const [formData, setFormData] = useState<IForm | []>([]);


  const handleForm = (ev: FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [ev.currentTarget.id]: ev.currentTarget.value,
    })
  }

  const handleSaveForm = (ev: FormEvent, formData: IForm | any) => {
    ev.preventDefault();
    
    saveForm(formData);
    console.log(forms);
  }


  async function send(status: "success" | "error" | undefined) {

    console.log(status)

    const path = (status === "success") ? paths.sendSuccess : (status === "error") ? paths.sendError : "/";
    const { data } = await (status === "success" || status === "error" ? apiFrontTest.get(path) : apiPost.post("/"));

    if (status && data.error) {
      console.log(data.error)
    } else if (status) {
      console.log("sucesso")
    } else {
      console.log(formdata)
    }
    // console.log(data)

  }

  const testeForm: IForm= {
    id: Math.random(),
    question: 6,
    answer: "Resposta teste2"
  }

  return (
    <Container $type={status}
      // onClick={()=> send(status)}>{text} 
      onClick={(ev) => handleSaveForm(ev,{testeForm})}>{text}
    </Container>
  )
})