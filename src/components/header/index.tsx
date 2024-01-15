"use client"

import { Circle, Container, Group, Letter, Logo, MenuGroup, MenuIcon, Text } from "./styles";
import LogoImage from "../../img/Logo-Fidelimax-Mini.png"

export const Header = (function (){
  return (
      <Container>
        <MenuGroup>

          <Group>
            <MenuIcon />
            <Logo src={LogoImage.src}/>
          </Group>
          <Group>
            <Circle>
              <Letter>F</Letter>
            </Circle>
            <Text>Fábio C Pinto</Text>
          </Group>
        </MenuGroup>
        
      </Container>
  );
})