import { colors, Container } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function About() {
    const useStyles = makeStyles({
        gitHub: {
            fontSize: '90px',
            cursor: 'pointer',
            // "&:hover": {
            //     background: "#54a0ff",
            //     opacity: ".8"
            // }
            title: 'My GitHub Profile'
        },
        portfolio: {
            fontSize: '90px',
            color: '#D6A2E8',
            cursor: 'pointer'
        },
        linkedIn: {
            fontSize: '90px',
            color: '#2867B2',
            cursor: 'pointer'
            // color: "#54a0ff"
        },
        typographyClass: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
        }
    });

    const classes = useStyles();

    return (
        <MainContainer>
            <Personal>
                <Name>Alexander Varela </Name>
                <Title>Full Stack Web Developer</Title>
            </Personal>
            <Main>
                <ImgContainer>  
                    <img src="" alt="AlexPicture" width="250px" height="300px" />
                </ImgContainer>
                <AboutMe>
                    <Titles>
                    Disciplined. Motivated. Goofball.
                    </Titles>
                    <Bio>
                    Born and raised in Asheville, NC. When I'm not busy working with divs and fixing simple bugs that keep me up at night, I like 
                    to enjoy life in simple ways. You might hear me playing my drums from a few blocks away, and you may just find me enjoying a hot caffeinated beverage.
                    Care to join?
                    </Bio>

                </AboutMe>    
            </Main>
            <Contact>
                <BtnContainer>
                    <Typography className={classes.typographyClass}>
                        <Link href="https://github.com/Fatmoogle">
                            <GitHubIcon className={classes.gitHub} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/alexander-varela-5a852295/">
                            <LinkedInIcon className={classes.linkedIn}/>
                        </Link>
                        <Link href="https://fatmoogle.github.io/">
                            <AccountCircleIcon className={classes.portfolio}/>
                        </Link>
                    </Typography>
                </BtnContainer>
            </Contact>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    background-color: white;
    height: 100vh;
    max-width: 100vw;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const Personal = styled.div`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
`;

const Name = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    letter-spacing: 5px;
    font-size: 70px;
`;

const Title = styled.h2`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    font-size: 40px;
    letter-spacing: 6px;
    color: #55E6C1;
    
`;

const ImgContainer = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const AboutMe = styled.p`
    width: 80%;
    padding: 10px;

`;

const Titles = styled.h1`
    font-size: 50px;
    font-weight: 100;
    padding-bottom: 30px;
    color: #1B9CFC;
`;

const Bio = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 20px;
`;

const Contact = styled.div`
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

const BtnContainer = styled.div`
    width: 50%;
    

`;

