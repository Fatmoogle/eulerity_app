import React from 'react'
import styled from 'styled-components';
import {  makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useStyles } from './styles/materialStyles/PetStyles.ui';
import { Wrapper, PetOverlay, PetTitle, PetDescription, PetImg } from './styles/PetStyles';

export default function Pet(props) {
    const classes = useStyles(props);                     // Material-UI Styling

    const settingActiveIds = (id) => {
        props.settingActiveIds(id);
    }

    return (
        <Wrapper onClick={() => settingActiveIds(props.id)}>
            <CheckCircleOutlineIcon className={props.selectedDivs.includes(props.id) ? classes.Checked : classes.NotChecked}/>
            <PetImg src={props.url} alt={props.title} 
            width="250" height="250"></PetImg>
            <PetOverlay>
                <PetTitle>{props.title}</PetTitle>
                <PetDescription>{props.description}</PetDescription>
            </PetOverlay>
        </Wrapper>
    )
}


