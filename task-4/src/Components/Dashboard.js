import React, { useContext } from 'react'
import { appContext } from '../Context/Appcontext'
import Main from './Main'
import Sidenav from './Sidenav'

export default function Dashboard() {
    const {title, username, activeProfileID}= useContext(appContext);
  return (
    <div>
        <h2>Dashboard</h2>
        <p>title: <b>{title}</b></p>
        <p>username: <b>{username}</b></p>
        <p>activeProfileID: <b>{activeProfileID}</b></p>

        <Sidenav />

        <Main/>


    </div>
  )
}
