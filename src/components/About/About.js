import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-wrapper'>
        <div className="about-container">
          <div className="sidebar glass">
            <a href="#rule1">1</a>
            <a href="#rule2">2</a>
            <a href="#rule3">3</a>
            <a href="#rule4">4</a>
          </div>
          <div className="box glass">
              <h3 id='rule1'>Game Rules 0</h3>
              <br />
              <hr />
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt quae reiciendis voluptatibus illum commodi, debitis suscipit obcaecati labore et magni recusandae libero dignissimos, nam ad mollitia dolorem optio eius!</p>
              <h3 id='rule2'>Game Rules 1</h3>
              <br />
              <hr />
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt quae reiciendis voluptatibus illum commodi, debitis suscipit obcaecati labore et magni recusandae libero dignissimos, nam ad mollitia dolorem optio eius!</p>
              <h3 id='rule3'>Game Rules 2</h3>
              <br />
              <hr />
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt quae reiciendis voluptatibus illum commodi, debitis suscipit obcaecati labore et magni recusandae libero dignissimos, nam ad mollitia dolorem optio eius!</p>
              <h3 id='rule4'>Game Rules 3</h3>
              <br />
              <hr />
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt quae reiciendis voluptatibus illum commodi, debitis suscipit obcaecati labore et magni recusandae libero dignissimos, nam ad mollitia dolorem optio eius!</p>
          </div>
        </div>
    </div>
  )
}
