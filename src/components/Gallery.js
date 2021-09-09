import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pet from './Pet'
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

export default function Gallery() {
    const [filteredPets, setFilteredPets] = useState([]);
    const [selectedDivs, setSelectedDivs] = useState([]);

    let tempArray = [];
    

    useEffect(() => {
        setFilteredPets(allPets.pets)
    }, [])

    const allPets = useSelector((state) => state.pets)        // Returns entire state

    const handleSearch = (e) => {
        let userInput = e.target.value;
        let viewedList = [];
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

    const settingActiveIds = (id) => {
        if(selectedDivs.includes(id)) {                     // Checks to see if state includes ID already, then removes it on click if true
            console.log(`Image ${id} Deselected`);
            let array = [...selectedDivs];
            let index = array.indexOf(id);
            array.splice(index, 1);
            setSelectedDivs(array)
        } else {
            console.log(`Image ${id} Selected`)             // If no ID found, add it to the state array
            tempArray = [...selectedDivs]
            tempArray.push(id);
            // let mySet = new Set(tempArray)                  // Set allows value to ONLY occur once
            // let uniqueArray = [...mySet]                    // Converts mySet to an array instead of object
            setSelectedDivs(tempArray)
        }
    }

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
                    return <Pet title={pet.title} description={pet.description} url={pet.url} id={pet.id} key={pet.id} settingActiveIds={settingActiveIds} onClick={() => settingActiveIds(pet.id)} selectedDivs={selectedDivs}/>
                })  
            )}
        </div>
    )
}
