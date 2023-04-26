import {React, useRef} from 'react';
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
        'question':questionRef.current.value,
        'answer':answerRef.current.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      })

    console.log("sent req:", questionRef.current.value, " / ", answerRef.current.value);
  }

  return (
    <div className='row shadow-sm align-items-center EditingSetTerm'>
      <div className='col SetTermChild'>
          <input className='inputfield shadow-none' defaultValue={props.term.question} ref={questionRef} onBlur={onUnfocus}/>
          <hr className='horLine'></hr>
      </div>

      <div className='col SetTermChildRight'>
          <input className='inputfield shadow-none' defaultValue={props.term.answer} ref={answerRef} onBlur={onUnfocus}/>
          <hr className='horLine'></hr>
      </div>
      
    </div>
  )
}

  // onChange={props.setFlashcard(term.id, this)}