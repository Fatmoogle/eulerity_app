import React from 'react'
import styled from 'styled-components';

export default function Pet(props) {


    const settingActiveIds = (id) => {
        props.settingActiveIds(id);
        
    }

    return (
        <Wrapper onClick={() => settingActiveIds(props.id)}>
            <PetImg className={props.selectedDivs.includes(props.id) ? "border" : ""} src={props.url} alt={props.title} width="250" height="250"></PetImg>
            <PetOverlay>
                <PetTitle>{props.title}</PetTitle>
                <PetDescription>{props.description}</PetDescription>
            </PetOverlay>
        </Wrapper>
    )
}


// className={props.id === props.selectedIds.filter((pets)=> props.id === pets.id ) ? "border" : ""}

const Wrapper = styled.div`
    position: relative;
`;

const PetOverlay = styled.div`
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

const PetTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;

`;

const PetDescription = styled.p`
    width: 90%;
    font-size: 1em;
    margin-top: 2em;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
`;

const PetImg = styled.img`



`;


