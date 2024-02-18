import React from 'react'
import './sponsers.css'
import ss1 from '../assets/ss1.webp'
import ss2 from '../assets/ss2.webp'
import ss3 from '../assets/ss3.webp'
import ss4 from '../assets/ss4.webp'
import ss5 from '../assets/ss5.webp'

export default function Sponsers() {
  return (
    <div className='sponsers'>
        <img src={ss1} alt="" className='sponser-img'/>
        <img src={ss2} alt="" className='sponser-img'/>
        <img src={ss3} alt="" className='sponser-img'/>
        <img src={ss4} alt="" className='sponser-img'/>
        <img src={ss5} alt="" className='sponser-img'/>
    </div>
  )
}
