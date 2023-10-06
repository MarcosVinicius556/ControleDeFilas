import styled from 'styled-components';

export const Card = styled.div`
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
    justify-content: space-around;
    flex-direction: column;

    & img {
        height: 60%;
        max-height: 800px;
        width: 60%;
        max-width: 800px;
    }

    & h3 {
        text-align: center;
        font-size: 28px;
        width: 80%;
        letter-spacing: 1px;
        margin-top: 2.5em ;
    }

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

    @media screen and (max-width: 600px) {
        height:  500px;
        max-height: 500px;

        & a {
            left: .5em;
            top: 0;

            & svg {
                width: 35px;
            }
        }

        & img { 

        }

        & h3 {
            margin-top: 3em;
            font-size: 18px;
        }
    }

`;