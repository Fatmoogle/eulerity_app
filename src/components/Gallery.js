import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pet from './Pet'
import { saveAs } from 'file-saver';
import { InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SearchIcon from '@material-ui/icons/Search';
import { Wrapper, Title, SubTitle, SearchArea, Form, FormContent, ButtonContainer, PetContainer } from './styles/GalleryStyles';
import { useStyles } from './styles/materialStyles/GalleryStyles.ui';


export default function Gallery(props) {
    const [filteredPets, setFilteredPets] = useState([]);
    const [selectedDivs, setSelectedDivs] = useState([]);

    const classes = useStyles(props);                         // Material-UI Styling

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

    const settingActiveIds = (id) => {
        if(selectedDivs.includes(id)) {                   // Checks to see if state has Id
            console.log(`Image ${id} Deselected`);
            let array = [...selectedDivs];
            let index = array.indexOf(id);
            array.splice(index, 1);
            setSelectedDivs(array)
        } else {
            console.log(`Image ${id} Selected`)           // If no ID found, add it to state
            tempArray = [...selectedDivs]
            tempArray.push(id);
            setSelectedDivs(tempArray)
        }
    }

    const selectAll = (e) => {
        e.preventDefault();
        filteredPets.forEach(pet => {
            tempArray.push(pet.id);
        });
        setSelectedDivs(tempArray);
        console.log("Selected all images");
    }

    const clearSelection = (e) => {
        e.preventDefault();
        const emptyArray = [];
        setSelectedDivs(emptyArray);
        console.log("Cleared image selection");
    }

    const downloadImages = (e) => {
        e.preventDefault();
        let allPets = filteredPets;                       // All pets from state
        let allSelectedPets = selectedDivs;               // All Ids of selected pets
        
        let petIdArray = allPets.map(pet => pet.id)
        let tempPetArray = [];

        for(let i = 0; i < allPets.length; i++) {
            if(allSelectedPets.includes(petIdArray[i])) {
                tempPetArray.push(allPets[i])
            }
        }

        console.log("all pet array: ")
        console.log(tempPetArray)

        tempPetArray.forEach(pet => {
            console.log(pet);
            let imgPath = pet.url;
            let fileName = pet.title + ".png";
            saveAs(imgPath, fileName);
        })
    }
    
    return (
        <Wrapper>
            <Title>PETS<span>Luv</span></Title>
            <SubTitle>
                Select your images and then click the download button to take home your own furry friend!
            </SubTitle>
            <Form>
                <FormContent>
                    <SearchArea>
                        <SearchIcon className={classes.searchIcon} /><InputBase type="text" placeholder="Search..."onChange={(e) => handleSearch(e)}/>
                    </SearchArea>
                    <br/>
                    <ButtonContainer>
                        <Button className={classes.buttonStyle} variant="contained" onClick={(e) => selectAll(e)} >Select All</Button>
                        <Button className={classes.buttonStyle} variant="contained" onClick={(e) => clearSelection(e)}>Clear Selection</Button>
                    </ButtonContainer>
                </FormContent>
                <br />
                <Button className={classes.buttonStyle} variant="contained" title="Download Selected Images" onClick={(e) => downloadImages(e)}><SaveAltIcon/></Button>
            </Form>
            <PetContainer>
                {allPets.pets === undefined ? (<h1>Loading...</h1>) : (
                    filteredPets.map((pet) => {
                        return <Pet title={pet.title} description={pet.description} url={pet.url} id={pet.id} key={pet.id} settingActiveIds={settingActiveIds} onClick={() => settingActiveIds(pet.id)} selectedDivs={selectedDivs}/>
                    })  
                )}
            </PetContainer>
        </Wrapper>
    )
}
