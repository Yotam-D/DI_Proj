import { combineReducers } from "redux";
const initState = {
    counter : 0,
    usersArr: [],
}

export const count_reducer = (state = initState, action ={}) => {
    switch (action.type){
        case "ADD":
            return {...state, counter: state.counter + 1}
        case "SUBSTRACT":
            return {...state, counter: state.counter - 1}
        default:
            return {...state}
    }
}

export const users_reducer = (state = initState, action={}) =>{
    switch (action.type) {
        case "GET_USERS":
            return {...state, usersArr: action.payload}
        default:
            return {...state};
    }
}

export const rootReducer = combineReducers({
    count_reducer,users_reducer
})

export default rootReducer;