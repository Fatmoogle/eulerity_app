import styled from "styled-components";

export const Navbar = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    font-size: 2em;
`;

export const Hamburger = styled.div`
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

export const MenuLink = styled.div`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    color: #7b7fda;
    transition: all 0.2s ease-in;
    font-size: 0.9rem;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 700;

    &:hover {
        opacity: 0.7;
    }
`;

export const Menu = styled.div`
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

export const Logo = styled.div`
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 700;
    font-size: 2.5rem;
    font-family: 'Amatic SC', cursive;

    span {
        font-size: 1.8rem;
        font-family: 'Arima Madurai', cursive;
    }
`;
