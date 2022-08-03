import React, { useContext } from 'react'
import { appContext } from '../App'
import Grandchild from './Grandchild'

export default function Child() {

    const{counter,setCounter} = useContext(appContext);

    const handleclick= ()=>{
        if(counter<10){
            setCounter(counter+1)
        }
    }

  return (
    <div>
        <h2>Grandchild</h2>
        <button onClick={handleclick}>Counter</button>

        <Grandchild />

    </div>
  )
}
