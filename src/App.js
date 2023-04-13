import Flashcard from './Flashcard';
import './App.css';
import FlashcardList from './FlashcardList';
import React, {useState} from 'react';
import SetTermHolder from './SetTermHolder';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  let currentCard = 0;
  return (
    <div>
      <div class='flashcardDiv'>
        <Flashcard question={flashcards[currentCard].question} answer={flashcards[currentCard].answer}></Flashcard>
      </div>
      <div className='SetTermList w-75 mx-auto'>
      <h4 class='SetTermListHeader'>Terms in this set</h4>
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
