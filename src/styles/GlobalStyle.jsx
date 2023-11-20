import { createGlobalStyle, styled, keyframes } from "styled-components";
import lab_back_image from '../assets/lab_background.jpg';

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

const reveal = keyframes`
    from{
        opacity: .5;
    }
    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;

    background: url(${lab_back_image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-y: scroll;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    animation: ${reveal} .8s ease-in-out;

    box-shadow: 0px 0px 132px 38px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: 0px 0px 132px 38px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: 0px 0px 132px 38px rgba(0,0,0,0.75) inset;
    
`;

export const DeveloppedBy = styled.div`
    color: #323232;
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1em;

    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;