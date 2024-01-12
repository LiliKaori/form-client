"use client"

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;  
  width: 100%;
`

export const Text = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
`

export const Radio = styled.input.attrs({type: 'radio'})`

`

export const Label = styled.label`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
`

export const BoxRadios = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px
`