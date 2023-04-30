import {React, useRef} from 'react';
import { FaTimes } from "react-icons/fa";
import '../styles/EditingSetTermHolder.css';

export default function EditingSetTermHolder(props) {
  const questionRef = useRef();
  const answerRef = useRef();

  function onUnfocus() {
    console.log("send req");

    fetch('http://localhost:8080/modifycard', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        'id':props.term.id,
        'question':questionRef.current.value.trim(),
        'answer':answerRef.current.value.trim()
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      })

    console.log("sent req:", questionRef.current.value, " / ", answerRef.current.value);
  }

  function deleteCard() {
    console.log("delete card request");
    fetch('http://localhost:8080/removecard', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        'id':props.term.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      })
      console.log("sent delete card request")
      props.removeFlashcardLive(props.term.id);
  }

  return (
    <div className='row shadow-sm align-items-center EditingSetTerm'>
      <div className='col SetTermChild'>
          <input className='inputfield shadow-none' defaultValue={props.term.question} placeholder='Enter your question' ref={questionRef} onBlur={onUnfocus}/>
          <hr className='horLine'></hr>
      </div>

      <div className='col SetTermChildRight'>
          <input className='inputfield shadow-none' defaultValue={props.term.answer} placeholder='Enter your answer' ref={answerRef} onBlur={onUnfocus}/>
          <hr className='horLine'></hr>
      </div>
      <div className='deleteButtonDiv'>
        <FaTimes className='buttons' onClick={deleteCard}></FaTimes>
      </div>
      
    </div>
  )
}