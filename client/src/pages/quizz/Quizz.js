import React,{useContext} from 'react';
import Question from '../../components/question/Question';
import {GlobalContext} from '../../context/GlobalContext';
import './Quizz.scss';

const Quizz = () => {
    const { progressBar } = useContext(GlobalContext);
    return (
        <div className='quizzPage'>
            <div className='quizzPageHeader'>
                <h2>Word Categorizing Quizz</h2>
                <p>{progressBar}/10</p>
            </div>
            <progress id="file" value={progressBar} max="10"> {progressBar} </progress>
            <Question/>            
        </div>
    );
};

export default Quizz;