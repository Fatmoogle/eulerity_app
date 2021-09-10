// This file is used to export the Styled Components styles for Gallery.js

import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    hr {
        border: 0;
        width: 40%;               
        background-color: black;
        height: 1px;
    }
`;

export const Title = styled.h1`
    font-family: 'Amatic SC', cursive;
    font-size: 50px;
    text-align: center;
    color: #7b7fda;
    font-size: 150px;

    span {
        font-size: 100px;
        font-family: 'Arima Madurai', cursive;

        @media (max-width: 500px) {
            font-size: 50px;
        }
    }

    @media (max-width: 500px) {
        font-size: 100px;
    }

`;

export const SubTitle = styled.div`
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 25px;
    font-weight: 800;

    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

export const SearchArea = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    height: 50px;
    background-color: #ffffff;
    width: 90%;
    filter: drop-shadow(1px 3px 1px rgba(0, 0, 0, 0.5));

    @media (max-width: 500px) {
        width: 50%;
        height: 40px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 400px;
    padding: 10px;
`;

export const FormContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 10px;
        width: 50%;
    }
`;

export const PetContainer = styled.div`    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
    padding: 10px;
`;

