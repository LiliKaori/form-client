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
  border: 1px solid ${theme.colors.muted};
  background-color: transparent;
  border-radius: 1.5em;
  padding: 0.5em 1em;
`

export const ButtonGroup = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 0.5em;
`