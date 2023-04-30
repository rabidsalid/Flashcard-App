import FlashcardPage from './components/FlashcardPage';
import TermlistEditPage from './components/TermListEditPage';
import {useState, React, useEffect} from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    console.log('useEffect ran');


    async function getCards() {
      try {
        const response = await fetch('http://localhost:8080/getcards');

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        setFlashcards(result);
      } catch (err) {
        console.log(err);
      }
    }

    getCards();
  }, []);

  function addFlashcardLive() {
    setFlashcards([...flashcards, {
      id: flashcards[flashcards.length-1].id + 1,
      question: '',
      answer: '',
      userid: 'null'
    }]);
    console.log("added card")
  }

  function removeFlashcardLive(id) {
    setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
    console.log("removed card")
  }

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FlashcardPage flashcards={flashcards}/>} />
        <Route path='/edit' element={<TermlistEditPage flashcards={flashcards} removeFlashcardLive={removeFlashcardLive} addFlashcardLive={addFlashcardLive}/>} />
      </Routes>
    </Router>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answer: 'Paris',
    userid: 'null'
  },
  {
    id: 2,
    question: 'Who is CEO of Tesla?',
    answer: 'Elon Musk',
    userid: 'null'
  }
]
export default App;
