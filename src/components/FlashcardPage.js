import Flashcard from './Flashcard';
import '../styles/App.css';
import React, {useState} from 'react';
import SetTermHolder from './SetTermHolder';
import { FaArrowRight, FaArrowLeft, FaPen } from "react-icons/fa";

export default function FlashcardPage() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  const [currentCard, setCurrentCard] = useState(0)


  const prevCard =  () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  }

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  }

  
  return (
    <div>
      <div class='flashcardDiv'>
        <Flashcard question={flashcards[currentCard].question} answer={flashcards[currentCard].answer}></Flashcard>
      </div>
      <div className='flashcardButtons justify-content-center'>
        <FaArrowLeft className='buttons' onClick={prevCard}/><p className='cardNum'>{currentCard + 1}/{flashcards.length}</p><FaArrowRight className='buttons' onClick={nextCard}/>
      </div>
      <div className='SetTermList w-75 mx-auto'>
        <h4 class='SetTermListHeader d-flex justify-content-between'>
          Terms in this set ({flashcards.length})
          <a class='SetTermListEdit' href='/edit'><FaPen class='buttons'/></a>
        </h4>
        
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