import React, { Component } from 'react'
import './assets/CSS/head.css'
import logoImage from './assets/Images/logo-1.png' 
import { Link } from 'react-router-dom';

export class Heading extends Component {
  render() {
    return (
      <>
      <div className="headSite">
        <div className="container">
          <div className="Logo"><img src={logoImage} /></div>
          
            <ul className='navSystem'>
              <li className='navItem'>Home<span >+</span></li>
              <li className='navItem'>Services<span >+</span></li>
              <li className='navItem'>Vendors<span >+</span></li>
              <li className='navItem'><Link to="/counter" style={{textDecoration:'none',color: 'inherit'}}>Counter</Link><span >+</span></li>
              <li className='navItem'>Blog<span >+</span></li>
              <li className='navItem'>Contact</li>
            </ul>
          
          <div className="feats">
            <div className="lang">
                <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                	 viewBox="0 0 489 489" xmlSpace="preserve">
                <g>
                	<path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489C379.8,489,489,379.8,489,244.5S379.8,0,244.5,0z M447.4,223.7h-68.1
                		c-2.9-64.7-19-121.4-43.7-161.6C396.5,92.7,440.2,152.9,447.4,223.7z M223.7,46.4v177.3h-73.3C154.9,133,188.3,65.9,223.7,46.4z
                		 M223.7,265.3v177.4c-35.5-19.3-68.9-85.9-73.4-177.4H223.7z M265.3,442.6V265.3h73.3C334.2,356.1,300.8,423.1,265.3,442.6z
                		 M265.3,223.7V46.4c35.5,19.3,68.9,85.9,73.4,177.4h-73.4V223.7z M153.5,62.1c-24.7,40.1-40.9,96.9-43.7,161.6H41.7
                		C48.9,152.9,92.5,92.7,153.5,62.1z M41.7,265.3h68.1c2.9,64.7,19,121.4,43.7,161.6C92.5,396.3,48.9,336.1,41.7,265.3z M335.6,426.9
                		c24.7-40.1,40.9-96.9,43.7-161.6h68.1C440.2,336.1,396.5,396.3,335.6,426.9z"/>
                </g>
                </svg>
              Eng
              </div>
            <button className="log">
            <svg strokeWidth='2' stroke='white' fill="#ffffff" width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.642 20.669c-0.391 0.39-0.391 1.023-0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.39-0.39-1.023-0.39-1.414 0s-0.391 1.024 0 1.414l3.617 3.617h-19.264c-0.552 0-1 0.448-1 1s0.448 1 1 1h19.326zM30.005 0h-18c-1.105 0-2.001 0.895-2.001 2v9h2.014v-7.78c0-0.668 0.542-1.21 1.21-1.21h15.522c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-15.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.014 0.003v9.030c0 1.105 0.896 2 2.001 2h18c1.105 0 2-0.895 2-2v-28c-0.001-1.105-0.896-2-2-2z"></path>
            </svg>
            <span>
              Login
            </span>
            </button>
          </div>
          <button className="log bars"><span>&#9776;</span></button>
      </div>
      </div>
      <div className="sub-head">
      <div className="container">
          <h1>Service Details</h1>
          <h6>Home  /  Service Details</h6>
      </div>
      </div>
    </>
    )
  }
}
