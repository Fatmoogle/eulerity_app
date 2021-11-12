import axios from "axios";
import { AWAITING_PETS, SUCCESS_PETS, REJECTED_PETS } from "./types";
import { v4 as uuidv4 } from 'uuid';


export const fetchPets = () => dispatch => {
    dispatch({
        type: AWAITING_PETS
    });
    axios.get('https://eulerity-hackathon.appspot.com/pets')
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        
        res.data.forEach(pet => {
            pet.id = uuidv4();
        })
        
        console.log("res.data: ")
        console.log(res.data)
        dispatch({
            type: SUCCESS_PETS,
            payload: res.data
        });
    })
    .catch(error => {
        dispatch({
            type: REJECTED_PETS,
            payload: error
        });
    })
}
