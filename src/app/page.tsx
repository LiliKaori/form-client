"use client"

import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { FormProvider } from "@/hooks/FormContext";

export default function Home (){
  return(
    <>
      <Header />
      <FormProvider>
        <Form />
      </FormProvider>
      
    </>
  )

}


