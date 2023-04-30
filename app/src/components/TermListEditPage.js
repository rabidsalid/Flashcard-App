import {React} from 'react';
import { FaPlus } from "react-icons/fa";
import EditingSetTermHolder from './EditingSetTermHolder';
import '../styles/TermListEditPage.css';

export default function TermListEditPage(props) {

    function addCard() {
        props.addFlashcard();
    }

    return (
        <div className='SetTermList w-75 mx-auto'>
            {props.flashcards.map((term) => {
                return <EditingSetTermHolder term={term} key={term.id} removeFlashcardLive={props.removeFlashcardLive}/>
            })}
            <div className='addcard shadow-sm' >
                <p className='align-middle addcardtext addcardbutton' onClick={addCard}><FaPlus></FaPlus> ADD CARD</p>
            </div>
            <div className='d-flex justify-content-center done-btn-div'>
                <a type='button' className='btn btn-primary done-btn' href='/'>Done</a>
            </div>
        </div>
    )
}
