import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pet from './Pet'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function Gallery() {
    const [filteredPets, setFilteredPets] = useState([])
    const [selected, setSelected] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);


    useEffect(() => {
        setFilteredPets(allPets.pets)
    }, [])

    const allPets = useSelector((state) => state.pets) // Returns entire state
    
    console.log("/////////////////////////////////////////////////// ")
    console.log("Selected: ")
    console.log(selected);

    console.log("selectedIds")
    console.log(selectedIds)

    const handleSearch = (e) => {
        let userInput = e.target.value;
        let viewedList = [];
        // console.log(userInput)
        if(userInput === "") {
            viewedList = allPets.pets;
        } else {
            viewedList = allPets.pets.filter(pet => 
                pet.title.toLowerCase().includes(userInput.toLowerCase()) || pet.description.toLowerCase().includes(userInput.toLowerCase()))
            }
        setFilteredPets(viewedList);
    }

    const handleClick = () => {
        console.log("click");
    }

    // setId(); // Gives each pet a unique ID
    console.log(filteredPets.id)
    console.log("selectedIds: ")
    console.log(selectedIds)

    return (
        <div>
            <h1>Gallery</h1>
            <form>
                <div>
                    <label>Search Pets</label><br />
                    <input type="text" onChange={(e) => handleSearch(e)}/>
                </div>
                <br />
            </form>
            <button onClick={() => handleClick()}>Download</button>
            {allPets.pets === undefined ? (<h1>Loading...</h1>) : (
                filteredPets.map((pet) => {
                    return <Pet title={pet.title} description={pet.description} url={pet.url} id={pet.id} key={pet.id} setSelected={(value) => setSelected(value)} selected={selected} setSelectedIds={(value) => setSelectedIds(value)} selectedIds={selectedIds}/>
                })  
            )}
        </div>
    )
}
