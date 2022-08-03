import React, { useContext } from 'react'
import { appContext } from '../Context/Appcontext';

export default function Topnav() {
    const {title}= useContext(appContext);
  return (
    <div>
        <h2>Topnav</h2>
        <p>title: <b>{title}</b></p>
        

    </div>
  )
}
