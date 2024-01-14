import { theme } from "@/styles/theme";
import styled from "styled-components";

type ContainerProps = {  
  $type?: "success" | "error" | undefined;
}

export const Container = styled.button<ContainerProps>`
  font-size: ${theme.font.size.G};
  font-weight: 700;
  background-color: ${props => props.$type == 'success' ? theme.colors.success : props.$type == 'error'? theme.colors.error : theme.colors.primary};
  border-radius: 1.5em;
  padding: 1em 3em;
  width: auto;  
  border: none;

`