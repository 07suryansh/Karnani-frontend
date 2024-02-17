import React from 'react'
import logo from '../assets/logo.webp'
import './introduction.css'

export default function Introduction() {
  return (
    <div className='introduction-page'>
        <div className="introduction-nav">
            <div className="nav-left">
              <img src={logo} alt="" className='company-logo'/>
            </div>
            <div className="nav-right">
              <button className='nav-btn btn'>Get in touch !</button>
            </div>
        </div>
    </div>
  )
}
