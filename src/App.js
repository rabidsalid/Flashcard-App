import FlashcardPage from './components/FlashcardPage';
import TermlistEditPage from './components/TermListEditPage';
import './styles/App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FlashcardPage/>} />
        <Route path='/edit' element={<TermlistEditPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
