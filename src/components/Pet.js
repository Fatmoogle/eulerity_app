import React, { useState } from 'react'
import axios from 'axios';

export default function Pet(props) {
    const [activeIds, setActiveIds] = useState([]);

    let duplicateArray = {};

    const handleClick = (id) => {
        props.setSelected(id);
    }

    const collectIds = (id) => {
        console.log("collectIds");
        const selectedIds = props.selectedIds;
        let array = [...selectedIds, {id: id}];
        // const result = array.filter(item => item.id !== id);
        // console.log("result:  ")
        // console.log(result)
        array.forEach(item => {
            duplicateArray[item.id] = (duplicateArray[item.id] || 0) + 1;
        })


        duplicateArray = Object.entries(duplicateArray).filter(item => item[1] > 1).map(item => item[0]);
        array = array.filter(item => !duplicateArray.some(item2 => item.id === item2));

        console.log("duplicate array: ")
        console.log(duplicateArray);


        
        props.setSelectedIds(array);
       
    }

    return (
        <div>
            <h2>Pet Name: {props.title}</h2>
            <h3>Description: {props.description}</h3>
            <img className={props.id === props.selectedIds.filter((pets)=> props.id === pets.id ) ? "border" : ""} src={props.url} alt={props.title} width="500" height="500" onClick={() => {handleClick(props.id); collectIds(props.id);} }></img>
            <br />
        </div>
    )
}
