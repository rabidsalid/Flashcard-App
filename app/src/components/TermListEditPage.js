import {React, useState} from 'react';
import EditingSetTermHolder from './EditingSetTermHolder';
import '../styles/TermListEditPage.css';

export default function TermListEditPage(props) {

    return (
        <div className='SetTermList w-75 mx-auto'>
            {props.flashcards.map((term) => {
                return <EditingSetTermHolder term={term} key={term.id} />
            })}
            <div className='d-flex justify-content-center done-btn-div'>
                <button type="button" className='btn btn-primary done-btn'>Done</button>
            </div>
        </div>
    )
}
