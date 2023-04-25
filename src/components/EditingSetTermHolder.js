import {React, useState} from 'react';
import '../styles/EditingSetTermHolder.css';

export default function EditingSetTermHolder(props) {
    const [question, setQuestion] = useState(props.term.question);

    const onChange = event => {
      setQuestion(event.target.value);
    }
    return (
      <div className='row shadow-sm align-items-center EditingSetTerm'>
        <div className='col SetTermChild'>
            <input className='inputfield shadow-none' value={question}  onChange={onChange}/>
            <hr className='horLine'></hr>
        </div>

        <div className='col SetTermChildRight'>
            <input className='inputfield shadow-none' defaultValue={props.term.answer}/>
            <hr className='horLine'></hr>
        </div>
        
      </div>
    )
  }

  // onChange={props.setFlashcard(term.id, this)}