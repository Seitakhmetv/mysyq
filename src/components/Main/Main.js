import React from 'react'
import {NavLink} from 'react-router-dom'
import './Main.css'
import {faTriangleCircleSquare, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
  return (
    <div className="main-container">
      <section className='first'>
        <div className="main-text">
          <h4>Hey Hunter!</h4>
          <br />
          <p>Today's bounty is a <strong> red stray cat</strong>. Catch it as fast as you can and you will be rewarded generously!</p>
        </div>
        <NavLink to="game">
          <div className="play-btn">
          PLAY <FontAwesomeIcon icon={faTriangleCircleSquare}/>
          </div>
        </NavLink>
      </section>
    </div>
  )
}
