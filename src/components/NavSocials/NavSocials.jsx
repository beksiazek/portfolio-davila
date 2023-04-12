import React from 'react';
import { BsInstagram } from "react-icons/bs";
import "./navSocials.css";

export default function NavSocials() {
  return (
    <div className='nav-socials'>
        <a href="https://instagram.com" target={"_blank"}><BsInstagram /></a>
    </div>
  )
}
