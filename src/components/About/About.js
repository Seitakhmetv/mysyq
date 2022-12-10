import React, { useEffect } from 'react'
import './About.css'
import axios from "axios";

export default function About() {
  let proPlayers = []
  
  const callAPI = () => {
    const options = {
      method: 'GET',
      url: 'https://api.opendota.com/api/proPlayers'
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.slice(0, 20));
      proPlayers = response.data.slice(0, 20)
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  useEffect(() => {
    callAPI();
  }, []);


  return (
    <div className='about-wrapper'>
        <div className="about-container">
          <div className="sidebar glass">
            {proPlayers.map(e=>{
              return (<h1>kk</h1>);
            })}
          </div>
        </div>
    </div>
  )
}
