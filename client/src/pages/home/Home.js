import React,{useContext,useEffect} from "react";
import "./Home.scss";
import Balloons from "../../assets/images/Balloons.png";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const Home = () => {
  // declaration
  const Navigator = useNavigate();
  const {startNewQuizz} = useContext(GlobalContext);
  /**
   * method:handleTakeQuizz
   * function:start a new quizz
   */
  const handleTakeQuizz = async () => {
    startNewQuizz();
    Navigator('/quizz/newquizz');
  }
  return (
    <div className="homePage">
      <h2>Word Categorizing Quizz</h2>
      <p>
        In English language, words can be categorized according to their
        syntactic functions, which is known as "Part of Speech". Examples of
        part of speech: (noun, verb, adjective, ...)
      </p>
      <div className="cardFooter">
        <button onClick={handleTakeQuizz}>Take a Quizz</button>
        <img alt="loading..." src={Balloons} className="ballon" />
      </div>
    </div>
  );
};

export default Home;
