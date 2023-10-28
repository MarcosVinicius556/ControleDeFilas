import { styled } from "styled-components";

export const FormCard = styled.div`
    margin: auto;
    background: #e7e7e7d8;
    backdrop-filter: blur(5px);
    border-radius: 5px;

    height:  800px;
    max-height: 800px;
    
    width: 85%;
    max-width: 800px;

    display: flex;
    align-items: center;
    flex-direction: column;

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

    @media screen and (max-width: 600px) { }

`;

export const SwitchContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5em;
    width: 50%;
    margin-top: 5em;

    & button {
        height: 60px;
        width: 170px;
        border-radius: 10px 0px 0px 10px;
        border: 1px solid transparent;
        cursor: pointer;
        font-size: 18px;
        background: #64a2e9;
        color: #474747;
        font-weight: bold;
        transition: all .5s ease-in-out;

        &:nth-child(1){
            border-right: none;
        }

        & + button {
            border-radius: 0px 10px 10px 0px;

        }

        &:hover {
            background: #70a9eb;
            color: #fff;
        }
    }

    &:

    @media screen and (max-width: 600px) {
        & label {
            font-size: 18px;
        }
    }
    
`;

export const Form = styled.form`

    flex: 1;
    padding: 1.5em;
    width: 80%;
    max-height: 350px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;


    & span {

        padding: .5em;
        width: 100%;
        height: 10em;
        display: flex;
        flex-direction: column;

        & label {
            width: 100%;
            font-size: 25px;
            font-weight: 600;
            height: 50%;
            display: flex;
            align-items: center;
            color: #323232;
        }

        & input[type=text] {
            width: 100%;
            height: 50%;
            padding-left: .5em;
            font-size: 48px;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            outline: none;
        }
    }
    
    & input[type=submit] {
        border: none;
        background: #71b971;
        width: 95%;
        height: 55px;
        border-radius: 10px;
        font-size: 22px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        color: #494949;
        font-weight: 600;
        letter-spacing: .5px;

        &:hover {
            background: #85ce85;
            color: #fff;
        }
    }

    @media screen and (max-width: 600px) {
        & span {

            height: 7em;

            & label {
                font-size: 20px;
            }

            & input[type=text] {
                font-size: 22px;
            }
        }

        & input[type=submit] {
            height: 45px;
        }
    }

`;
