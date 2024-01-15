"use client"

import { theme } from "@/styles/theme";
import styled from "styled-components";
import { List } from "@phosphor-icons/react";


export const Container = styled.div`
  background-color: ${theme.colors.dark};
  width: 100%;
  height: 200px;
  padding: 2em;
`

export const Text = styled.p`
  color: ${theme.colors.ligth};
`

export const MenuIcon = styled(List)`
  width: 2.5em;
  height: 2.5em;
  color: ${theme.colors.white};

`

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const Circle = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: ${theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Letter = styled.h1`
  font-size: ${theme.font.size.G};
  color: white;
  font-weight: 300;
`

export const MenuGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 10em;
`