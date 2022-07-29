import React from "react";
import "./Home.scss";
import Balloons from "../../assets/images/Balloons.png";

const Home = () => {
  return (
    <div className="homePage">
      <h2>Word Categorizing Quizz</h2>
      <p>
        In English language, words can be categorized according to their
        syntactic functions, which is known as "Part of Speech". Examples of
        part of speech: (noun, verb, adjective, ...)
      </p>
      <div className="cardFooter">
        <button>Take a Quizz</button>
        <img alt="loading..." src={Balloons} className="ballon" />
      </div>
    </div>
  );
};

export default Home;
