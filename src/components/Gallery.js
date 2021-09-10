import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pet from './Pet'
import { saveAs } from 'file-saver';
import styled from 'styled-components';
import { makeStyles, InputBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SearchIcon from '@material-ui/icons/Search';


export default function Gallery() {
    const [filteredPets, setFilteredPets] = useState([]);
    const [selectedDivs, setSelectedDivs] = useState([]);

    const useStyles = makeStyles({
        buttonStyle: {
            color: "white",
            background: "#54a0ff",
            "&:hover": {
                background: "#54a0ff",
                opacity: ".8"
            }
        },
        searchIcon: {
            // padding: theme.spacing(0, 2),
            // height: '100%',
            // position: 'absolute',
            // pointerEvents: 'none',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center'
        },
    });

    const classes = useStyles();

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
            // let mySet = new Set(tempArray)             // Set allows value to ONLY occur once
            // let uniqueArray = [...mySet]               // Converts mySet to an array instead of object
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

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    hr {
        border: 0;
        width: 40%;               
        background-color: black;
        height: 1px;
    }

`;

const Title = styled.h1`
    font-family: 'Amatic SC', cursive;
    font-size: 50px;
    text-align: center;
    color: #7b7fda;
    font-size: 150px;
    span {
        font-size: 100px;
        font-family: 'Arima Madurai', cursive;
    }

`;

const SubTitle = styled.div`
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 25px;
    font-weight: 800;
`;

const SearchArea = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: #0abde3;
    width: 50%;
        
            
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 400px;
    padding: 10px;
`;

const FormContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
`;

// const Button = styled.button`
//     font-family: 'Source Sans Pro', sans-serif;
//     letter-spacing: 2px;
//     font-size: 20px;
//     background-color: #67bc98;
//     border: none;
//     border-radius: 7px;

    
//     &:hover {
//     color: #7b7fda;
// }
    
// `;

const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
`;

const PetContainer = styled.div`    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
`;

// const SubmitButton = styled.button` 
//     width: 100px;
//     font-family: 'Source Sans Pro', sans-serif;
// `;