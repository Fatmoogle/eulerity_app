import axios from "axios";
import { AWAITING_PETS, SUCCESS_PETS, REJECTED_PETS } from "./types";
import { v4 as uuidv4 } from 'uuid';


export const fetchPets = () => dispatch => {
    dispatch({
        type: AWAITING_PETS
    });
    axios.get('http://eulerity-hackathon.appspot.com/pets')
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

// export async function downloadImages ({ dispatch, commit }, data) {
//     try {
//         commit("setDownloadingImage", true)
//         const image = await dispatch("generateFile", data)
//         // if (window.navigator && window.navigator.msSaveOrOpenBlop)

//         const fileName = `${data.id}.png`
//         const a = document.createElement("a")
//         a.style.display = "none"
//         document.body.appendChild(a)
//         a.href = window.URL.createObjectURL(image)
//         a.setAttribute("download", fileName)
//         a.click()
//         setTimeout(function () {
//             window.URL.revokeObjectURL(a.href)
//         }, 100)
//         document.body.removeChild(a)
//         commit("setDownloadingImage", false)
//     } catch (error) {
//         commit("setDownloadingImage", false)
//         throw error
//     }
// }



// export const addTravelPlan = (details) => ({
//     type: 'ADD_PLAN',
//     currentTravelPlan: {
//         id: uuid(),
//         ...details
//     }
// });

// export const fetchPetsAwaiting = () => {
//     return {
//         type: AWAITING_PETS
//     }
// }

// export const fetchPetsSuccess = (pets) => {
//     return {
//         type: SUCCESS_PETS,
//         pets: pets
//     }
// }

// export const fetchPetsError = (error) => {
//     return {
//         type: REJECTED_PETS,
//         error: error
//     }
// }





// export const fetchPets = () => dispatch => {
//     console.log("FETCHING PETS NOOOOOW")
// }

// export const fetchPets = () => dispatch => {
//     axios.get('http://eulerity-hackathon.appspot.com/pets')
//     .then(res => 
//         dispatch({
//             type: FETCH_PETS,
//             payload: res.data
//         })
//     );
// }
