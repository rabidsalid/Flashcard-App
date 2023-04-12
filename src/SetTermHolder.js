import React from "react";
import './SetTermHolder.css'
import { FaPen, FaVolumeUp, FaStar } from "react-icons/fa";

export default function SetTermHolder({ term }) {
    return (
      <div className='row shadow-sm align-items-center SetTerm'>
        <div className="col SetTermChild vl">{term.question}</div> 
        <div className="col SetTermChildRight">{term.answer}</div>
        <div className="col buttonDiv "><FaPen/><FaVolumeUp/><FaStar/></div>
      </div>
    )
  }