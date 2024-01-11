"use client"

import { theme } from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
  background-color: ${theme.colors.white};
  margin: auto;
  max-width: 350px;
  border-radius: 0.5em;
  padding: 1em;
`
export const Title = styled.h2`
  color: ${theme.colors.dark};
  font-size: ${theme.font.size.GG};
`

export const Text = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
`