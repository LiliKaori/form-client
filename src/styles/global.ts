"use client"

import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ['400', '500'],
    subsets: ['latin'],
    display: 'swap',
})

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
}

body{    
    background-color: ${theme.colors.ligth};
}
`