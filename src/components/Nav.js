import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar>
            <Logo href="">
            PETS<span>Luv</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <Link to="/about" style={{ textDecoration: "none"}}>
                    <MenuLink>About Me</MenuLink>
                </Link>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <MenuLink>Gallery</MenuLink>
                </Link>
            </Menu> 
        </Navbar>
    )
}

const Navbar = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    font-size: 2em;
`;

const Hamburger = styled.div`
    display: none;    
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const MenuLink = styled.div`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    color: #67bc98;
    transition: all 0.2s ease-in;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
        color: #7b7fda;
    }

`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height 0.2s ease-in-out;
    }
`;

const Logo = styled.div`
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.8rem

    span {
        font-size: 100px
    }
`;
