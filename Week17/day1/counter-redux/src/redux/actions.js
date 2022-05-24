export const add = () => {
    return {
        type: 'ADD',
    }
}
export const substract = () => {
    return {
        type: 'SUBSTRACT',
    }
}
export const getUsers = () =>(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(users => {
            console.log(users);
            dispatch({
                type: 'GET_USERS',
                payload: users,
            })
    })
}
