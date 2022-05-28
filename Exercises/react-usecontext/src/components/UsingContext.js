import React from 'react'
import {useContext} from 'react'
import {AppContext} from '../App'


function UsingContext() {
  const {counter,setCounter} = useContext(AppContext)
  return (
    <>
      <div>UsingContext</div>
      <div>
        <h2>{counter}</h2>
      </div>
    </>
    
    
  )
}

export default UsingContext