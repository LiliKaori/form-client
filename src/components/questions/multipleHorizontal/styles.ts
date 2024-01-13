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

export const Button = styled.button`

`

export const ButtonGroup = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px
`