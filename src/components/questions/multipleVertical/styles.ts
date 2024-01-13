"use client"

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;  
  width: 100%;
`

export const Title = styled.h2`
  color: ${theme.colors.dark};
  font-size: ${theme.font.size.GG};
`

export const Text = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
`

export const Checkbox = styled.input.attrs({type: 'checkbox'})`

`

export const Label = styled.label`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
  display: flex;  
  align-items: center;
  gap: 1em;
`

export const CheckboxGroup = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  
`