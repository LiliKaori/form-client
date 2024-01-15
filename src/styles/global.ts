"use client"

import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{    
    width: 100%;
    background-color: ${theme.colors.ligth};
}

@media (max-width: 560px) {
    html{
        font-size: 10px;
    }
}

@media (max-width: 300px) {
    html{
        font-size: 8px;
    }
}

`




