import React from 'react'
import Flashcard from './Flashcard'
import './FlashcardList.css'

export default function FlashcardList({ flashcards }) {
  return (
    <div className='flashcardList'>
      {flashcards.map((flashcard) => {
        return <Flashcard question={flashcard.question} answer={flashcard.answer} key={flashcard.id} />
      })}
    </div>
  )
}
