import { AWAITING_PETS, REJECTED_PETS, SUCCESS_PETS } from "../actions/types";
// import { v4 as uuidv4 } from 'uuid';

const initialState = [{
    pets: [],
    loading: true
}];

export function petsReducer(state = initialState, action) {
    switch(action.type) {
        case AWAITING_PETS: 
            return {
                ...state,
                loading: true
            }
        case SUCCESS_PETS:
            return {
                ...state,
                loading: false,
                pets: action.payload
            }
        case REJECTED_PETS:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default petsReducer;


// const petsReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case FETCH_PETS:
//             return {
//                 ...state,
//                 pets: action.payload
//             }
//         default:
//             return state;
//     }
// }
