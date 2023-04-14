import React from "react";
import '../styles/SetTermHolder.css'
import { FaPen, FaVolumeUp, FaStar } from "react-icons/fa";

export default function SetTermHolder({ term }) {
    return (
      <div className='row shadow-sm align-items-center SetTerm'>
        <div className="col SetTermChild vl">{term.question}</div> 
        <div className="col SetTermChildRight">{term.answer}</div>
        <div className="col-2 justify-content-end buttonDiv "><FaStar class='buttons'/><FaVolumeUp class='buttons'/><FaPen class='buttons'/></div>
      </div>
    )
  }