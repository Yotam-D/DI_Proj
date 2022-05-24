const initState = {
    firstName: '',
    secondName: '',
    result:{},
}

export const firstN_reducer = (state = initState, action ={}) => {
    switch (action.type){
        case "CHANGE_FIRST":
            return {...state, firstName: action.payload};
        default:
            return {...state};
            }
        } 
        
    export const lastN_reducer = (state = initState, action ={}) => {
    switch (action.type){
        case "CHANGE_SECOND":
            return {...state, secondName: action.payload}
        default:
            return {...state};
    }
} 

export const Result_reducer = (state = initState, action ={}) => {
    switch (action.type){
        case "GET_USERS":
             return {...state, result: action.payload}
        default:
            return {...state};
    }
} 