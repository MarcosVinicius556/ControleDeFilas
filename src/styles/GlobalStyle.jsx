import { createGlobalStyle, styled } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export const BaseButton = styled.button`
    height: 3em;
    width: 9em;
    max-width: 200px;
    max-height: 100px;
    border: 0;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    background: ${({backgroundColor}) => backgroundColor};
    color: ${({textColor}) => textColor};
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover{
        background: ${({backgroundHover}) => backgroundHover};
        color: ${({textHover}) => textHover};
    }
`;