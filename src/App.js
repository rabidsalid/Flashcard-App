import Flashcard from './Flashcard';
import './App.css';
import FlashcardList from './FlashcardList';
import React, {useState} from 'react';
import SetTermHolder from './SetTermHolder';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div>
      <FlashcardList flashcards={flashcards}></FlashcardList>
      <div className='SetTermList w-75 mx-auto'>
        {flashcards.map((term) => {
          return <SetTermHolder term={term} key={term.id} />
        })}
      </div>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answer: 'Paris'
  },
  {
    id: 2,
    question: 'Who is CEO of Tesla?',
    answer: 'Elon Musk'
  }
]
export default App;
