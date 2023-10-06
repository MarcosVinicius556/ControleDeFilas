import { styled } from "styled-components";

export const Card = styled.div`
    margin: auto;
    background: #e7e7e7d8;
    backdrop-filter: blur(5px);
    border-radius: 5px;

    height:  800px;
    
    width: 85%;
    max-width: 800px;

    display: flex;
    align-items: center;
    flex-direction: column;

    & a {
        position: absolute;
        left: 1em;
        top: 1em;
        transition: all .5s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
        & svg {
        
    }
    }

    & img {
        margin-top: 1em;
        filter: drop-shadow(0 0 .75rem #ffffff);
        width: 80%;
        max-width: 600px;
     
        @media screen and (max-width: 600px) {
            width: 80%;
            max-width: 400px;
        }
    }

    & span {
        width: 80%;
        flex: 1;
        display: flex;

        justify-content: space-around;
        align-items: center;

    }

    & button {
        width: 250px;
        height: 110px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;

        transition: all .5s ease-in-out;
    }

    @media screen and (max-width: 600px) { 
        & button {
            width: 120px;
            height: 50px;
            font-size: 13px;
        }
    }

`;

export const ButtonNorml = styled.button`
    background: #4E79A3;

    &:hover{
        background: #6297cc;
        color: #323232;
    }
`;

export const ButtonPref = styled.button`
   background: #3E79B8;
   &:hover{
        background: #4c93df;
        color: #323232;
    }
`;