import React, { useContext } from 'react'
import { appContext } from '../Context/Appcontext';

export default function Profile() {
    const {username}= useContext(appContext);
  return (
    <div>
        <h2>Profile</h2>
        <p>username: <b>{username}</b></p>

    </div>
  )
}
