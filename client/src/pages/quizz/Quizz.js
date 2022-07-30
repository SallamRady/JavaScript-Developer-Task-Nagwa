import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Question from "../../components/question/Question";
import Result from "../../components/result/Result";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router";
import "./Quizz.scss";

const Quizz = () => {
  const { progressBar, questions } = useContext(GlobalContext);
  const Navigator = useNavigate();
  /**
   * if refresh case and there is no data redirect to home page
   */
  useEffect(() => {
    if (window.location.pathname == "/quizz" || questions.length == 0) {
      Navigator("/");
    }
  }, []);

  return (
    <div className="quizzPage">
      <div className="quizzPageHeader">
        <h2>Word Categorizing Quizz</h2>
        <p>{progressBar > 10 ? 10 : progressBar + 1}/10</p>
      </div>
      <progress id="file" value={progressBar + 1} max="10">
        {" "}
        {progressBar + 1}{" "}
      </progress>
      <Outlet />
    </div>
  );
};

export default Quizz;
