import Flashcard from './Flashcard';
import '../styles/App.css';
import React, {useState} from 'react';
import SetTermHolder from './SetTermHolder';
import { FaArrowRight, FaArrowLeft, FaPen } from "react-icons/fa";

export default function FlashcardPage(props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [flip, setFlip] = useState(false);

  const prevCard =  () => {
    if (currentCard > 0) {
      if (flip){
        setFlip(!flip);
      }
      setTimeout(() => setCurrentCard(currentCard - 1), 50);
    }
  }

  const nextCard = () => {
    if (currentCard < props.flashcards.length - 1) {
      if (flip){
        setFlip(!flip);
      }
      setTimeout(() => setCurrentCard(currentCard + 1), 50);
    }
  }

  const flipCard = () => {
    setFlip(!flip);
  }
  
  return (
    <div>
      <div className='flashcardDiv'>
        <Flashcard question={props.flashcards[currentCard].question} answer={props.flashcards[currentCard].answer} flip={flip} setFlip={flipCard}></Flashcard>
      </div>
      <div className='flashcardButtons justify-content-center'>
        <FaArrowLeft className='buttons' onClick={prevCard}/><p className='cardNum'>{currentCard + 1}/{props.flashcards.length}</p><FaArrowRight className='buttons' onClick={nextCard}/>
      </div>
      <div className='SetTermList w-75 mx-auto'>
        <h4 className='SetTermListHeader d-flex justify-content-between'>
          Terms in this set ({props.flashcards.length})
          <a className='SetTermListEdit' href='/edit'><FaPen className='buttons'/></a>
        </h4>
        
        {props.flashcards.map((term) => {
            return <SetTermHolder term={term} key={term.id} />
        })}
      </div>
    </div>
  );
}