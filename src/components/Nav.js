import React from 'react';
import styled from 'styled-components';


export default function Nav() {
    return (
        <Navbar>
            <Logo href="">
                <span>PetsLuv</span>
            </Logo>
            <Hamburger>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu>
                <MenuLink href="">About Me</MenuLink>
                <MenuLink href="">Gallery</MenuLink>
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
`;

const Hamburger = styled.div`

`;

const MenuLink = styled.a`

`;

const Menu = styled.div`

`;

const Logo = styled.a`

`;
