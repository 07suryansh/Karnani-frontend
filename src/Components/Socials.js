import React from 'react'
import './socials.css'
import whatsapp from '../assets/whatsapp.svg'
import email from '../assets/email.webp'
import phone from '../assets/phone.svg'

function SocialCard(props){
    return (
        <div className="social-card">
            <img src={props.img} alt="" className='social-icon'/>
            <span>{props.detail}</span>
        </div>
    )
}

export default function Socials() {
  return (
    <div className='socials'>
        <span className="booking-heading">NEED HELP?</span>
        <span className="social-head">Let's have a chat ?</span>
        <div className="socials-content">
            <SocialCard
                img={whatsapp}
                detail={"Chat on WhatsApp"}
            />
            <SocialCard
                img={email}
                detail={"Email us"}
            />
            <SocialCard
                img={phone}
                detail={"+44 7895299086"}
            />
        </div>
    </div>
  )
}
