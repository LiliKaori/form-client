"use client"

import { theme } from "@/styles/theme";
import styled from "styled-components";

type ButtonProps = {
  $selected: boolean;
}

export const Container = styled.div`
  background-color: transparent;  
  width: 100%;
`

export const Text = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
`

export const Button = styled.button<ButtonProps>`
  border: 1px solid ${theme.colors.muted};
  background-color: ${props => props.$selected ? theme.colors.gray : "transparent"};
  color: ${props => props.$selected ? theme.colors.white : theme.colors.dark};
  border-radius: 1.5em;
  padding: 0.5em 1em;

`

export const ButtonGroup = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 0.5em;
`