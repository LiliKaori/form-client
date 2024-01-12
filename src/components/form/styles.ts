"use client"

import { theme } from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
  background-color: ${theme.colors.white};
  margin: auto;
  max-width: 700px;
  border-radius: 0.5em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;  
`
export const Title = styled.h2`
  color: ${theme.colors.dark};
  font-size: ${theme.font.size.GG};
`

export const Text = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
`