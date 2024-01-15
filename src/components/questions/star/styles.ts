"use client"

import { theme } from "@/styles/theme";
import { IconProps, Star } from "@phosphor-icons/react";
import styled from "styled-components";

type StarProps = IconProps & {
  $active: boolean;
}

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

export const StarGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`

export const Icon = styled(Star).attrs({ weight: "fill" })<StarProps>`
  width: 2.5em;
  height: 2.5em;
  color: ${props => props.$active ? theme.colors.primary : theme.colors.muted};
`