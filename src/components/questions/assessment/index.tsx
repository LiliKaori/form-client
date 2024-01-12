import { BoxRadios, Container, Label, Radio, Text, Title } from "./styles"

export const AssessmentQuestion = (function (){
  return(
    <Container>
      <Title>Título da pergunta radio deve ficar aqui</Title>      
      <Text>Descrição da segunda pergunta, para ajudar o entendimento do usuário.</Text>
      <BoxRadios>
        <Label htmlFor="1">
          <Radio id="1" name="nota"></Radio>
          <Text>1</Text>
        </Label>
        <Label htmlFor="2">
          <Radio id="2" name="nota"></Radio>
          <Text>2</Text>
        </Label>
        <Label htmlFor="3">
          <Radio id="3" name="nota"></Radio>
          <Text>3</Text>
        </Label>
        <Label htmlFor="4">
          <Radio id="4" name="nota"></Radio>
          <Text>4</Text>
        </Label>
        <Label htmlFor="5">
          <Radio id="5" name="nota"></Radio>
          <Text>5</Text>
        </Label>
        <Label htmlFor="6">
          <Radio id="6" name="nota"></Radio>
          <Text>6</Text>
        </Label>
        <Label htmlFor="7">
          <Radio id="7" name="nota"></Radio>
          <Text>7</Text>
        </Label>
        <Label htmlFor="8">
          <Radio id="8" name="nota"></Radio>
          <Text>8</Text>
        </Label>
        <Label htmlFor="9">
          <Radio id="9" name="nota"></Radio>
          <Text>9</Text>
        </Label>
        <Label htmlFor="10">
          <Radio id="10" name="nota"></Radio>
          <Text>10</Text>
        </Label>
      </BoxRadios>
      

      

    </Container>
  )
})