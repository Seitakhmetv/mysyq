import React, { useContext } from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import {faHome, faGamepad, faRankingStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../UserContext'

export default function Navbar() {

  const [User, setUser] = useContext(UserContext);

  return (
    <div className="nav-container">
      <h3>{User.name}: {User.score}</h3>
      <NavLink to="/" style={{textDecoration: 'none', color: "white"}}><FontAwesomeIcon icon={faHome}/> Main</NavLink>
      <NavLink to="/game" style={{textDecoration: 'none', color: "white"}}><FontAwesomeIcon icon={faGamepad}/> Game</NavLink>
      <NavLink to="/about" style={{textDecoration: 'none', color: "white"}}><FontAwesomeIcon icon={faRankingStar}/> Leaderboard</NavLink>
      
    </div>
  )
}
