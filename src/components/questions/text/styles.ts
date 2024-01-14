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

export const TextArea = styled.textarea`
  font-size: ${theme.font.size.M};
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid ${theme.colors.muted};
  resize: none;
  margin-top: 0.2em;

  &::placeholder{
    color: ${theme.colors.gray};
    font-size: ${theme.font.size.M};
  }
`

