import { Checkbox, CheckboxGroup, Container, Label, Text, Title } from "./styles"

export const MultipleVerticalQuestion = (function (){
  return(
    <Container>
            
      <Text>Descrição da pergunta múçtiplo vertical, para ajudar o entendimento do usuário.</Text>
      <CheckboxGroup>
        <Label htmlFor="1">
          <Checkbox id="1" name="nota"></Checkbox>
          <Text>1</Text>
        </Label>
        <Label htmlFor="2">
          <Checkbox id="2" name="nota"></Checkbox>
          <Text>2</Text>
        </Label>
        <Label htmlFor="3">
          <Checkbox id="3" name="nota"></Checkbox>
          <Text>3</Text>
        </Label>
        <Label htmlFor="4">
          <Checkbox id="4" name="nota"></Checkbox>
          <Text>4</Text>
        </Label>
        <Label htmlFor="5">
          <Checkbox id="5" name="nota"></Checkbox>
          <Text>5</Text>
        </Label>
        <Label htmlFor="6">
          <Checkbox id="6" name="nota"></Checkbox>
          <Text>6</Text>
        </Label>
        <Label htmlFor="7">
          <Checkbox id="7" name="nota"></Checkbox>
          <Text>7</Text>
        </Label>
        <Label htmlFor="8">
          <Checkbox id="8" name="nota"></Checkbox>
          <Text>8</Text>
        </Label>
        <Label htmlFor="9">
          <Checkbox id="9" name="nota"></Checkbox>
          <Text>9</Text>
        </Label>
        <Label htmlFor="10">
          <Checkbox id="10" name="nota"></Checkbox>
          <Text>10</Text>
        </Label>
      </CheckboxGroup>
      

      

    </Container>
  )
})