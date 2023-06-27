import React from 'react';
import { TbMail } from "react-icons/tb";
import "./socials.css";

export default function Socials() {
  return (
    <a className="socials" href="mailto:maitedavila1606@gmail.com" rel="noopener noreferrer" target={"_blank"}><TbMail className='socials-icon'/><span>Hablemos!</span></a>
  )
}