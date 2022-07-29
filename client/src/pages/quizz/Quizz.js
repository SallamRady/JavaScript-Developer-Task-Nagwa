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
            <Question question='play'/>
            <div className='quizzPageFooter'>
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export default Quizz;