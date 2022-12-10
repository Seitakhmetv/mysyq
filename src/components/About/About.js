import React, { useContext, useEffect } from 'react'
import './About.css'
import axios from "axios";
import { UserContext } from '../UserContext';

export default function About() {
  const [User, setUser] = useContext(UserContext)
  const history = User.history
  return (
    <div className='about-wrapper'>
        <div className="about-container">
          <div className="sidebar glass">
            {history.map(e=>{
              return <div className="row">
                <h4>{e.name}</h4>
                <h4>{e.score}</h4>
              </div>
            })}
          </div>
        </div>
    </div>
  )
}
