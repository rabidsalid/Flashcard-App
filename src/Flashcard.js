import React, {useState} from 'react';
import './Flashcard.css';

export default function Flashcard({ question, answer }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className={flip ? 'flashcard flipcard' : 'flashcard'} onClick={() => setFlip(!flip)}>
        <div className='front'>{question}</div>
        <div className='back'>{answer}</div>
    </div>
  );
}
