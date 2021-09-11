import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useStyles } from './styles/materialStyles/AboutStyles.ui';
import profilePic from '../assets/images/Elgoomtaf2.png';
import { MainContainer, Personal, Name, Title, ImgContainer, Main, AboutMe, Titles, Bio, BtnContainer, Contact } from './styles/AboutStyles';


export default function About(props) {
    const classes = useStyles(props);                       // Material-UI Styling

    return (
        <MainContainer>
            <Personal>
                <Name>Alexander Varela </Name>
                <Title>Full Stack Web Developer</Title>
            </Personal>
            <Main>
                <ImgContainer>  
                    <img src={profilePic} alt="AlexPicture"/>
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
