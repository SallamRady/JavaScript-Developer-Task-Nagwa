import React from 'react';
import Question from '../../components/question/Question';
import './Quizz.scss';

const Quizz = () => {
    return (
        <div className='quizzPage'>
            <div className='quizzPageHeader'>
                <h2>Word Categorizing Quizz</h2>
                <p>7/10</p>
            </div>
            <progress id="file" value="7" max="10"> 7 </progress>
            <Question question='play'/>            
        </div>
    );
};

export default Quizz;