import React, { useState } from 'react'

export default function Pet(props) {


    const settingActiveIds = (id) => {
        props.settingActiveIds(id);
        
    }

    return (
        <div>
            <h2>Pet Name: {props.title}</h2>
            <h3>Description: {props.description}</h3>
            <img  src={props.url} alt={props.title} width="500" height="500" onClick={() => settingActiveIds(props.id)}></img>
            <br />
        </div>
    )
}


// className={props.id === props.selectedIds.filter((pets)=> props.id === pets.id ) ? "border" : ""}