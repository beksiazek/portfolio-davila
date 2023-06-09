import React from 'react';
import { BsInstagram } from "react-icons/bs";
import "./socials.css";

export default function Socials() {
  return (
    <a className="socials" href="https://instagram.com" target={"_blank"}><BsInstagram /><span>Seguime!</span></a>
  )
}