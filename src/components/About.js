import { Container } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';




export default function About() {
    return (
        <MainContainer>
            <Name>Alexander Varela </Name>
            <Title>Full Stack Web Developer</Title>
            <ImgContainer>  
                <img alt="AlexPicture" src width="250px" height="300px" />
            </ImgContainer>
            <Main>
                When I'm not busy working with divs and fixing simple bugs that keep me up at night, I like 
                to enjoy life in simple ways such as:
                    <ListContainer>
                        <ListItem>Gaming</ListItem>
                        <ListItem>Playing Drums</ListItem>
                        <ListItem>Family Time</ListItem>
                    </ListContainer>
            </Main>
            <Contact>
                <h1>Lets Work Together</h1>
                <BtnContainer>
                    <Btn href>Github</Btn>
                    <Btn href>LinkedIn</Btn>
                    <Btn href>Portfolio</Btn>
                </BtnContainer>
            </Contact>
        </MainContainer>
    )
}

const MainContainer = styled.div`

    height: 100vh;
    max-width: 100vw;
    background: #82ccdd;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    

`;

const Name = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    letter-spacing: 5px;
`;

const Title = styled.h2`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    
`;

const ImgContainer = styled.div`

`;

const Main = styled.main`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const ListContainer = styled.div`
    
`; 

const ListItem = styled.li`

`;

const Contact = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 3px;

`;

const BtnContainer = styled.div`

`;

const Btn = styled.button`

`;