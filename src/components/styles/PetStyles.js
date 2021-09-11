// This file is used to export the Styled Components styles for Pet.js

import styled from "styled-components";


export const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
`;

export const PetOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    backdrop-filter: blur(5px);

    &:hover {
        opacity: 1;

        > * {
            transform: translateY(0);
        }
    }
    
    > * {
        transform: translateY(20px);
        transition: transform 0.25s
    }
`;

export const PetTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;

`;

export const PetDescription = styled.p`
    width: 90%;
    font-size: 1em;
    margin-top: 2em;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
`;

export const PetImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`;
