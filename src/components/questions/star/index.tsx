import { theme } from "@/styles/theme"
import { Container, StarGroup, Text, Title } from "./styles"
import { Star } from '@phosphor-icons/react'

export const StartQuestion = (function (){
  return(
    <Container>
      <Title>Título da pergunta star deve ficar aqui</Title>
      <Text>Também é importante ter um espaço para o dono da loja colocar uma descrição da pergunta para ajudar o entendimento do usuário</Text>
      <Text>Aqui vai ficar as estrelas</Text>
      <StarGroup>
        <Star size={40} color={theme.colors.primary} weight="fill" />
        <Star size={40} color={theme.colors.primary} weight="fill" />
        <Star size={40} color={theme.colors.primary} weight="fill" />
        <Star size={40} color={theme.colors.muted} weight="fill" />
        <Star size={40} color={theme.colors.muted} weight="fill" />
      </StarGroup>

    </Container>
  )
})