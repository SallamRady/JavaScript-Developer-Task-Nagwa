import React, { useState,useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Resut.scss";
import { useNavigate } from "react-router";
import axios from "axios";
import { HostName } from "../../utils/globalVariables";

const Result = () => {
  // declaration
  const Navigator = useNavigate();
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(0);
  const { questions, setProgressBar, startNewQuizz } = useContext(GlobalContext); // fetch data[questions] from context
  //calculate totalScore
  useEffect(() => {
    //submit
    let totalScore = 0;
    questions.forEach((item) => {
      totalScore = totalScore + Number(item.score);
    });
    // console.log(totalScore);
    setScore(totalScore);
    // send post request to calc rank
    axios({
      method: 'post',
      url: `${HostName}/getRank`,
      headers: {
        'Content-Type': 'application/json'
      }, 
      data: {
        score: totalScore,
      }
    }).then(response => {
      //console.log(response.data)
      setRank(response.data.rank)
    });
  }, []);
  /**
   * method:handleTryAgain
   * function:reset globa start start new quizz
   */
  const handleTryAgain = async () => {
    await startNewQuizz();
    setProgressBar(-1);
    Navigator("/quizz/newquizz");
  };
  const question = questions.map((item) => {
    return (
      <tr key={item.id}>
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
        <p>final Score : {score}  -  Rank : {rank} %</p>
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
