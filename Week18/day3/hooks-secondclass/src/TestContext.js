import {useContext} from 'react';
import { AppContext } from './App';
const TestContext = (props) =>{
    const {counter, setCounter} = useContext(AppContext);
    return(
        <>
        Hello TextContext
        <h1>{counter}</h1>
        </>

    )
};

export default TestContext;