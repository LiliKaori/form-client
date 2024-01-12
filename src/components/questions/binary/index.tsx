import { BoxRadios, Container, Label, Radio, Text } from "./styles"

export const BinaryQuestion = (function (){
  return(
    <Container>
          
      <Text>Descrição da binária, para ajudar o entendimento do usuário.</Text>
      <BoxRadios>
        <Label htmlFor="yes">
          <Radio id="yes" name="binary"></Radio>
          <Text>Sim</Text>
        </Label>
        <Label htmlFor="no">
          <Radio id="no" name="binary"></Radio>
          <Text>Não</Text>
        </Label>
        
      </BoxRadios>
      

      

    </Container>
  )
})