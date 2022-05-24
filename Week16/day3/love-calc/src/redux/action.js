export const changeFirst = (value) => {
    return {
        type: "CHANGE_FIRST",
        payload: value,
    }
}
export const changeSecond = (value) => {
    return {
        type: "CHANGE_SECOND",
        payload: value,
    }
}
export const handleClick = () => (dispatch, getState) => {
    console.log('on handleClick');
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
          'X-RapidAPI-Key': '5473db0d60msh3267219b34229f4p147815jsna12728464b94'
        }
      };
      console.log('getState', getState());
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${getState().firstN_reducer.firstName}&fname=${getState().lastN_reducer.secondName}`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          dispatch({
              type: "GET_USERS",
              payload: response})
          })
        .catch(err => console.error(err));
}
