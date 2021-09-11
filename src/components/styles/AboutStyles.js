// This file is used to export the Styled Components styles for About.js


import styled from "styled-components";


export const MainContainer = styled.div`
    background-color: white;
    max-width: 100vw;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const Personal = styled.div`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Name = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    letter-spacing: 5px;
    font-size: 70px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Title = styled.h2`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    font-size: 40px;
    letter-spacing: 6px;
    color: #1B9CFC;

    @media (max-width: 600px) {
        font-size: 15px;
    }
    
`;

export const ImgContainer = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        padding: 0;
    }

    img {
        width:250px;
        height: 300px;

        @media (max-width: 600px) {
            width: 150px;
            height: 200px;
        }
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const AboutMe = styled.p`
    width: 80%;
    padding: 10px;
    text-align: center;
`;

export const Titles = styled.h1`
    font-size: 50px;
    font-weight: 100;
    padding-bottom: 10px;
    color: #1B9CFC;

    @media (max-width: 600px) {
        font-size: 40px;
    }
`;

export const Bio = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 20px;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Contact = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;
    padding: 20px;
`;

export const BtnContainer = styled.div`
    width: 50%;
`;

