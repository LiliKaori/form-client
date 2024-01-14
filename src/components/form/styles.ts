"use client"

import { theme } from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 1.5em;
`

export const Box = styled.div`
  background-color: ${theme.colors.white};
  margin: -4em auto 1.5em;
  max-width: 700px;
  border-radius: 0.5em;
  padding: 2em;
  display: flex;
  flex-direction: column;    
  gap: 20px;
  
`
export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.font.size.XG};
  font-weight: 600;
  position: relative;
  top: -100px;
  margin: 0 -0.8em -2em;

`

export const Text = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.P};
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2em;
`