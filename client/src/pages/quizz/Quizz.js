import React,{useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Question from '../../components/question/Question';
import Result from '../../components/result/Result';
import {GlobalContext} from '../../context/GlobalContext';
import './Quizz.scss';

const Quizz = () => {
    const { progressBar } = useContext(GlobalContext);
    return (
        <div className='quizzPage'>
            <div className='quizzPageHeader'>
                <h2>Word Categorizing Quizz</h2>
                <p>{progressBar > 10 ? 10 : progressBar+1}/10</p>
            </div>
            <progress id="file" value={progressBar+1} max="10"> {progressBar+1} </progress>
            {/* {progressBar <= 10 && <Question/>}        
            {progressBar > 10 && <Result/>}         */}
            <Outlet/>
        </div>
    );
};

export default Quizz;