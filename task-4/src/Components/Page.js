import React, { useContext } from 'react'
import { appContext } from '../Context/Appcontext';
import Profile from "./Profile";

export default function Page() {
    const {username}= useContext(appContext);
  return (
    <div>
        <h2>Page</h2>
        <p>username: <b>{username}</b></p>

        <Profile/>

    </div>
  );
}
