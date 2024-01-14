import { theme } from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
  background-color: transparent;  
  width: 100%;
`

export const Select = styled.select`
  font-size: ${theme.font.size.M};
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid ${theme.colors.muted};
  
  
`

export const Option = styled.option`    

  &:disabled{
    color: ${theme.colors.gray};
  }
`