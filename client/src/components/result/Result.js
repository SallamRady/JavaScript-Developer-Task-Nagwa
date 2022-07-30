import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Resut.scss";
import { useNavigate } from "react-router";

const Result = () => {
  // declaration
  const Navigator = useNavigate();
  const { questions, resetState, startNewQuizz } = useContext(GlobalContext); // fetch data[questions] from context
  //calculate totalScore
  useEffect(() => {
    //submit
    let totalScore = 0;
    questions.forEach((item) => {
      totalScore = totalScore + Number(item.score);
    });
    console.log(totalScore);
  }, []);
  /**
   * method:handleTryAgain
   * function:reset globa start start new quizz
   */
  const handleTryAgain = () => {
    resetState();
    startNewQuizz();
    Navigator("/quizz/newquizz");
  };
  const question = questions.map((item) => {
    return (
      <tr>
        <td>{item.word}</td>
        <td>{item.choose?item.choose:'No Answer'}</td>
        <td>{item.pos}</td>
        <td>{item.score}</td>
      </tr>
    );
  });
  return (
    <div className='resultContainer'>
      <div className="resultCard">
        <p>final Score : 79%</p>
        <button onClick={handleTryAgain}>Try Again</button>
      </div>

      <div className="Answers">
        <h4>Quizz Answers</h4>
        <table>
          <tr>
            <th>Word</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Score</th>
          </tr>
          {question}
        </table>
      </div>
    </div>
  );
};

export default Result;
