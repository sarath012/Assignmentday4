import React, { useContext } from 'react'
import { appContext } from '../Context/Appcontext';
import Page from './Page'
import Topnav from './Topnav'

export default function Main() {
    const {title, username}= useContext(appContext);
  return (
    <div>
        <h2>Main</h2>
        <p>title: <b>{title}</b></p>
        <p>username: <b>{username}</b></p>

        <Topnav />

        <Page />
    </div>
  )
}
