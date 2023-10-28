import styled from "styled-components";

export const ButtonContainer = styled.button`
    position: absolute;
    bottom: 1em;
    left: 1em;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #5d96d6;
    transition: all .3s ease-in-out;

    &:hover {
        background: #70a9eb;
        color: #fff;
    }

`;