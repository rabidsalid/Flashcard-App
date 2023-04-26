import React, {useState} from 'react';
import '../styles/Flashcard.css';

export default function Flashcard({ question, answer }) {
  const [flip, setFlip] = useState(false);
  return (
    <div className={flip ? 'flashcard shadow flipcard' : 'flashcard shadow'} onClick={() => setFlip(!flip)}>
        <div className='front'>{question}</div>
        <div className='back'>{answer}</div>
    </div>
  );
}


