import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Menu, MenuLink, Hamburger, Logo } from './styles/NavStyles'


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
