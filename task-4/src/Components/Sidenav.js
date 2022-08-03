import React, { useContext } from 'react'
import { appContext } from '../Context/Appcontext';

export default function Sidenav() {
    const {activeProfileID}= useContext(appContext);
  return (
    <div>
        <h2>Sidenav</h2>
        <p>activeProfileID: <b>{activeProfileID}</b></p>
    </div>
  )
}
