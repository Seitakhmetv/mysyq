import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import {faHome, faGamepad, faBookSkull} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {


  return (
    <div className="nav-container">
      <NavLink to="/" style={{textDecoration: 'none', color: "white"}}><FontAwesomeIcon icon={faHome}/> Main</NavLink>
      <NavLink to="/game" style={{textDecoration: 'none', color: "white"}}><FontAwesomeIcon icon={faGamepad}/> Game</NavLink>
      <NavLink to="/about" style={{textDecoration: 'none', color: "white"}}><FontAwesomeIcon icon={faBookSkull}/> About</NavLink>
    </div>
  )
}
